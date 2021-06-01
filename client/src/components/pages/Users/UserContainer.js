import React from "react";
import { Link } from "react-router-dom";

const UserContainer = (props) => {
  return (
    <section id="team" className="team">
      <div className="container">
        <Link to="/add-user" className="btn btn-danger add-item">
          <span className="bx bx-user-plus"></span>
        </Link>
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
};

export default UserContainer;
