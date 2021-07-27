import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux/Actions";
import Spinner from "../../common/Spinner";

const InvDetails = ({ id }) => {
  const dispatch = useDispatch();
  const { loadMREntry } = bindActionCreators(actionCreators, dispatch);
  const tenants = useSelector((state) => state.readings.consumption);
  const [tenant, setTenant] = useState(null);
  useEffect(() => {
    const invEntry = tenants.filter((tnt) => tnt._id === id);
    setTenant(invEntry[0]);
    // loadMREntry(id);
    // eslint-disable-next-line
  }, [tenants, tenant]);

  const onChangeHandler = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
    console.log(tenant);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
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
              value={tenant ? tenant.balbf : 0}
              onChange={onChangeHandler}
            />
            <input
              type="number"
              placeholder="Other Charges"
              className="form-control"
              name="otherCharges"
              value={tenant ? tenant.otherCharges : 0}
              onChange={onChangeHandler}
            />
            <button className="btn btn-outline-info">Submit</button>
          </div>
        </form>
        {tenant === null ? (
          <Spinner />
        ) : (
          <table className="table table-hover">
            <tbody className="text-primary">
              <tr>
                <td className="text-end">Name</td>
                <td className="text-black-50">{`${tenant.user.first_name} ${tenant.user.other_names}`}</td>
              </tr>
              <tr>
                <td className="text-end">House</td>
                <td className="text-black-50">#{tenant.hseno}</td>
              </tr>
              <tr>
                <td className="text-end">Balance b/f</td>
                <td className="text-black-50 fw-bold">{tenant.balbf}</td>
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
                <td className="text-black-50 fw-bold">{tenant.otherCharges}</td>
              </tr>
              <tr className="text-danger fw-bolder">
                <td className="text-end">Total Amount Owed</td>
                <td>Ksh. 900</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default InvDetails;
