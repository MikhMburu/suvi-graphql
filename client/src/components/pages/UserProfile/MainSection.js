import React from "react";
import { useSelector } from "react-redux";

const MainSection = () => {
  const tenant = useSelector((state) => state.tenant.selectedTenant);
  if (!tenant) {
    return <p>Loading. . . </p>;
  }
  const {
    user: { first_name, other_names, national_id, email, phone, next_of_kin },
  } = tenant;
  return (
    <div className="col-md-8">
      <div className="card mb-3 shadow-lg">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full names</h6>
            </div>
            <div className="col-sm-9 text-secondary">{`${first_name} ${other_names}`}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">National ID</h6>
            </div>
            <div className="col-sm-9 text-secondary">{national_id}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {email ? (
                email.map((em) => {
                  return <span className="d-block">{em}</span>;
                })
              ) : (
                <span className="d-block">No Emails</span>
              )}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Mobile</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {phone ? (
                phone.map((ph) => <span className="d-block">{ph}</span>)
              ) : (
                <span className="d-block">No Phone numbers</span>
              )}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Next Of Kin</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {next_of_kin ? (
                <table className="table">
                  <tr>
                    <th>Name</th>
                    <td>{next_of_kin.name}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{next_of_kin.phone}</td>
                  </tr>
                  <tr>
                    <th>Relation</th>
                    <td>{next_of_kin.relation}</td>
                  </tr>
                </table>
              ) : (
                <span className="d-block">No Next of Kin stated</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
