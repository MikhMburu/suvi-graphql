import React from "react";
import Moment from "react-moment";
import moment from "moment";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Occupant = ({ occupant }) => {
  const {
    _id,
    status,
    checkin,
    checkout,
    user: { first_name, other_names, phone, email },
  } = occupant;
  return (
    <div className="hse-tenant card p-2 mb-2">
      <div className="row">
        <div className="col-md-7">
          <span className="card-text fw-bold ">
            Name:{" "}
            <Link
              to={`users/${_id}`}
              className="text-primary"
            >{`${first_name} ${other_names}`}</Link>{" "}
          </span>
          <span>Phone: {phone[0]} </span>
          <span>Email: {email[0]}</span>

          <span>
            Status:
            <i
              className={classNames("bx", {
                "bxs-check-circle text-success": status === "active",
                "bxs-minus-circle text-danger": status === "departed",
              })}
            >
              {status === "active" ? "Current" : "Departed"}
            </i>
          </span>
        </div>
        <div className="col-md-5">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">From:</th>
                <td>
                  <Moment format="Do MMM, YYYY">{moment(checkin)}</Moment>
                </td>
              </tr>
              {checkout && (
                <tr>
                  <th scope="row">To:</th>
                  <td>
                    <Moment format="Do MMM, YYYY">{moment(checkout)}</Moment>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Occupant;
