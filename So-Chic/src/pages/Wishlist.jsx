import React, { useEffect, useState } from "react";
import axios from "axios";

function Wishlist() {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5005/api/wishlist"
        );
        setItems(response.data);
      } catch (error) {
      }
    };

    fetchWishlist();
  }, []);

  return (
    <div className="reg-container">
      <h2>Your Wishlist</h2>

      <div className="register">
        {errorMessage && <div className="error">{errorMessage}</div>}

        {items.length === 0 && (
          <p className="empty">Your wishlist currently is empty.</p>
        )}

        <ul className="wishlist">
          {items.map((item) => (
            <li key={item._id} className="wishlist-item">
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wishlist;






