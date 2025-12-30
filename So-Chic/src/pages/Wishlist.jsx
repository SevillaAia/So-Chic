import React, { useEffect, useState } from "react";
import axios from "axios";

function Wishlist() {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("http://localhost:5005/wishlist");
        setItems(response.data);
      } catch (error) {
        setErrorMessage("Failed to load wishlist");
      }
    };
    fetchWishlist();
  }, []);

  const removeFromWishlist = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/wishlist/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Delete failed");
    }
  };

  if (items.length === 0) {
    return (
      <div className="reg-container">
        <h2>Your Wishlist</h2>
        <div className="register">
          <p className="empty">Your wishlist is currently empty.</p>
        </div>
      </div>
    );
  }


  return (
    <div className="reg-container">
      <h2>Your Wishlist</h2>
      <div className="register">
        {errorMessage && <div className="error">{errorMessage}</div>}
        <ul className="wishlist">
          {items.map((item) => (
            <li key={item.id} className="wishlist-item">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;



