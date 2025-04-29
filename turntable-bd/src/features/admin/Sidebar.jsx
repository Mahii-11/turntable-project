import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6 flex flex-col gap-8">
      <h1 className="text-2xl font-bold text-center">Turntable Admin</h1>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/admin-dashboard/products"
          className={({ isActive }) =>
            `p-3 rounded-md transition-colors ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          Turntable Products
        </NavLink>

        <NavLink
          to="/admin-dashboard/parts"
          className={({ isActive }) =>
            `p-3 rounded-md transition-colors ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          Turntable Parts
        </NavLink>
      </nav>
    </aside>
  );
}
