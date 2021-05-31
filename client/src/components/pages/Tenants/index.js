import React, { Fragment } from "react";
import Breadcrumbs from "../../layout/Breadcrumbs";
import TenantContainer from "./TenantContainer";
import UserCard from "../../common/UserCard";

const Tenants = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Tenants" />
      <TenantContainer>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </TenantContainer>
    </Fragment>
  );
};
export default Tenants;
