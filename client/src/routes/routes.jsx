import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

let isAuth = true;


export const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/Dashboard", element: <Dashboard /> },
  { path: "/Profile", element: isAuth ? <Profile /> : <Navigate to="/" /> },
]);
