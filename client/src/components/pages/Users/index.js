import React, { Fragment } from "react";
import Breadcrumbs from "../../layout/Breadcrumbs";
import UserContainer from "./UserContainer";
import UserCard from "../../common/UserCard";

const Tenants = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Users" />
      <UserContainer>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </UserContainer>
    </Fragment>
  );
};
export default Tenants;
