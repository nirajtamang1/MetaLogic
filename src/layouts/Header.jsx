import React from "react";
import { NavLink, Link } from "react-router-dom";

import metalogo from "../Assests/images/metalogo.png";

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiaryss">
          <div className="container-fluid">
            <div>
              <img
                src={metalogo}
                alt="logo of company"
                style={{ width: "30px", height: "30px", marginRight: "8PX" }}
              />
              <span className="companyName">Metalogic</span>
            </div>
            <button
              className="navbar-toggler breadcrum"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink
                    to="/services"
                    className="nav-link"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/services/software-development"
                        className="dropdown-item"
                      >
                        Custom Software Development
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/services/webDevelopment"
                        className="dropdown-item"
                      >
                        Web Development
                      </NavLink>
                    </li>
                    <li>
                      <Link
                        to="/services/mobileAppDevelopment"
                        className="dropdown-item"
                      >
                        Mobile App Development
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/career" className="nav-link">
                    Carrer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blogs" className="nav-link">
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/aboutus" className="nav-link">
                    About Us
                  </NavLink>
                </li>
              </ul>

              <button>Get in Touch </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
