
import React, { useEffect, useState } from "react";
import axios from "axios";

function CartPages() {
  const [cartItems, setCartItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5005/cart");
        setCartItems(response.data);
      } catch (error) {
        setErrorMessage("Failed to load cart");
      }
    };
    fetchCart();
  }, []);

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/cart/${id}`);
      //  to match our db.json
      setCartItems(cartItems.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Delete failed");
    }
  };


  const handleCheckout = async () => {
    try {
      const deleteRequests = cartItems.map((item) =>
        axios.delete(`http://localhost:5005/cart/${item.id}`)
      );
      await Promise.all(deleteRequests);

      setCartItems([]);
      alert("Checkout Successful! Your order is on the way.");
    } catch (error) {
      alert("Checkout failed. Please try again.");
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);


  if (cartItems.length === 0) {
    return (
      <div className="reg-container">
        <h2>Your Shopping Cart</h2>
        <div className="register">
          <p className="empty">Your cart is currently empty.</p>
        </div>
      </div>
    );
  }

  
  return (
    <div className="reg-container">
      <h2>Your Shopping Cart</h2>
      <div className="register">
        {errorMessage && <div className="error">{errorMessage}</div>}
        
        <ul className="cart">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} - ${item.price.toFixed(2)}
              </span>
              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="reg-submit" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPages;

