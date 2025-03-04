import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/profile";


let isAuth = false;

export const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/profile', element:isAuth? <Profile/> : <Navigate to="/" /> }
]);