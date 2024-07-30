import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected() {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token === "") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  });
}

export default Protected;
