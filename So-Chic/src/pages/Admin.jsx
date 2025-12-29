import React, { useState } from "react";
import axios from "axios";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    brand: "",
    price: "",
    shadeCount: "",
    description: "",
    rating: "",
    stockCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ...existing code...

  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const payload = {
      ...formData,
      price: Number(formData.price),
      shadeCount: Number(formData.shadeCount),
      rating: Number(formData.rating),
      stockCount: Number(formData.stockCount),
    };
    try {
      await axios.post("http://localhost:5005/products", payload);
      setMessage("Product created successfully!");
      setFormData({
        name: "",
        categoryId: "",
        brand: "",
        price: "",
        shadeCount: "",
        description: "",
        rating: "",
        stockCount: "",
      });
    } catch (error) {
      setMessage("Error creating product. Please try again.");
    }
  };

  return (
    <>
      <div className="admin-page">
        <h1>Admin Page</h1>
        <p>Welcome, Admin! Here you can manage the application.</p>
      </div>
      <div className="form-container">
        <h2>Product Entry</h2>
        <form onSubmit={handleSubmit}>
          <p>Product Name:</p>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product name"
            required
          />

          <p>Brand:</p>
          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />

          <p>Price:</p>
          <input
            type="number"
            name="price"
            step="0.01"
            value={formData.price}
            onChange={handleChange}
            required
          />

          <p>Shade Count:</p>
          <input
            type="number"
            name="shadeCount"
            value={formData.shadeCount}
            onChange={handleChange}
          />

          <p>Stock Count:</p>
          <input
            type="number"
            name="stockCount"
            value={formData.stockCount}
            onChange={handleChange}
            required
          />

          <p>Rating:</p>
          <input
            type="number"
            name="rating"
            step="0.1"
            max="5"
            min="0"
            value={formData.rating}
            onChange={handleChange}
          />

          <p>Category:</p>
          <select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <p>Product Category:</p>
            <option value="">Select category</option>
            <option value="1">Foundation</option>
            <option value="2">Lipstick</option>
            <option value="3">Mascara</option>
            <option value="4">Eyeliner</option>
            <option value="5">Blush</option>
            <option value="6">Eyeshadow</option>
            <option value="7">Lip Gloss</option>
            <option value="8">Concealer</option>
          </select>

          <p>Description:</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button type="submit">Create product</button>
          {message && <div>{message}</div>}
        </form>
      </div>
    </>
  );
}

export default Admin;
