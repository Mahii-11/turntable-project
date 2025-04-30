import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex gap-6 mb-8">
        <NavLink
          to="turntables"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 px-4 py-2 rounded"
              : "bg-gray-700 px-4 py-2 rounded"
          }
        >
          Manage Turntables
        </NavLink>
        <NavLink
          to="parts"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 px-4 py-2 rounded"
              : "bg-gray-700 px-4 py-2 rounded"
          }
        >
          Manage Parts
        </NavLink>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  );
}
