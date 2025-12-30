import React from "react";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <>
      <nav className="admin-nav">
        <div className="admin-controls">
          <div>
            <Link to="login">
              <button className="admin-off">logout</button>
            </Link>
          </div>
          <div>
            <h2>Admin Panel</h2>
          </div>
          <div className="spacer"></div>
        </div>

        <div className="admin-links">
          <ul>
            <Link to="/admin">
              <li>Dashboard</li>
            </Link>
            <Link to="/admin/users">
              <li>Users</li>
            </Link>
            <Link to="/admin/products">
              <li>products</li>
            </Link>
            <Link to="/admin/orders">
              <li>Orders</li>
            </Link>
            <Link to="/admin/settings">
              <li>Settings</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminNav;
