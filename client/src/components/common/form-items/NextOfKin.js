import React from "react";

const NextOfKin = ({ onChange }) => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Next Of Kin</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-user"></i>
        </span>
        <input
          type="text"
          name="nok_name"
          onChange={onChange}
          placeholder="Kin's Name"
          className="form-control text-capitalize"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-phone"></i>
        </span>
        <input
          type="tel"
          name="nok_phoneno"
          onChange={onChange}
          placeholder="Phone Number"
          className="form-control"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-envelope"></i>
        </span>

        <input
          type="text"
          name="nok_relation"
          onChange={onChange}
          placeholder="Relation"
          className="form-control text-capitalize"
        />
      </div>
    </div>
  );
};

export default NextOfKin;
