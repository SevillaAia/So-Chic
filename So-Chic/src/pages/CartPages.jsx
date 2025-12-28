import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CartPages() {
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5005/api/cart");
        setCartItems(response.data);
      } catch (error) {
      }
    };
    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/api/cart/${id}`);
      setCartItems(cartItems.filter((item) => item._id !== id));
    } catch (error) {
      console.log("Delete failed");
    }
  };

  return (
    <div className="reg-container">
      <h2>Your Shopping Cart</h2>

      <div className="register">
        {errorMessage && <div className="error">{errorMessage}</div>}

        {cartItems.length === 0 ? (
          <div className="empty-container-cart">
            <p className="empty">Your cart is currently empty.</p>
          </div>
        ) : (
          <>
            <ul className="cart"> 
              {cartItems.map((item) => (
                <li key={item._id} className="cart-item">
                  <span>{item.name} - ${item.price}</span>
                  <button 
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <button className="reg-submit">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPages;
