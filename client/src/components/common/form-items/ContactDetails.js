import React from "react";

const ContactDetails = ({ onChange }) => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Contact Details</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-envelope"></i>
        </span>
        <input
          type="email"
          name="email"
          placeholder="Seperate emails with a comma"
          className="form-control"
          onChange={onChange}
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text">
          <i className="bx bx-phone"></i>
        </span>
        <input
          type="tel"
          name="phoneno"
          onChange={onChange}
          placeholder="Seperate phone numbers with a comma"
          className="form-control"
        />
      </div>
    </div>
  );
};

export default ContactDetails;
