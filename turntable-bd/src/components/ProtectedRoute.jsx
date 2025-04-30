// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");

  // If there's no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
