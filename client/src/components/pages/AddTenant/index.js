// Import libraries
import React, { Fragment, useState } from "react";
import { useMutation } from "@apollo/client";
// Import Files
import { CREATE_TENANT_GQL } from "../../../GraphQL/Mutations";
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
  // eslint-disable-next-line
  const [createUserTenant, { error }] = useMutation(CREATE_TENANT_GQL);
  const onChangeHandler = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (tenant) {
      const {
        first_name,
        other_names,
        nat_id,
        email,
        phoneno,
        hseno,
        date_of_entry,
        rent_amt,
        nok_name,
        nok_phoneno,
        nok_email,
      } = tenant;
      createUserTenant({
        variables: {
          first_name: first_name,
          other_names: other_names,
          national_id: nat_id,
          email: email.trim().split(","),
          phone: phoneno.trim().split(","),
          hseno: parseInt(hseno),
          checkin: date_of_entry,
          rent: parseInt(rent_amt),
          nok_name: nok_name,
          nok_email: nok_email,
          nok_phone: nok_phoneno,
        },
      });
    }
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
