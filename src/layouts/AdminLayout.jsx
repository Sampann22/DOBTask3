import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded ${
      isActive
        ? "bg-primary text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-semibold text-primary mb-6">
          Admin Panel
        </h2>

        <nav className="space-y-2">
          <NavLink to="/admin" end className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/users" className={linkClass}>
            User Management
          </NavLink>

          <NavLink to="/admin/analytics" className={linkClass}>
            Referral Analytics
          </NavLink>

          <NavLink to="/admin/settings" className={linkClass}>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}
