import React from "react";
import Breadcrumbs from "../../layout/Breadcrumbs";
import SideBar from "./SideBar";
import DashboardContainer from "../Dashboard/DashboardContainer";
import SummaryTable from "./SummaryTable";

const MeterReading = () => {
  return (
    <div id="main">
      <Breadcrumbs heading="Meter Reading" />
      <div className="d-md-flex">
        <SideBar />
        <DashboardContainer>
          <p className="lead">Meter readings as at 1st June 2021</p>
          <SummaryTable />
        </DashboardContainer>
      </div>
    </div>
  );
};

export default MeterReading;
