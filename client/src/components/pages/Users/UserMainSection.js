import React from "react";
import { useQuery } from "@apollo/client";
import isEmpty from "../../../utilities/isEmpty";
import { LOAD_USERS_GQL } from "../../../GraphQL/Queries";
import UserListItem from "./UserListItem";
import Spinner from "../../common/Spinner";

const UserMainSection = () => {
  const { error, loading, data } = useQuery(LOAD_USERS_GQL);
  if (error) {
    return console.error(error);
  }
  if (loading) {
    return <Spinner />;
  }
  if (data) {
    return (
      <div className="col-md-6">
        <div className="input-group mb-1">
          <input
            type="search"
            className="form-control p-2"
            placeholder="Search users"
          />
          <span className="input-group-text">
            <i className="bx bx-search" />
          </span>
        </div>
        <ul className="list-group">
          {isEmpty(data.getAllUsers) ? (
            <p className="lead text-black-50 text-center">No Users to show</p>
          ) : (
            data.getAllUsers.map((user) => {
              return <UserListItem key={user._id} user={user} />;
            })
          )}
        </ul>
      </div>
    );
  }
};

export default UserMainSection;
