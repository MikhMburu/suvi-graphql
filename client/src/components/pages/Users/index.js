import React, { Fragment } from "react";
import Breadcrumbs from "../../layout/Breadcrumbs";
import UserContainer from "./UserContainer";
import UserSideBar from "./UserSideBar";
import UserForm from "./UserForm";
import UserMainSection from "./UserMainSection";

const Tenants = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Users" />
      <UserContainer>
        <UserSideBar>
          <UserForm />
        </UserSideBar>
        <UserMainSection />
      </UserContainer>
    </Fragment>
  );
};
export default Tenants;
