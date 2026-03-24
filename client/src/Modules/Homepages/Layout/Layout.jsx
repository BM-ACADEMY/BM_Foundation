// src/Modules/Homepages/Layout/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer"; // optional if you want footer on all pages
import Banner from "./Banner";

import SupportWidget from "./SupportWidget";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <SupportWidget />
    </>
  );
};

export default Layout;
