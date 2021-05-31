import React from "react";
import { Link } from "react-router-dom";

const TenantContainer = (props) => {
  return (
    <section id="team" className="team">
      <div className="container">
        <Link to="/add-tenant" className="btn btn-danger add-item">
          <span className="bx bx-user-plus"></span>
        </Link>
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};

export default TenantContainer;
