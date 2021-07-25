import React, { useState } from "react";

const InvDetails = () => {
  const [balbf, setBalBF] = useState(0);
  const [otherCharges, setOtherCharges] = useState(0);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(balbf);
    console.log(otherCharges);
  };

  return (
    <div className="col-md-6">
      <h4 className="fw-bold text-center text-secondary">Invoice</h4>
      <div className="card shadow-sm px-2">
        <form onSubmit={onSubmitHandler} className="mt-2">
          <div className="input-group">
            <input
              type="number"
              placeholder="Balance b/f"
              className="form-control"
              name="balbf"
              value={balbf}
              onChange={(e) => setBalBF(e.target.value)}
            />
            <input
              type="number"
              placeholder="Other Charges"
              className="form-control"
              name="otherCharges"
              value={otherCharges}
              onChange={(e) => setOtherCharges(e.target.value)}
            />
            <button className="btn btn-outline-info">Submit</button>
          </div>
        </form>
        <table className="table table-hover">
          <tbody className="text-primary">
            <tr>
              <td className="text-end">Invoice No.</td>
              <td className="text-black-50">#123468-5</td>
            </tr>
            <tr>
              <td className="text-end">Name</td>
              <td className="text-black-50">Michael N</td>
            </tr>
            <tr>
              <td className="text-end">House</td>
              <td className="text-black-50">#5</td>
            </tr>
            <tr>
              <td className="text-end">Balance b/f</td>
              <td className="text-black-50 fw-bold">{balbf}</td>
            </tr>
            <tr>
              <td className="text-end">Previous Reading</td>
              <td className="text-black-50">14</td>
            </tr>
            <tr>
              <td className="text-end">Current Reading</td>
              <td className="text-black-50">23</td>
            </tr>
            <tr>
              <td className="text-end">Unit Consumption</td>
              <td className="text-black-50">9</td>
            </tr>
            <tr>
              <td className="text-end">Consumption (Ksh.)</td>
              <td className="text-black-50 fw-bolder">900</td>
            </tr>
            <tr>
              <td className="text-end">Other Charges</td>
              <td className="text-black-50 fw-bold">{otherCharges}</td>
            </tr>
            <tr className="text-danger fw-bolder">
              <td className="text-end">Total Amount Owed</td>
              <td>Ksh. 900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvDetails;
