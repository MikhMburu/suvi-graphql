import React, { useState } from "react";
import classNames from "classnames";
import { useMutation } from "@apollo/client";
import { CREATE_TENANT_GQL } from "../../../GraphQL/Mutations";
import { confirmAlert } from "react-confirm-alert";
import capitalize from "../../../utilities/capitalize";
import { LOAD_HOUSES_GQL } from "../../../GraphQL/Queries";
import { tenantSchema } from "../../../Validation";

const TenantForm = () => {
  /*      GRAPHQL
    We create a connection to the database by using apollo-client
  */
  const [createUserTenant, { error, loading }] = useMutation(
    CREATE_TENANT_GQL,
    {
      refetchQueries: [{ query: LOAD_HOUSES_GQL }],
    }
  );
  /*      COMPONENT STATE.
    The component state is divided into two;
        -the UI state which controls how the form is displayed
        -the Form State which stores the form data
  */
  // ______UI State
  const [tabIndex, setTabIndex] = useState(1);
  const [showNOK, setShowNOK] = useState(false);
  // ______Form State
  const [tenant, setTenant] = useState(null);

  // ______Function Definitions
  const nextTab = (e) => {
    e.preventDefault();
    setTabIndex(2);
  };
  const onChangeHandler = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const isValid = await tenantSchema.isValid(tenant);
    if (!isValid) {
      return alert("Validation failed. Please check your fields");
    }
    const {
      fname,
      otherNames,
      nat_id,
      email,
      phoneno,
      nok_name,
      nok_phone,
      nok_relation,
      hseno,
      rent,
      checkin,
    } = tenant;

    createUserTenant({
      variables: {
        first_name: capitalize(fname),
        other_names: capitalize(otherNames),
        national_id: nat_id,
        email: email.trim().split(","),
        phone: phoneno.trim().split(","),
        hseno: parseInt(hseno),
        checkin,
        rent: parseInt(rent),
        nok_name: capitalize(nok_name),
        nok_relation: capitalize(nok_relation),
        nok_phone: nok_phone,
      },
    });
    if (error) {
      return alert("Error in mutation. Please check console");
    }
    if (!loading) {
      confirmAlert({
        overlayClassName: "alert-overlay",
        onClickOutside: () => setTenant(null),
        customUI: ({ onClose }) => {
          return (
            <div className="card alert-card">
              <h1 className="text-center text-success">Success</h1>
              <p>New tenant added to the database..</p>
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  setTenant(null);
                  onClose();
                }}
              >
                OK
              </button>
            </div>
          );
        },
      });
    }
  };

  if (error) return console.log(error);
  return (
    <div className="col md-6 card text-black-50 tenant-form">
      <form onSubmit={onSubmitHandler}>
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <span
                className={classNames("nav-link nav-clickable", {
                  active: tabIndex === 1,
                })}
                onClick={() => setTabIndex(1)}
              >
                Basic Info
              </span>
            </li>

            <li className="nav-item">
              <span
                className={classNames("nav-link nav-clickable", {
                  active: tabIndex === 2,
                })}
                onClick={() => setTabIndex(2)}
              >
                Tenancy
              </span>
            </li>
          </ul>
        </div>
        <div
          name="basic-info"
          className={classNames({
            "d-none": tabIndex === 2,
          })}
        >
          <div className="row p-2">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.fname : ""}
                  name="fname"
                  className="form-control"
                  placeholder="First Name"
                />
                <label htmlFor="fname">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.otherNames : ""}
                  name="otherNames"
                  className="form-control"
                  placeholder="Other Names"
                />
                <label htmlFor="otherNames">Other Names</label>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <div className="form-floating">
                <input
                  name="nat_id"
                  type="text"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.nat_id : ""}
                  className="form-control"
                  placeholder="National ID/ Passport"
                />
                <label htmlFor="nat_id">National ID/ Passport</label>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <div className="form-floating">
                <input
                  name="email"
                  type="text"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.email : ""}
                  className="form-control"
                  placeholder="Email"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <div className="form-floating">
                <input
                  name="phoneno"
                  type="text"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.phoneno : ""}
                  className="form-control"
                  placeholder="Phone Number"
                />
                <label htmlFor="phoneno">Phone Number</label>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div
              className={classNames(
                "d-flex justify-content-between nav-clickable kin-toggler",
                {
                  "text-primary": !showNOK,
                  "text-danger": showNOK,
                }
              )}
              onClick={() => setShowNOK(!showNOK)}
            >
              <small className="d-block">Add Next-Of-Kin?</small>
              <span className="small bx bx-plus"></span>
            </div>
          </div>
          <div
            name="next-of-kin"
            className={classNames({
              "d-none": !showNOK,
            })}
          >
            <div className="row p-2">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    value={tenant ? tenant.nok_name : ""}
                    name="nok_name"
                    className="form-control"
                    placeholder="Names"
                  />
                  <label htmlFor="nok_name">Names</label>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    value={tenant ? tenant.nok_phone : ""}
                    name="nok_phone"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="nok_email">Email</label>
                </div>
              </div>
            </div>
            <div className="row p-2">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    onChange={onChangeHandler}
                    value={tenant ? tenant.nok_relation : ""}
                    name="nok_relation"
                    className="form-control"
                    placeholder="Relation"
                  />
                  <label htmlFor="nok_relation">Relation</label>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse p-2 mb-2">
            <span
              className="btn btn-outline-primary nav-clickable"
              onClick={nextTab}
            >
              <span className="bx bx-right-arrow-alt"></span>
            </span>
          </div>
        </div>
        <div
          name="tenancy"
          className={classNames({
            "d-none": tabIndex === 1,
          })}
        >
          <div className="row p-2">
            <div className="col">
              <div className="input-group">
                <span className="input-group-text"> Check-In </span>
                <input
                  type="date"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.checkin : ""}
                  className="form-control"
                  name="checkin"
                />
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <div className="form-floating">
                <input
                  type="number"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.rent : ""}
                  className="form-control"
                  placeholder="Rent Payable"
                  name="rent"
                />
                <label htmlFor="rent">Rent Payable</label>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col">
              <div className="form-floating">
                <input
                  type="number"
                  onChange={onChangeHandler}
                  value={tenant ? tenant.hseno : ""}
                  className="form-control"
                  placeholder="House No."
                  name="hseno"
                />
                <label htmlFor="hseno">House No.</label>
              </div>
            </div>
          </div>

          <div className="row p-2">
            <div className="col">
              <button
                type="submit"
                className="btn btn-outline-success form-control"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TenantForm;
