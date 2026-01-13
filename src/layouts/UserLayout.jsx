import { NavLink, Outlet } from "react-router-dom";

export default function UserLayout() {
  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded ${
      isActive ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <aside className="w-full md:w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-semibold text-primary mb-6">
          User Dashboard
        </h2>
        <nav className="space-y-2">
          <NavLink to="/user" end className={linkClass}>Home</NavLink>
          <NavLink to="/user/downline" className={linkClass}>Downline</NavLink>
          <NavLink to="/user/payouts" className={linkClass}>Payouts</NavLink>
          <NavLink to="/user/profile" className={linkClass}>Profile</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
}
