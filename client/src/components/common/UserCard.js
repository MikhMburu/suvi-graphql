import React from "react";

const UserCard = () => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <h4>Walter White</h4>
        <span>Chief Executive Officer</span>
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
};

export default UserCard;
