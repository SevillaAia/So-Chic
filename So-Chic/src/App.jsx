import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import UserProfile from "./pages/UserProfile";
import Wishlist from "./pages/Wishlist";
import CartPages from "./pages/CartPages";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth pages (no navbar/footer) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Route>

          {/* Admin pages */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/products" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>

          {/* Main App pages */}
          <Route element={<MainLayout />}>
            {/* index == path="/" */}
            <Route index element={<Content />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="collections" element={<ProductList />} />
            <Route path="UserProfile" element={<UserProfile />} />
            <Route path="Wishlist" element={<Wishlist />} />
            <Route path="CartPages" element={<CartPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
