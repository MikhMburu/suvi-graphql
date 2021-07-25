import React from "react";
import classNames from "classnames";

const UserListItem = ({
  user: { first_name, other_names, designation, national_id },
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="text-black-50 fw-bold">{`${first_name} ${other_names}`}</div>
        <span className="text-muted">#{national_id}</span>
      </div>
      <span
        className={classNames("badge rounded-pill", {
          "bg-primary": designation === "Tenant",
          "bg-danger": designation === "Admin",
          "bg-info": designation === "Landlord",
          "bg-secondary": designation === "Other",
        })}
      >
        {designation}
      </span>
    </li>
  );
};

export default UserListItem;
