// src/RegisterForm.js
import React, { useState } from "react";
import "./Register.css";

const RegisterForm = () => {
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
        console.log("Sucess", result);
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

      <p className="m-2">
        If you already have an account please login{" "}
        <a href="/Login" className="text-gray-500">
          Here
        </a>
      </p>
    </form>
  );
};

export default RegisterForm;
