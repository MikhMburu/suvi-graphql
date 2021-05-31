import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ heading }) => {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{heading}</li>
        </ol>
        <h2>{heading}</h2>
      </div>
    </section>
  );
};

export default Breadcrumbs;
