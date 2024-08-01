import React, { useState } from "react";

import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authlogin } from "../../Store/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("token", result.token);
        setMessage("Login successful!");
        console.log("Email:", result.email);

        try {
          dispatch(authlogin());
        } catch (dispatchError) {
          console.error("Dispatch error:", dispatchError);
          throw dispatchError; // Re-throw to be caught by outer catch
        }

        navigate("/");
      } else {
        const errorResult = await response.json();
        setMessage(errorResult.message || "Login failed.");
        console.error("Error response:", errorResult);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.error("Catch error:", error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="text-xl">Login</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Login</button>
      {message && <p className="message">{message}</p>}
      <p className="m-2">
        Don't have an account?{" "}
        <a href="/register" className="text-gray-500">
          Register Here
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
