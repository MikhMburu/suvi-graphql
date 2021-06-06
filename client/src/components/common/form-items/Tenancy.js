import React from "react";

const Tenancy = ({ onChange }) => {
  return (
    <div className="col-md-6 shadow-sm">
      <h4 className="text-primary">Tenancy</h4>
      <hr />
      <div className="input-group mb-2">
        <span className="input-group-text"> Hse Details </span>
        <input
          type="number"
          name="hseno"
          onChange={onChange}
          placeholder="House Number"
          className="form-control"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text"> Date of Entry </span>
        <input
          type="date"
          name="date_of_entry"
          onChange={onChange}
          className="form-control"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text"> Rent Payable </span>
        <input
          type="number"
          name="rent_amt"
          onChange={onChange}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default Tenancy;
