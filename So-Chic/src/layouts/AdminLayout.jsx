import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav.jsx";

function AdminLayout() {
  return (
    <>
      <div className="admin-layout">
        <AdminNav />
        <Outlet />
      </div>
    </>
  );
}

export default AdminLayout;
