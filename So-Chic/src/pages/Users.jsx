import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend API
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5005/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h2>USER</h2>
      <div className="users-list">
        <ul>
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <button className="del-user">Delete User</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
