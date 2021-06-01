import React from "react";

const Designation = () => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Designations/ Roles</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text">Designation</span>
        <select name="designation" className="form-select">
          <option defaultValue disabled>
            Choose Designation
          </option>
          <option value="admin">Administrator</option>
          <option value="landlord">Landlord</option>
          <option value="tenant">Tenant</option>
        </select>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">Password</span>
        <input type="password" name="pswd" className="form-control" />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">Confirm Password</span>
        <input type="password" name="pswd2" className="form-control" />
      </div>
    </div>
  );
};

export default Designation;
