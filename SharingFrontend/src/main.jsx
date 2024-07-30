import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home";
import Card from "./UIComponents/Card/Card";
import Register from "./UIComponents/Register/Register";
import LoginForm from "./UIComponents/Register/Login";
import Post from "./UIComponents/Post/Post";
import Profile from "./UIComponents/Profile/Profile";
import Logout from "./UIComponents/Register/Logout";
// Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="" element={<Card image="/Image/a.jpg" />} />

      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/Profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
