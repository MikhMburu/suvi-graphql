import React from "react";

const NextOfKin = () => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Next Of Kin</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-user"></i>
        </span>
        <input type="text" placeholder="First Name" className="form-control" />
        <input type="text" placeholder="Other Names" className="form-control" />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-phone"></i>
        </span>
        <input type="tel" placeholder="Phone Number" className="form-control" />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-envelope"></i>
        </span>
        <input
          type="email"
          placeholder="Email Address"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default NextOfKin;
