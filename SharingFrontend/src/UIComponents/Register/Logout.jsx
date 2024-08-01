import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/authSlice";
function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");

    localStorage.removeItem("token");
    navigate("/login");
    dispatch(logout());
  }, [navigate]);
}

export default Logout;
