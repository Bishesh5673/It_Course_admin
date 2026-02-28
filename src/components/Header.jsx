import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-2xl flex flex-col p-8">

      {/* Logo / Title */}
      <div className="text-3xl font-bold mb-12 tracking-wide">
        Admin Panel
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 text-lg font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-3 rounded-xl transition ${
              isActive
                ? "bg-green-600 text-white shadow-md"
                : "hover:bg-gray-800"
            }`
          }
        >
          📚 Course Management
        </NavLink>

        <NavLink
          to="/userManagement"
          className={({ isActive }) =>
            `px-4 py-3 rounded-xl transition ${
              isActive
                ? "bg-green-600 text-white shadow-md"
                : "hover:bg-gray-800"
            }`
          }
        >
          👥 User Management
        </NavLink>

      </nav>

    </aside>
  );
}

export default Header;
