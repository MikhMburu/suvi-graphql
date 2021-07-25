import React from "react";
import { useSelector } from "react-redux";
import Moment from "react-moment";

const UserSideBar = () => {
  const tenant = useSelector((state) => state.tenant.selectedTenant);
  if (!tenant) {
    return <p>Loading. . . </p>;
  }
  const {
    user: { first_name, other_names },
    hseno,
    rent,
    checkin,
    checkout,
  } = tenant;
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-lg">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="../../../res/img/person-icon.png"
              alt="Tenant"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{`${first_name} ${other_names}`}</h4>
              <span className="small card-text d-block">House #{hseno}</span>
              <span className="small card-text d-block">
                From <Moment format="MMM Do YYYY">{checkin}</Moment>
              </span>
              {checkout && (
                <span className="small card-text d-block">
                  To <Moment format="MMM Do YYYY">{checkout}</Moment>
                </span>
              )}
              <span className="small card-text d-block">Rent: Ksh {rent}</span>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">
                  Print Agreement
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More Actions
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li>
                      <a className="dropdown-item" href="!#">
                        Check out
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="!#">
                        Evict
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;
