import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav.jsx";

function AdminLayout() {
  return (
    <>
      <AdminNav />
      <Outlet />
    </>
  );
}

export default AdminLayout;
