import React from "react";
import logo from "../assets/SoChicLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="header">
        <button className="account-btn btn">
          <FontAwesomeIcon icon={faCircleUser} />
        </button>
        <Link to="/" className="logo-link">
          <img className="logo" src={logo} alt="SoChic logo" />
        </Link>
        <div className="head-btns">
          <button className="wish-btn btn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="cart-btn btn">
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
        </div>
      </header>
      <nav className="navbar">
        <div className="nav-li">
         <Link to='/'>
          <p>Home</p>
          </Link>
        </div>

        <div className="nav-li">
          <Link to='/about'>
          <p>About Us</p>
          </Link>
        </div>

        <div className="nav-li">
          <Link to="/collections">
            <p>Collections</p>
          </Link>
        </div>

        <div className="nav-li">
            <Link to="/Login">
            <p>Log Out</p>
            </Link>
          </div>

      </nav>
    </>
  );
}

export default Navbar;
