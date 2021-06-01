// Import libraries
import React, { Fragment } from "react";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import AddUserContainer from "./AddUserContainer";
import PersonalDetails from "../../common/form-items/PersonalDetails";
import ContactDetails from "../../common/form-items/ContactDetails";
import Designation from "../../common/form-items/Designation";
import NextOfKin from "../../common/form-items/NextOfKin";
import SubmitButton from "../../common/form-items/SubmitButton";

const AddUser = () => {
  return (
    <Fragment>
      <Breadcrumbs heading="Add User" />
      <AddUserContainer>
        <form>
          <div className="row">
            <PersonalDetails />
            <ContactDetails />
          </div>
          <div className="row">
            <Designation />
            <NextOfKin />
          </div>
          <div className="row">
            <SubmitButton />
          </div>
        </form>
      </AddUserContainer>
    </Fragment>
  );
};

export default AddUser;
