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

  // Function to delete a user
  const deleteUser = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5005/users/${userId}`);
      setUsers((prevUsers) =>
        prevUsers.filter((user) => (user.id || user._id) !== userId)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user.");
    }
  };

  return (
    <>
      <h2>USER</h2>
      <div className="users-list">
        <ul>
          {users.map((user) => (
            <div className="user-card" key={user.id || user._id}>
              <p>Name: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Role: {user.role}</p>
              <button
                className="del-user"
                onClick={() => deleteUser(user.id || user._id)}
              >
                Del User
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Users;
