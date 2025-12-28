import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [useMock, setUseMock] = useState(true); // Toggle for mock or real login
  const navigate = useNavigate();

  // Mock users data
  const mockUsers = [
    { username: "testuser", password: "testpass" },
    { username: "jane", password: "doe123" },
    { username: "admin", password: "admin" },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    if (useMock) {
      // Mock login logic
      const found = mockUsers.find(
        (user) => user.username === username && user.password === password
      );
      if (found) {
        // If admin, redirect to admin page, else to Home
        if (username === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setError("Invalid username or password (mock).");
      }
      return;
    }
    try {
      // Real backend login
      const response = await axios.post("http://localhost:5005/api/login", {
        username,
        password,
      });
      // If admin, redirect to admin page, else to Home
      if (username === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="login-container">
      <div className="log-info"></div>
      <div className="logIn-form">
        <h2>Welcome</h2>
        <form className="login" onSubmit={handleLogin}>
          <span>Username:</span>
          <input
            type="text"
            placeholder="e.g. jane_doe@email.com"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span>Password:</span>
          <input
            type="password"
            placeholder="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="log-submit" type="submit">
            Log In
          </button>
        </form>
        <div className="check-mock">
          <label>
            <input
              type="checkbox"
              checked={useMock}
              onChange={() => setUseMock((v) => !v)}
            />
            Use mock users
          </label>
        </div>
        {error && <div className="error">{error}</div>}
        <p>
          Not a Chicster yet?
          <br />
          Click <Link to="/Register">here</Link> to create an account
        </p>
      </div>
    </div>
  );
}

export default Login;
