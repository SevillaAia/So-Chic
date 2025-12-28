import React from "react";
import logo from "../assets/SoChicLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <button className="account-btn btn">
        <Link to="/UserProfile" className="account-link">
          <FontAwesomeIcon icon={faCircleUser} />
        </Link>
      </button>
      <Link to="/" className="logo-link">
        <img className="logo" src={logo} alt="SoChic logo" />
      </Link>
      <div className="head-btns">
        <button className="wish-btn btn">
          <Link to="/Wishlist" className="wish-link">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </button>
        <button className="cart-btn btn">
          <Link to="/CartPages" className="cart-link">
            <FontAwesomeIcon icon={faBasketShopping} />
          </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
