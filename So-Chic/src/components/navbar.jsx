import React from "react";
import logo from "../assets/SoChicLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <header className="header">
        <button className="account-btn btn">
          <FontAwesomeIcon icon={faCircleUser} />
        </button>
        <img className="logo" src={logo} alt="SoChic logo" />
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
        <div className="nav-li L">
          <p>Home</p>
        </div>
        <div className="nav-li bordered">
          <p>About Us</p>
        </div>
        <div className="nav-li R">
          <p>Collections</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
