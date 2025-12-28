import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/about">
              <p>About Us</p>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/collections">
              <p>Collections</p>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/Login">
              <p>Log Out</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
