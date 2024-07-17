import React from "react";
import Navbar from "./UIComponents/Navbar/Navbar";
import "./App.css";
import Card from "./UIComponents/Card/Card";
import HeaderBar from "./UIComponents/HeaderBar/HeaderBar";
import SearchBar from "./UIComponents/SearchBar/SearchBar";
function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <HeaderBar />
      <Card image="/Image/kanu.jpg" />
      <Card image="/Image/kanu.jpg" />
      <Card image="/Image/kanu.jpg" />
      <Card image="/Image/kanu.jpg" />
      <Card image="/Image/kanu.jpg" />
      <Card image="/Image/kanu.jpg" />
    </div>
  );
}

export default App;
