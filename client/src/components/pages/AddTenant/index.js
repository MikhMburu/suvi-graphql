// Import libraries
import React, { Fragment, useState } from "react";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import AddUserContainer from "../AddUser/AddUserContainer";
import PersonalDetails from "../../common/form-items/PersonalDetails";
import ContactDetails from "../../common/form-items/ContactDetails";
import NextOfKin from "../../common/form-items/NextOfKin";
import SubmitButton from "../../common/form-items/SubmitButton";
import Tenancy from "../../common/form-items/Tenancy";

const AddUser = () => {
  const [tenant, setTenant] = useState(null);
  const onChangeHandler = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(tenant);
  };
  return (
    <Fragment>
      <Breadcrumbs heading="Add Tenant" />
      <AddUserContainer>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <PersonalDetails onChange={onChangeHandler} />
            <ContactDetails onChange={onChangeHandler} />
          </div>
          <div className="row">
            <Tenancy onChange={onChangeHandler} />
            <NextOfKin onChange={onChangeHandler} />
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
