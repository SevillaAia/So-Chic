import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [useMock, setUseMock] = useState(true);
  const navigate = useNavigate();

  // Mock users data
  const mockUsers = [
    { username: "testuser", email: "testuser@email.com", password: "testpass" },
    { username: "jane", email: "jane@email.com", password: "doe123" },
    { username: "admin", email: "admin@email.com", password: "admin" },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setError("");

    if (useMock) {
      const found = mockUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (!found) {
        setError("Invalid email or password.");
        return;
      }

      // Store logged-in user
      localStorage.setItem("loggedInUser", JSON.stringify(found));

      navigate(found.username === "admin" ? "/admin" : "/");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5005/users");

      const foundUser = res.data.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        setError("Invalid email or password.");
        return;
      }

      // Store logged-in user
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      navigate(foundUser.username === "admin" ? "/admin" : "/");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="log-info"></div>
      <div className="logIn-form">
        <h2>Welcome</h2>
        <form className="login" onSubmit={handleLogin}>
          <span>Email:</span>
          <input
            type="email"
            placeholder="e.g. jane@email.com"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          Not a Chicster yet? <br />
          Click <Link to="/Register">here</Link> to create an account
        </p>
      </div>
    </div>
  );
}

export default Login;
