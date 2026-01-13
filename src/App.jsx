import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import UserHome from "./pages/user/UserHome";
import AdminHome from "./pages/admin/AdminHome";
import Downline from "./pages/user/Downline";
import Payouts from "./pages/user/Payouts";
import Profile from "./pages/user/Profile";
import UserManagement from "./pages/admin/UserManagement";
import ReferralAnalytics from "./pages/admin/ReferralAnalytics";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/user" />} />

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="downline" element={<Downline />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="analytics" element={<ReferralAnalytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
