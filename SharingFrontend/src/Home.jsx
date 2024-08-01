import React from "react";
import Navbar from "./UIComponents/Navbar/Navbar";
import SearchBar from "./UIComponents/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./UIComponents/Register/Login";
function Home() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <div>
      <Navbar />

      <SearchBar />
      {/* adding the Protector */}
      {authStatus === true ? <Outlet /> : <LoginForm />}
    </div>
  );
}

export default Home;
