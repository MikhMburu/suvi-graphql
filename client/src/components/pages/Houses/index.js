// Import libraries
import React, { Fragment } from "react";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import DashboardContainer from "../Dashboard/DashboardContainer";
import HseSideBar from "./HseSideBar";
import HseMainSection from "./HseMainSection";

const Houses = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Houses" />
      <DashboardContainer>
        <HseSideBar />
        <HseMainSection />
      </DashboardContainer>
    </Fragment>
  );
};

export default Houses;
