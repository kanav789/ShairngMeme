// src/RegisterForm.js
import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { authlogin } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
const RegisterForm = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

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
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        setMessage(result.message);

        localStorage.setItem("token", result.token);
        dispatch(authlogin());

        navigate("/");
      } else {
        console.log("error", response.statusText);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="text-xl">Register</h2>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
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

      <button type="submit">Register</button>

      {message && <p className="message">{message}</p>}
      <p className="m-2">
        Already have an account?{" "}
        <a href="/login" className="text-gray-500">
          Login Here
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
