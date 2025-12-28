import React from "react";

function AdminNav() {
  return (
    <>
      <nav className="admin-nav">
        <h2>Admin Navigation</h2>
        <div className="admin-links">
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AdminNav;
