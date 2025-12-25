import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth pages (no navbar/footer) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Main App pages */}
          <Route element={<MainLayout />}>
            {/* index == path="/" */}
            <Route index element={<Content />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="collections" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
