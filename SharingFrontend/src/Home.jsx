import React from "react";
import Navbar from "./UIComponents/Navbar/Navbar";
import SearchBar from "./UIComponents/SearchBar/SearchBar";
import { Outlet } from "react-router-dom";
import "./App.css";
function Home() {
  return (
    <div>
      <Navbar />

      <SearchBar />
      <Outlet />
    </div>
  );
}

export default Home;
