import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EntryPage from "./pages/Start";
import {Protected, ProtectedRoute} from "./components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import EditTimeSheet from "./pages/EditTimeSheet";
import AddTimeSheet from "./pages/AddTimeSheet";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAuth from "./pages/AdminAuth";
import UserAuth from "./pages/UserAuth";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
       
        <Route path="/admin/auth" element={<AdminAuth />} />
        <Route path="/user/auth" element={<UserAuth />} />
         <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Protected routes */}
        <Route path="/user/dashboard" element={<ProtectedRoute><App /></ProtectedRoute>} />
        <Route path="/edit/timesheet" element={<ProtectedRoute><EditTimeSheet /></ProtectedRoute>} />
        <Route path="/add/timesheet" element={<ProtectedRoute><AddTimeSheet /></ProtectedRoute>} />
         <Route path="/" element={<Protected><EntryPage /></Protected>} />
       
        {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
         <Route path="*" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
