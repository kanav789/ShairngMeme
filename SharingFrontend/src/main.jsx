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

import Register from "./UIComponents/Register/Register";
import LoginForm from "./UIComponents/Register/Login";
import Post from "./UIComponents/Post/Post";
import Profile from "./UIComponents/Profile/Profile";
import Logout from "./UIComponents/Register/Logout";

// store
import store from "./Store/Store";
import { Provider } from "react-redux";
import ProtectorLayout from "./ProtectorLayout";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: (
          <ProtectorLayout authentication={false}>
            <LoginForm />
          </ProtectorLayout>
        ),
      },
      {
        path: "/Register",
        element: (
          <ProtectorLayout authentication>
            <Register />
          </ProtectorLayout>
        ),
      },
      {
        path: "/Post",
        element: (
          <ProtectorLayout authentication>
            <Post />
          </ProtectorLayout>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectorLayout authentication>
            <Profile />
          </ProtectorLayout>
        ),
      },
      {
        path: "/logout",
        element: (
          <ProtectorLayout authentication>
            <Logout />
          </ProtectorLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />{" "}
    </Provider>
  </React.StrictMode>
);
