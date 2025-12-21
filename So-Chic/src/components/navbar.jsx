import React from 'react'
import logo from '../assets/SoChicLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
    <header className='header'>
        <button className='account-btn btn'> <FontAwesomeIcon icon={faUser} /></button> 
        <img className="logo" src={logo} alt="SoChic logo" />
        <div className='head-btns'>
            <button className='wish-btn btn'><FontAwesomeIcon icon={faHeart} /></button>
            <button className='cart-btn btn'><FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    </header>
    <nav className='navbar'>
        <div className='nav-li no-left'>
            <p>Home</p>
        </div>
        <div className='nav-li'>
            <p>About Us</p>
        </div>
        <div className='nav-li no-right'>
            <p>Collections</p>
        </div>
    </nav>
    </>
)
}

export default Navbar