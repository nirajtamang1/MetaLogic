import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiInformationLine } from "react-icons/ri";

import metalogo from "../Assests/images/metalogo.png";

const Header = () => {
  const handleIconClick = () => {
    alert(
      "After reviewing all the pages, I noticed that the Services page didn't quite match the quality of the other pages. While the content animations and color combinations were impressive on most pages, the Services page seemed to be lacking in these aspects. Therefore, I decided to redesign the Services page by enhancing the color scheme and introducing some engaging animations."
    );
  };
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiaryss fixed-top"
          style={{ backgroundColor: "#0c1b33" }}
        >
          <div className="container-fluid">
            <div>
              <img
                src={metalogo}
                alt="logo of company"
                style={{ width: "30px", height: "30px", marginRight: "8px" }}
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
                    onClick={handleIconClick}
                  >
                    <RiInformationLine /> Services
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/services/software-development"
                        className="dropdown-item"
                      >
                        <RiInformationLine /> Custom Software Development
                      </Link>
                    </li>
                    <li>
                      <NavLink
                        to="/services/webDevelopment"
                        className="dropdown-item"
                      >
                        <RiInformationLine /> Web Development
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
                    Career
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
