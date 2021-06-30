// Import Libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { bindActionCreators } from "redux";
import Moment from "react-moment";
import moment from "moment";
// Import files and functions
import { LOAD_TENANTS_CONSUMPTION_GQL } from "../../../GraphQL/Queries";
import isEmpty from "../../../utilities/isEmpty";
import { actionCreators } from "../../../redux/Actions";
// Import Components
import SummaryTableItem from "./SummaryTableItem";

const SummaryTable = () => {
  // GraphQL query
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_TENANTS_CONSUMPTION_GQL, {
    fetchPolicy: "cache-and-network",
  });
  // ------Redux
  const dispatch = useDispatch();
  const consumption = useSelector((state) => state.readings.consumption);
  const _consumption = [].concat(consumption);

  const isLoading = useSelector((state) => state.readings.callingConsumption);
  const { stopLoadingConsumption, loadSummary } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // React hooks
  useEffect(() => {
    if (isLoading) {
      if (!loading) {
        loadSummary(data.getAllActiveTenants);
      }
    }
    data
      ? console.log("Data from graphql query... \n", data.getAllActiveTenants)
      : console.log("No data from query");
    //eslint-disable-next-line
  }, [isLoading, data]);
  useEffect(() => {
    if (consumption) {
      stopLoadingConsumption();
    }
    console.log("Consumption in UseEffect... \n", consumption);
    //eslint-disable-next-line
  }, [consumption]);
  console.log("Consumption copied into new array... \n", _consumption);
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
            <th scope="col">Current</th>
            <th scope="col">Previous</th>
            <th scope="col">Consumption</th>
          </tr>
        </thead>
        <tbody className="font-monospace">
          {isEmpty(consumption) ? (
            <tr>
              <td colSpan="6" className="display-4 text-black-50 text-center">
                No Data to show
              </td>
            </tr>
          ) : (
            _consumption
              .sort((a, b) => a.hseno - b.hseno)
              .map((tenant) => {
                return <SummaryTableItem key={tenant.hseno} tenant={tenant} />;
              })
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">
              <button className="btn btn-outline-success form-control">
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
