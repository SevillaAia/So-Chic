import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    if (!email || !username || !password || !repeatPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    if (password !== repeatPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5005/api/register", {
        email,
        username,
        password,
      });
      setSuccessMessage("Registration successful! You can now log in.");
      setEmail("");
      setUsername("");
      setPassword("");
      setRepeatPassword("");
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="reg-container">
      <h2>Create Your Account</h2>
      <form className="register" onSubmit={handleRegister}>
        <input
          className="reg-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="reg-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="reg-input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="reg-input"
          placeholder="Repeat-Password"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button className="reg-submit" type="submit">
          Sign Up
        </button>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <p>
          Already have an account? Login
          <Link to="/login"> here</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
