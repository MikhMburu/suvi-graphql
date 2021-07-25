import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1>
            <Link to="/">SUVIMIS</Link>
          </h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/tenants" activeClassName="active">
                Tenants
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active">
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/houses" activeClassName="active">
                Houses
              </NavLink>
            </li>
            <li>
              <NavLink to="/meter-reading" activeClassName="active">
                Water Bills
              </NavLink>
            </li>

            <li>
              <Link to="/invoice">
                <span className="bx bx-log-out"></span>
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
