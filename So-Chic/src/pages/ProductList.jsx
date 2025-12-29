import React, { useEffect, useState } from "react";
import image from "../assets/defaultPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ProductList() {
  const [counts, setCounts] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API
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

  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div>
              <button
                className="like-btn"
                onClick={() =>
                  setCounts((prev) => ({
                    ...prev,
                    [product.id]: (prev[product.id] || 0) + 1,
                  }))
                }
              >
                <FontAwesomeIcon icon={faHeart} />
                <span>{counts[product.id] || 0}</span>
              </button>
            </div>
            <img className="productImg" src={image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>
              {product.category} — ${product.price}
            </p>
            <p>{product.description}</p>
            <div>
              <button className="add-btn">Add to cart</button>
              <button className="add-btn"> Wishlist </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
