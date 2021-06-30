// Import Libraries
import React, { useEffect, Fragment } from "react";
import { useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// Import files and functions
import { LOAD_TENANTS_FOR_READING_GQL } from "../../../GraphQL/Queries";
import { actionCreators } from "../../../redux/Actions";
// Import Components
import Breadcrumbs from "../../layout/Breadcrumbs";
import DashboardContainer from "../Dashboard/DashboardContainer";
import SummaryTable from "./SummaryTable";
import ReadingInput from "./ReadingInput";

const MeterReading = () => {
  // GraphQL query
  // eslint-disable-next-line
  const { error, loading, data } = useQuery(LOAD_TENANTS_FOR_READING_GQL);

  // Dispatch results to redux state on load
  const dispatch = useDispatch();
  const { loadOccupiedHouses } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (data) {
      loadOccupiedHouses(data.getAllActiveTenants);
    }
    // eslint-disable-next-line
  }, [data]);
  return (
    <Fragment>
      <Breadcrumbs heading="Meter Reading" />
      <DashboardContainer>
        <ReadingInput />
        <SummaryTable />
      </DashboardContainer>
    </Fragment>
  );
};

export default MeterReading;
