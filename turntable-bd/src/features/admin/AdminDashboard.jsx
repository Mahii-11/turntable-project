import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">
        Admin Dashboard
      </h1>

      <div className="flex justify-center gap-6 mb-8">
        <NavLink
          to="turntables"
          className={({ isActive }) =>
            `px-5 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-800 hover:bg-gray-700"
            }`
          }
        >
          🎵 Manage Turntables
        </NavLink>
        <NavLink
          to="parts"
          className={({ isActive }) =>
            `px-5 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-800 hover:bg-gray-700"
            }`
          }
        >
          ⚙️ Manage Parts
        </NavLink>
      </div>

      <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
        <Outlet />
      </div>
    </div>
  );
}
