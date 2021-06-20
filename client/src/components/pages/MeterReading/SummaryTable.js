// Import Libraries
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { bindActionCreators } from "redux";
// Import files and functions
import { LOAD_TENANTS_CONSUMPTION_GQL } from "../../../GraphQL/Queries";
import { actionCreators } from "../../../redux/Actions";
// Import Components
import SummaryTableItem from "./SummaryTableItem";

const SummaryTable = () => {
  // GraphQL query
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_TENANTS_CONSUMPTION_GQL);
  // ------Redux
  const dispatch = useDispatch();
  const consumption = useSelector((state) => state.readings.consumption);
  const isLoading = useSelector((state) => state.readings.callingConsumption);
  const { stopLoadingConsumption, loadSummary } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // React hooks
  useEffect(() => {
    if (isLoading) {
      loadSummary(data.getAllActiveTenants);
    }
    //eslint-disable-next-line
  }, [isLoading]);
  useEffect(() => {
    if (consumption) {
      stopLoadingConsumption();
    }
    //eslint-disable-next-line
  }, [consumption]);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">House</th>
          <th scope="col">Tenant</th>
          <th scope="col">Current</th>
          <th scope="col">Previous</th>
          <th scope="col">Consumption</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody className="font-monospace">
        {consumption.map((tenant, i) => {
          return <SummaryTableItem key={i} tenant={tenant} />;
        })}
        {/* <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem />
        <SummaryTableItem /> */}
      </tbody>
    </table>
  );
};

export default SummaryTable;
