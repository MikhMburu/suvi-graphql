// Import libraries
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useQuery, useLazyQuery } from "@apollo/client";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
// Import Files and functions
import isEmpty from "../../../utilities/isEmpty";
import {
  LOAD_TENANTS_FOR_READING_GQL,
  LOAD_TENANTS_CONSUMPTION_GQL,
} from "../../../GraphQL/Queries";
// Import components
import Spinner from "../../common/Spinner";
import InputItem from "./InputItem";

const MRSidebar = () => {
  // _____React State
  const [rdate, setRdate] = useState("");
  const [mreadings, setMreadings] = useState([]);
  // _____React Effect
  useEffect(() => {
    /*
        Meter readings are made at either the end of month or beginning of the month. The system should, however, reflect end month as the input date, hence:
          - If the readings are made at beginning of the month, the input date in system should be end of last-month
          - If readings are made at end of month, it will be same input date 
      */
    const today = moment().format("YYYY-MM-DD");
    const endOfMonth = moment().endOf("month").format("YYYY-MM-DD");
    const lastMonth = moment()
      .subtract(1, "months")
      .endOf("month")
      .format("YYYY-MM-DD");
    let inputDate;
    if (today === endOfMonth) {
      inputDate = endOfMonth;
    } else if (today <= endOfMonth) {
      inputDate = lastMonth;
    }
    setRdate(inputDate);

    // eslint-disable-next-line
  }, []);
  // _____Functions
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      if (mreadings) {
        const readingsArr = Object.keys(mreadings).map((item) => {
          return {
            tenant: item,
            date: rdate,
            reading: mreadings[item],
          };
        });

        const res = await axios.post("/meter-readings", readingsArr, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        // res comes back with a success and a msg key
        if (res.data.success) {
          confirmAlert({
            overlayClassName: "alert-overlay",
            onClickOutside: () => {
              loadConsumption();
              setMreadings([]);
            },
            customUI: ({ onClose }) => {
              return (
                <div className="card alert-card">
                  <h1 className="text-center text-success">Success</h1>
                  {res.data.msg}
                  <button
                    className="btn btn-outline-success"
                    onClick={() => {
                      loadConsumption();
                      setMreadings([]);
                      onClose();
                    }}
                  >
                    OK
                  </button>
                </div>
              );
            },
          });
        }
      }
    } catch (err) {
      console.log("Error in sending readings..\n", err);
    }
  };
  const onChangeHandler = (e) => {
    setMreadings({
      ...mreadings,
      [e.target.name]: e.target.value,
    });
  };
  // _____GraphQL Query
  const {
    error: tError,
    loading: tLoading,
    data: tData,
  } = useQuery(LOAD_TENANTS_FOR_READING_GQL);
  const [loadConsumption, { error: cError }] = useLazyQuery(
    LOAD_TENANTS_CONSUMPTION_GQL
  );
  let displayHouses;

  if (tError) {
    displayHouses = <p>Error in query</p>;
  }
  if (tLoading) {
    displayHouses = <Spinner />;
  }
  if (tData) {
    if (isEmpty(tData)) {
      displayHouses = <p>Empty</p>;
    } else {
      const _houses = [].concat(tData.getAllActiveTenants);
      displayHouses = _houses
        .sort((a, b) => a.hseno - b.hseno)
        .map((hse) => {
          return (
            <InputItem onChange={onChangeHandler} key={hse._id} house={hse} />
          );
        });
    }
  }

  return (
    <div className="col-md-2 bg-dark text-light py-2">
      <form onSubmit={onSubmitHandler}>
        <table className="table text-light table-sm">
          <thead>
            <tr>
              <th scope="col" colspan="2">
                Meter Readings
              </th>
            </tr>
          </thead>
          <tbody>
            {displayHouses}
            <tr>
              <td colspan="2">
                <button className="btn btn-outline-success form-control">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default MRSidebar;
