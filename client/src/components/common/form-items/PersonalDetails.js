import React from "react";

const PersonalDetails = ({ onChange }) => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Personal Details</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-user"></i>
        </span>
        <input
          type="text"
          name="first_name"
          onChange={onChange}
          placeholder="First name"
          className="form-control text-capitalize"
        />
        <input
          type="text"
          name="other_names"
          placeholder="Other names"
          onChange={onChange}
          className="form-control text-capitalize"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-hash"></i>
        </span>
        <input
          type="text"
          name="nat_id"
          onChange={onChange}
          placeholder="National/ Passport ID"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
