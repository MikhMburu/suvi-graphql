import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useMutation } from "@apollo/client";
import { CREATE_USER_GQL } from "../../../GraphQL/Mutations";
import { LOAD_USERS_GQL } from "../../../GraphQL/Queries";
import Spinner from "../../common/Spinner";
import { userSchema } from "../../../Validation";

const UserForm = () => {
  // ______Component state
  const [user, setUser] = useState(null);
  // ______GraphQL
  const [createUser, { error, loading }] = useMutation(CREATE_USER_GQL);
  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const isValid = await userSchema.isValid(user);
    if (!isValid) {
      return alert(
        "User validation failed. Check whether your fields are valid"
      );
    }
    const { fname, otherNames, nat_id, designation, phoneno, email, password } =
      user;
    createUser({
      variables: {
        first_name: fname,
        other_names: otherNames,
        national_id: nat_id,
        designation,
        email,
        phone: phoneno,
        password,
      },
      refetchQueries: [{ query: LOAD_USERS_GQL }],
    });

    confirmAlert({
      overlayClassName: "alert-overlay",
      onClickOutside: () => setUser(null),
      customUI: ({ onClose }) => {
        return (
          <div className="card alert-card">
            <h1 className="text-center text-success">Success</h1>
            <p>New user added to the database..</p>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                setUser(null);
                onClose();
              }}
            >
              OK
            </button>
          </div>
        );
      },
    });
  };

  return (
    <div className="user-form p-2 card">
      <form autoComplete="false" onSubmit={onSubmitHandler}>
        <div className="row mb-2">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                autoFocus="true"
                type="text"
                className="form-control"
                id="fname"
                name="fname"
                onChange={onChangeHandler}
                value={user ? user.fname : ""}
                placeholder="First Name"
              />
              <label htmlFor="fname">First Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="otherNames"
                name="otherNames"
                onChange={onChangeHandler}
                value={user ? user.otherNames : ""}
                placeholder="Other Names"
              />
              <label htmlFor="otherNames">Other Names</label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="nat_id"
                name="nat_id"
                onChange={onChangeHandler}
                value={user ? user.nat_id : ""}
                placeholder="National ID/Passport"
              />
              <label htmlFor="nat_id">National ID/Passport</label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div class="form-floating">
              <select
                class="form-select"
                id="designation"
                name="designation"
                onChange={onChangeHandler}
                value={user ? user.designation : ""}
                placeholder="Select designation"
              >
                <option defaultValue disabled>
                  Select designation
                </option>
                <option value="Admin">Admin</option>
                <option value="Landlord">Landlord</option>
                <option value="Other">Other</option>
              </select>
              <label htmlFor="designation">Designation of user</label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="phoneno"
                name="phoneno"
                onChange={onChangeHandler}
                value={user ? user.phoneno : ""}
                placeholder="Phone Number"
              />
              <label htmlFor="phoneno">Phone Number</label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChangeHandler}
                value={user ? user.email : ""}
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={onChangeHandler}
                value={user ? user.password : ""}
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {loading ? (
              <button
                type="submit"
                className="btn btn-outline-secondary form-control"
                disabled
              >
                <Spinner />
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-outline-success form-control"
              >
                Submit Details
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
