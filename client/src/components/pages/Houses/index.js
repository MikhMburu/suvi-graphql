// Import libraries
import React, { Fragment } from "react";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import DashboardContainer from "../Dashboard/DashboardContainer";
import HseSideBar from "./HseSideBar";
import HouseDetails from "./HouseDetails";

const Houses = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Houses" />
      <DashboardContainer>
        <HseSideBar />
        <HouseDetails />
      </DashboardContainer>
    </Fragment>
  );
};

export default Houses;
