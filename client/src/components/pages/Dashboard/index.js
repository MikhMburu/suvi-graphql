import React, { Fragment } from "react";
import links from "./links";
import Breadcrumbs from "../../layout/Breadcrumbs";
import CardLink from "./CardLink";
import DashboardContainer from "./DashboardContainer";
const DashBoard = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Dashboard" />
      <DashboardContainer>
        {Object.keys(links).map((cardLink) => {
          return <CardLink key={links[cardLink].id} link={links[cardLink]} />;
        })}
      </DashboardContainer>
    </Fragment>
  );
};

export default DashBoard;
