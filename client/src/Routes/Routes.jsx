// src/Routes/Routes.jsx
import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// ──────────────────────────────────────────────
//  ScrollToTop component (must be inside Router)
// ──────────────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small timeout gives the new page a chance to render first
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

// ──────────────────────────────────────────────
//  Import your pages / route groups
// ──────────────────────────────────────────────
import HomepagesRoutes from "./HomepagesRoutes";
import AdminRoutes from "./AdminRoutes";

import Layout from "../Modules/Homepages/Layout/Layout";
import License from "../Modules/Homepages/Pages/License";
import LicenseDownload from "../Modules/Homepages/Pages/LicenseDownload";
import Contact from "../Modules/Homepages/Pages/Contact";
import LicenseCardPdfWrapper from "../Modules/Homepages/Pages/LicenseCardPdfWrapper";
import Gallery from "../Modules/Homepages/Pages/Gallery";

const AppRoutes = () => {
  return (
    <Router>
      {/* ← Scroll to top on every route change */}
      <ScrollToTop />

      <Routes>
        {/* ---------- Public / Homepages ---------- */}
        <Route
          path="/*"
          element={
            <Layout>
              <HomepagesRoutes />
            </Layout>
          }
        />




        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />




        {/* License pages – you had two identical paths, keep only one */}
        <Route
          path="/license"
          element={
            <Layout>
              <License />
            </Layout>
          }
        />
        <Route
          path="/license/download"
          element={
            <Layout>
              <LicenseDownload />
            </Layout>
          }
        />
        <Route
          path="/Gallery"
          element={
            <Layout>
              <Gallery />
            </Layout>
          }
        />


        {/* ---------- Admin ---------- */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route
          path="/admin/license/pdf/:id"
          element={<LicenseCardPdfWrapper />}
        />

        {/* ---------- Fallback ---------- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
