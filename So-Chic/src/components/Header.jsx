import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../assets/SoChicLogo.png";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <header className="header">
      <div className="user-account">
        <button className="account-btn btn">
          <Link to="/UserProfile" className="account-link">
            <FontAwesomeIcon icon={faCircleUser} />
          </Link>
        </button>
        <span>Welcome{user?.username && `, ${user.username}`}</span>
      </div>

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
