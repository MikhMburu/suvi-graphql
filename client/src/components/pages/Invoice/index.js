import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import DashboardContainer from "../Dashboard/DashboardContainer";
import Descriptor from "./Descriptor";
import InvDetails from "./InvDetails";

const Invoice = () => {
  const params = useParams();
  console.log("Params on Invoice:", params);
  return (
    <Fragment>
      <Breadcrumbs heading="Invoice Details" />
      <DashboardContainer>
        <Descriptor />
        <InvDetails id={params.id} />
      </DashboardContainer>
    </Fragment>
  );
};

export default Invoice;
