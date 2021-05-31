import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ link }) => {
  const { icon, header, linkTo, description } = link;
  if (link) {
    return (
      <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
        <div className="icon-box">
          <div className="icon">
            <i className={icon}></i>
          </div>
          <h4>
            <Link to={linkTo}>{header}</Link>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }
};

export default CardLink;
