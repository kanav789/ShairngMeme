import React, { useState } from "react";
import "./Register.css";

// import NavLink from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="register-form">
        <h2 className="text-xl">SignIn</h2>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>

        <button type="submit">Register</button>
        <p className="m-2">
          If you don't have a account please register{" "}
          <a href="/Register" className="text-gray-500">
            Here
          </a>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
