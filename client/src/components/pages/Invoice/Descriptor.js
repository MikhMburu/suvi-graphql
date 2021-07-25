import React from "react";

const Descriptor = () => {
  return (
    <div className="col-md-6">
      <p className="lead">
        This page shows the details that will go into the final invoice. It will
        not show the format of the invoice itself.
      </p>
      <p>
        There are two items you can change here, however;
        <span className="text-primary">Balance b/f</span> and
        <span className="text-primary">Other Charges</span>
      </p>
      <button className="btn btn-outline-secondary">
        <i className="bx bx-arrow-back"></i>
        Go Back
      </button>
    </div>
  );
};

export default Descriptor;
