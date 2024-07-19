import React from "react";
import Navbar from "./UIComponents/Navbar/Navbar";
import HeaderBar from "./UIComponents/HeaderBar/HeaderBar";
import SearchBar from "./UIComponents/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <div>
      <Navbar />
      <HeaderBar />
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default Home;
