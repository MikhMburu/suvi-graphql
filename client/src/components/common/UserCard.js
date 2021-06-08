import React from "react";

const UserCard = ({ tenant }) => {
  if (tenant) {
    const {
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
            <a href="!#">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="!#">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="!#">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="!#">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default UserCard;
