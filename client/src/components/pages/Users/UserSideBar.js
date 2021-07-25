import React from "react";

const UserSideBar = ({ children }) => {
  return (
    <div className="col-md-6">
      <h4 className="text-capitalize text-black-50">Add new User</h4>
      {children}
    </div>
  );
};

export default UserSideBar;
