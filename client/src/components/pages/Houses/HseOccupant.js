import React from "react";
import Moment from "react-moment";
import moment from "moment";
import classNames from "classnames";
import { Link } from "react-router-dom";

const HseOccupant = ({ occupant }) => {
  const {
    _id,
    status,
    checkin,
    checkout,
    user: { first_name, other_names },
  } = occupant;
  return (
    <div className="card w-100 hse-tenant mb-2">
      <div
        className="
                    card-header
                    d-flex
                    justify-content-between
                    flex-row
                    align-items-start
                    bg-dark
                    text-white
                  "
      >
        <span>
          <Link to={`users/${_id}`}>{`${first_name} ${other_names}`}</Link>
        </span>
        <span
          className={classNames("badge rounded-pill", {
            "bg-danger": status === "departed",
            "bg-success": status === "active",
          })}
        >
          {status}
        </span>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <p className="card-text">
              <span className="fw-bold">From:</span>
              <Moment format="Do MMM, YYYY">{moment(checkin)}</Moment>
            </p>
          </div>
          {checkout && (
            <div className="col-md-6">
              <p className="card-text">
                <span className="fw-bold">To:</span>

                <Moment format="Do MMM, YYYY">{moment(checkout)}</Moment>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HseOccupant;
