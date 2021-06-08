import React from "react";

const SubmitButton = () => {
  return (
    <div className="col-md-8 mx-auto btn-group">
      <button type="submit" className="btn btn-outline-success">
        Submit Details
      </button>
      <button type="reset" className="btn btn-danger">
        Reset Form
      </button>
    </div>
  );
};

export default SubmitButton;
