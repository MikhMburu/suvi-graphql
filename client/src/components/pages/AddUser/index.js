// Import libraries
import React, { Fragment, useState } from "react";
// Import components
import Breadcrumbs from "../../layout/Breadcrumbs";
import AddUserContainer from "./AddUserContainer";
import PersonalDetails from "../../common/form-items/PersonalDetails";
import ContactDetails from "../../common/form-items/ContactDetails";
import Designation from "../../common/form-items/Designation";
import NextOfKin from "../../common/form-items/NextOfKin";
import SubmitButton from "../../common/form-items/SubmitButton";

const AddUser = () => {
  const [user, setUser] = useState(null);
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <Fragment>
      <Breadcrumbs heading="Add User" />
      <AddUserContainer>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <PersonalDetails onChange={onChangeHandler} />
            <ContactDetails onChange={onChangeHandler} />
          </div>
          <div className="row">
            <Designation onChange={onChangeHandler} />
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
