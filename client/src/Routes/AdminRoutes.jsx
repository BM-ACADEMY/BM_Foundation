// src/Routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import AdminLayout from "../Modules/Admin/Layout/AdminLayout.jsx";

// Pages
import Login from "../Modules/Admin/Auth/Login.jsx";
import LicenseAdmin from "../Modules/Admin/Pages/License/License.jsx";

// ✅ Import Private Route
import PrivateRoute from "./PrivateRoute.jsx";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="login" element={<Login />} />

      {/* Protected Admin Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="license" element={<LicenseAdmin />} />

          {/* Redirect unknown paths */}

        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
