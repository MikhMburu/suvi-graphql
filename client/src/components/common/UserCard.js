import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ tenant }) => {
  if (!tenant) {
    return <p>Loading...</p>;
  }
  const {
    _id,
    user: { first_name, other_names },
    hseno,
  } = tenant;

  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member bg-dark text-white">
        <h4>{`${first_name} ${other_names}`}</h4>
        <span>House #{hseno}</span>
        <p>
          Magni qui quod omnis unde et eos fuga et exercitationem. Odio
          veritatis perspiciatis quaerat qui aut aut aut
        </p>
        <div className="social">
          <Link to={`users/${_id}`} className="btn btn-primary text-white">
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
