// Import libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
// Import files and functions
// -------------REDUX
import { actionCreators } from "../../../redux/Actions";
// Import Components
import InputItem from "./InputItem";

const ReadingInput = () => {
  // ------Redux
  const dispatch = useDispatch();
  const { callConsumption } = bindActionCreators(actionCreators, dispatch);
  const houses = useSelector((state) => state.readings.occupiedHouses);
  const _houses = [].concat(houses);
  // ------React State
  const [rdate, setRdate] = useState("");
  const [mreadings, setMreadings] = useState([]);
  // ------Effect
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

  const onChangeHandler = (e) => {
    setMreadings({
      ...mreadings,
      [e.target.name]: e.target.value,
    });
  };
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
          alert(res.data.msg);
          callConsumption();
        }
      }
    } catch (err) {
      console.log("Error in sending readings..\n", err);
    }
  };

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
            {houses ? (
              _houses
                .sort((a, b) => a.hseno - b.hseno)
                .map((hse) => {
                  return (
                    <InputItem
                      onChange={onChangeHandler}
                      key={hse._id}
                      house={hse}
                    />
                  );
                })
            ) : (
              <tr>
                <td>No data</td>
              </tr>
            )}

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

export default ReadingInput;
