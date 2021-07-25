import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux/Actions";
import { useMutation } from "@apollo/client";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { CHECKOUT_TENANT } from "../../../GraphQL/Mutations";
import Spinner from "../../common/Spinner";
import isEmpty from "../../../utilities/isEmpty";

const MainSection = () => {
  // ____GraphQL
  const [checkoutTenant, { error }] = useMutation(CHECKOUT_TENANT);
  // ____Redux
  const dispatch = useDispatch();
  const { checkoutTnt } = bindActionCreators(actionCreators, dispatch);
  const tenant = useSelector((state) => state.tenant.selectedTenant);
  if (!tenant) {
    return <Spinner />;
  }
  const {
    _id,
    checkout,
    user: { first_name, other_names, national_id, email, phone, next_of_kin },
  } = tenant;

  const clickHandler = (e) => {
    if (error) {
      return alert(error);
    }
    confirmAlert({
      title: "Checkout",
      message: "Are you sure you want to check out the tenant?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            checkoutTenant({ variables: { _id } });
            checkoutTnt(_id);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  return (
    <div className="col-md-8">
      <div className="card mb-3 shadow-lg">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full names</h6>
            </div>
            <div className="col-sm-6 text-secondary">{`${first_name} ${other_names}`}</div>
            {checkout === null ? (
              <div className="col-sm-3">
                <button
                  className="btn btn-danger btn-block"
                  onClick={clickHandler}
                >
                  Checkout
                </button>
              </div>
            ) : (
              <div className="col-sm-3">
                <button className="btn btn-info btn-block" disabled>
                  Gone
                </button>
              </div>
            )}
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
              {!isEmpty(next_of_kin.name) ? (
                <table className="table">
                  <tbody>
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
                  </tbody>
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
