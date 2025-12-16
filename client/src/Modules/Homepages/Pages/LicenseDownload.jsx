import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaDownload, FaWhatsapp, FaGift, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";
import BlogBg from "../../../assets/banner/blog_bg_1.jpg";

export default function MembershipDownload() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const progressIntervalRef = useRef(null);
  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/license/license/download/`;

  useEffect(() => {
    return () => { if (progressIntervalRef.current) clearInterval(progressIntervalRef.current); };
  }, []);

  const startProgress = () => {
    let current = 0;
    progressIntervalRef.current = setInterval(() => {
      current += Math.random() * 12;
      if (current >= 90) current = 90;
      setProgress(Math.round(current));
    }, 200);
  };

  const stopProgress = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const handleDownload = async () => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    setErrorMsg("");
    setSuccessMsg("");
    setLoading(true);
    startProgress();

    try {
      const res = await axios.get(API_URL, {
        params: { phone: cleanPhone },
        responseType: "blob",
        validateStatus: () => true,
      });

      stopProgress();
      setProgress(100);

      if (res.status === 404) { setErrorMsg("Membership not found."); return; }
      if (res.status === 400) { setErrorMsg("Membership not approved yet."); return; }
      if (res.status !== 200) { setErrorMsg("Unable to download certificate."); return; }

      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "BM_Foundation_Certificate.pdf";
      link.click();
      window.URL.revokeObjectURL(url);

      toast.success("Download successful!");
      setSuccessMsg("Your certificate has been downloaded.");
    } catch (error) {
      stopProgress();
      setErrorMsg("Server error. Please try again.");
    } finally {
      setTimeout(() => { setLoading(false); setProgress(0); }, 800);
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gray-50 flex flex-col items-center">
      {/* DOWNLOAD CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
      >
        {/* Left Side: Image/Info */}
        <div className="relative bg-[#2c6e6e] p-10 text-white flex flex-col justify-center">
          <img src={logo} alt="Logo" className="w-20 mb-6 bg-white p-2 rounded-xl" />
          <h2 className="text-3xl font-serif font-bold mb-4">Official Membership</h2>
          <p className="opacity-80 leading-relaxed">
            Download your official BM Foundation digital certificate. This document verifies your active contribution to our global mission.
          </p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm italic">Need help? Contact our support team.</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Get Your Certificate</h3>
          <p className="text-gray-500 mb-6 text-sm">Enter your registered mobile number below.</p>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder="10-digit Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className={`w-full p-4 bg-gray-100 rounded-xl outline-none border-2 transition-all ${
                errorMsg ? "border-red-400" : "border-transparent focus:border-[#ff6600]"
              }`}
            />
          </div>

          {errorMsg && <p className="text-red-500 text-xs mb-4 px-1">{errorMsg}</p>}

          <button
            onClick={handleDownload}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-3 ${
              loading ? "bg-gray-400" : "bg-[#ff6600] hover:bg-[#e65c00] active:scale-95"
            }`}
          >
            <FaDownload /> {loading ? `Downloading ${progress}%` : "Download Now"}
          </button>

          {successMsg && <p className="text-green-600 text-center mt-4 text-sm font-medium">{successMsg}</p>}
        </div>
      </motion.div>

      {/* NEXT STEPS SECTION */}
      <div className="max-w-5xl w-full px-6">
        <div className="text-center mb-10">
       
        </div>
      </div>
    </section>
  );
}

// Sub-component for Steps
function StepCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4 p-4 bg-gray-50 rounded-full">{icon}</div>
      <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
