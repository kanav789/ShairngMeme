import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    localStorage.removeItem("token");
    navigate("/login");
  }, []);
}

export default Logout;
