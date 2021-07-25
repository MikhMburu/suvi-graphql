// Import Libraries
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import Moment from "react-moment";
import moment from "moment";
// Import files and functions
import { LOAD_TENANTS_CONSUMPTION_GQL } from "../../../GraphQL/Queries";
import isEmpty from "../../../utilities/isEmpty";
// Import Components
import SummaryTableItem from "./SummaryTableItem";
import Spinner from "../../common/Spinner";

const SummaryTable = () => {
  const [consumption, setConsumption] = useState([]);
  // GraphQL query
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_TENANTS_CONSUMPTION_GQL);
  useEffect(() => {
    if (!loading) {
      setConsumption(data.getAllActiveTenants);
    }
  }, [data, loading]);

  const clickHandler = async (e) => {
    e.preventDefault();
    const endOfLastMonth = moment()
      .endOf("month")
      .subtract(1, "month")
      .format("YYYYMMDD");
    const invObj = {};
    invObj.inv_date = moment()
      .endOf("month")
      .subtract(1, "month")
      .format("YYYY-MM-DD");
    invObj.bills = [];
    const bills = consumption.map((tnt) => {
      const _tnt = {};
      _tnt._id = `${endOfLastMonth}-${tnt.hseno}`;
      _tnt.nat_id = tnt.user.national_id;
      _tnt.email = tnt.user.email[0];
      _tnt.phone = tnt.user.phone[0];
      _tnt.tenant = tnt.user.first_name + " " + tnt.user.other_names;
      _tnt.hseno = tnt.hseno;
      _tnt.bal_bf = 0;
      if (tnt.current_mreading) {
        _tnt.current_mreading = tnt.current_mreading.reading.toFixed(2);
      } else {
        _tnt.current_mreading = 0;
      }
      if (tnt.prev_mreading) {
        _tnt.prev_mreading = tnt.prev_mreading.reading.toFixed(2);
      } else {
        _tnt.prev_mreading = 0;
      }
      _tnt.consumption = (_tnt.current_mreading - _tnt.prev_mreading).toFixed(
        2
      );
      _tnt.litres_consumed = _tnt.consumption * 1000;
      _tnt.amount_owed = (_tnt.consumption * 100).toFixed(2);

      return _tnt;
    });
    invObj.bills = bills;

    try {
      const res = await axios.post("/invoice", invObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      confirmAlert({
        overlayClassName: "alert-overlay",

        customUI: ({ onClose }) => {
          return (
            <div className="card alert-card">
              <h1 className="text-center text-success">Success</h1>
              {res.data.msg}
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  onClose();
                }}
              >
                OK
              </button>
            </div>
          );
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  let displayData;
  if (error) {
    displayData = (
      <tr>
        <td colSpan="6" className="display-4 text-black-50 text-center">
          Error in GraphQL query
        </td>
      </tr>
    );
  }
  if (loading) {
    displayData = (
      <tr>
        <td colSpan="6" className="display-4 text-black-50 text-center">
          <Spinner />
        </td>
      </tr>
    );
  }
  if (data) {
    if (isEmpty(data)) {
      displayData = (
        <tr>
          <td colSpan="6" className="display-4 text-black-50 text-center">
            No Data to show
          </td>
        </tr>
      );
    } else {
      const _consumption = [].concat(consumption);

      if (!isEmpty(_consumption)) {
        displayData = _consumption
          .sort((a, b) => a.hseno - b.hseno)
          .map((tenant) => {
            return <SummaryTableItem key={tenant.hseno} tenant={tenant} />;
          });
      }
    }
  }

  return (
    <div className="col-md-10">
      <p className="lead">
        Meter readings as at{" "}
        <Moment format="Do MMM, YYYY">
          {moment().subtract(1, "months").endOf("month")}
        </Moment>
      </p>
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th scope="col">House</th>
            <th scope="col">Tenant</th>
            <th scope="col">Previous</th>
            <th scope="col">Current</th>
            <th scope="col">Consumption</th>
          </tr>
        </thead>
        <tbody className="font-monospace">{displayData}</tbody>
        <tfoot>
          <tr>
            <td colSpan="6">
              <button
                className="btn btn-outline-success form-control"
                onClick={clickHandler}
              >
                Publish to Invoice
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SummaryTable;
