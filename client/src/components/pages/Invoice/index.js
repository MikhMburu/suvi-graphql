import React, { Fragment } from "react";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import DashboardContainer from "../Dashboard/DashboardContainer";
import Descriptor from "./Descriptor";
import InvDetails from "./InvDetails";

const Invoice = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Invoice Details" />
      <DashboardContainer>
        <Descriptor />
        <InvDetails />
      </DashboardContainer>
    </Fragment>
  );
};

export default Invoice;
