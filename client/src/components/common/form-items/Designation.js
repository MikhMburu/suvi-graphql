import React from "react";

const Designation = ({ onChange }) => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Designations/ Roles</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text">Designation</span>
        <select name="designation" className="form-select" onChange={onChange}>
          <option defaultValue>Choose Designation</option>
          <option value="admin">Administrator</option>
          <option value="landlord">Landlord</option>
          <option value="tenant">Tenant</option>
        </select>
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">Password</span>
        <input
          type="password"
          name="pswd"
          className="form-control"
          onChange={onChange}
          placeholder="Password"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">Confirm Password</span>
        <input
          type="password"
          name="pswd2"
          onChange={onChange}
          className="form-control"
          placeholder="Confirm Password"
        />
      </div>
    </div>
  );
};

export default Designation;
