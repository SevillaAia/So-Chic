import React, { useEffect, useState } from "react";
import image from "../assets/defaultPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ProductList() {
  const [counts, setCounts] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5005/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await axios.post("http://localhost:5005/cart", {
        name: product.name,
        price: product.price,
        productId: product._id
      });
      alert("Added to cart!");
    } catch (error) {
      console.error(error);
      alert("Failed to add to cart");
    }
  };

  const handleAddToWishlist = async (product) => {
  try {
    const response = await axios.get("http://localhost:5005/wishlist");
    const currentWishlist = response.data;

    const alreadyExists = currentWishlist.find(item => item.name === product.name);

    if (alreadyExists) {
      alert("This item is already in your wishlist!");
      return;
    }

    await axios.post("http://localhost:5005/wishlist", {
      name: product.name,
      price: product.price
    });
    
    alert("Added to wishlist!");
  } catch (error) {
    alert("Error handling wishlist");
  }
};

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <button
            className="like-btn"
            onClick={() =>
              setCounts((prev) => ({
                ...prev,
                [product._id]: (prev[product._id] || 0) + 1
              }))
            }
          >
            <FontAwesomeIcon icon={faHeart} />
            <span>{counts[product._id] || 0}</span>
          </button>

          <img className="productImg" src={image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.category} — ${product.price}</p>
          <p>{product.description}</p>

          <div>
            <button className="add-btn" onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
            <button className="add-btn" onClick={() => handleAddToWishlist(product)}>
              Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
