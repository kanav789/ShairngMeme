import React, { useState, useContext } from "react";
import axios from "axios";

import "./Register.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email, password),
      });

      if (response.data.success) {
        console.log("Login successful:", response.data);
        login(response.data.user); // Use the login function from the context
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="text-xl">Sign In</h2>
        {error && <p className="error">{error}</p>}{" "}
        {/* Display error message */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign In</button>
        <p className="m-2">
          If you don't have an account, please register{" "}
          <a href="/Register" className="text-gray-500">
            here
          </a>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
