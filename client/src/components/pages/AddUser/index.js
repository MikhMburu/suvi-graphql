// Import libraries
import React, { Fragment, useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER_GQL } from "../../../GraphQL/Mutations";
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
  // eslint-disable-next-line
  const [createUser, { error }] = useMutation(CREATE_USER_GQL);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (user) {
      const {
        first_name,
        other_names,
        nat_id,
        email,
        phoneno,
        designation,
        username,
        pswd,
        nok_name,
        nok_relation,
        nok_phoneno,
      } = user;

      createUser({
        variables: {
          first_name: first_name,
          other_names: other_names,
          national_id: nat_id,
          designation: designation,
          username: username,
          password: pswd,
          email: email.trim().split(","),
          phone: phoneno.trim().split(","),
          nok_name: nok_name,
          nok_relation: nok_relation,
          nok_phone: nok_phoneno,
        },
      });
    }
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
