// src/Routes/HomepagesRoutes.jsx
import React from "react";
import Home from "../Modules/Homepages/Pages/Home";
import Hero from "../Modules/Homepages/Pages/Hero";
import SocialMediaLinks from "../Modules/Homepages/Pages/SocialMediaLinks";
import License from "../Modules/Homepages/Pages/License"; // ✅ Add this import
import LicenseDownload from "../Modules/Homepages/Pages/LicenseDownload";
import Banner from "../Modules/Homepages/Layout/Banner";
import VolunteerRoles from "../Modules/Homepages/Pages/VolunteerRoles";
import NextSteps from "../Modules/Homepages/Pages/NextSteps";
import Gallery from "../Modules/Homepages/Pages/Gallery";
import FounderMessage from "../Modules/Homepages/Pages/FounderMessage";
import Vision2030 from "../Modules/Homepages/Pages/Vision2030.jsx";
import SponsorPreview from "../Modules/Homepages/Pages/SponsorPreview";

const HomepagesRoutes = () => {
  return (
    <>
      {/* <Bar /> */}
      <Banner />
      <Hero />
      <FounderMessage />
      <Vision2030 />
      <SponsorPreview />
      <VolunteerRoles />
      <NextSteps />
      {/* <Home /> */}
      {/* <SocialMediaLinks /> */}
      {/* <BlogHome /> */}
      <LicenseDownload />
    </>
  );
};

export default HomepagesRoutes;
