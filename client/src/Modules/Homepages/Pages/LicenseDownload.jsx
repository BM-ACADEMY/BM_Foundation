import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaDownload, FaWhatsapp, FaGift, FaRocket } from "react-icons/fa";
import { ShieldCheck, UserCheck, Star } from "lucide-react"; // Added Lucide icons for consistency
import { motion } from "framer-motion";

import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";
import image from "../../../assets/foundation.jpg"; // Using the portrait image for the ID card preview

export default function MembershipDownload() {
  // ---------------- STATE & LOGIC (UNCHANGED) ----------------
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const progressIntervalRef = useRef(null);
  const API_URL = `${import.meta.env.VITE_API_BASE_URL}/license/license/download/`;

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
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

      if (res.status === 404) {
        setErrorMsg("Membership not found.");
        return;
      }
      if (res.status === 400) {
        setErrorMsg("Membership not approved yet.");
        return;
      }
      if (res.status !== 200) {
        setErrorMsg("Unable to download certificate.");
        return;
      }

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
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 800);
    }
  };

  // ---------------- UI RENDER ----------------
  return (
    <section className="min-h-screen py-24 bg-[#fcfcfc] flex flex-col items-center justify-center font-sans px-6">

      {/* TITLE SECTION (Matches Volunteer Header) */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#002d4b] leading-tight">
           Official <span className="text-[#d4a017]">Membership</span> Portal
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Verify your status and download your digital identity card to access volunteer benefits.
        </p>
      </div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
      >

        {/* LEFT SIDE: Visual Preview (Matches Banner Style) */}
        <div className="relative bg-[#1a1a1a] p-10 lg:p-14 flex flex-col justify-center items-center overflow-hidden">

            {/* Background Gradient & Texture from Banner */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#b38a11] via-[#1a1a1a] to-[#8b0000] opacity-90"></div>
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            {/* ID Card Mockup */}
            <motion.div
               initial={{ rotate: -2 }}
               animate={{ rotate: 0 }}
               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
               className="relative z-10 w-full max-w-sm aspect-[1.58/1] bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 shadow-2xl"
            >
                <div className="flex justify-between items-start mb-4">
                    <img src={logo} alt="BM Logo" className="w-12 h-12 bg-white rounded-full p-1" />
                    <div className="text-right">
                        <h3 className="text-white font-bold uppercase text-xs tracking-widest">Membership ID</h3>
                        <p className="text-[#f2bc1c] font-mono font-bold">BM-XXXX-XXXX</p>
                    </div>
                </div>
                <div className="flex items-end gap-4">
                     <div className="w-16 h-20 bg-gray-800 rounded border border-gray-600 overflow-hidden">
                        <img src={image} className="w-full h-full object-cover opacity-80 grayscale" alt="preview"/>
                     </div>
                     <div className="space-y-1">
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                        <div className="h-2 w-32 bg-white/40 rounded"></div>
                        <div className="h-2 w-16 bg-[#f2bc1c]/60 rounded mt-2"></div>
                     </div>
                </div>
            </motion.div>

            <p className="relative z-10 mt-8 text-white/70 text-sm font-medium flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#f2bc1c]" />
                Secure Digital Verification
            </p>
        </div>

        {/* RIGHT SIDE: Form (Matches Volunteer Clean Style) */}
        <div className="p-10 lg:p-14 flex flex-col justify-center bg-white relative">

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#002d4b] mb-2">Get Your Certificate</h3>
            <p className="text-gray-500 text-sm">
                Enter your registered mobile number to verify your identity and download your card.
            </p>
          </div>

          <div className="relative mb-6">
            <label className="text-xs font-bold text-[#002d4b] uppercase tracking-wider mb-2 block">Mobile Number</label>
            <input
              type="text"
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className={`w-full p-4 bg-gray-50 rounded-lg outline-none border transition-all text-lg font-medium tracking-wide ${
                errorMsg
                ? "border-red-400 bg-red-50 text-red-900"
                : "border-gray-200 focus:border-[#f26522] focus:bg-white text-[#002d4b]"
              }`}
            />
          </div>

          {errorMsg && (
             <motion.div
               initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
               className="bg-red-50 text-red-600 px-4 py-3 rounded-md text-sm mb-6 border-l-4 border-red-500"
             >
                {errorMsg}
             </motion.div>
          )}

          {successMsg && (
             <motion.div
               initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
               className="bg-green-50 text-green-700 px-4 py-3 rounded-md text-sm mb-6 border-l-4 border-green-500"
             >
                {successMsg}
             </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            disabled={loading}
            className={`w-full py-4 rounded-lg font-black uppercase tracking-widest text-white shadow-lg transition-all flex items-center justify-center gap-3 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#f26522] hover:bg-[#d95315] hover:shadow-[#f26522]/30"
            }`}
          >
            {loading ? (
                <>Downloading <span className="text-white/80">{progress}%</span></>
            ) : (
                <><FaDownload /> Download ID Card</>
            )}
          </motion.button>

          <div className="mt-8 flex items-center justify-center gap-6 text-gray-400">
             <div className="flex items-center gap-2 text-xs">
                <UserCheck size={14} /> Registered Only
             </div>
             <div className="h-4 w-px bg-gray-300"></div>
             <div className="flex items-center gap-2 text-xs">
                <ShieldCheck size={14} /> Encrypted
             </div>
          </div>

        </div>
      </motion.div>

      {/* NEXT STEPS SECTION (Matches Volunteer Grid Style) */}
      <div className="max-w-6xl w-full mt-20">
        <h4 className="text-[#002d4b] font-bold text-center text-xl mb-8 uppercase tracking-widest">
            After Downloading
        </h4>
        <div className="grid md:grid-cols-3 gap-6">
            <StepCard
                icon={<FaWhatsapp className="text-green-500" />}
                title="Join Community"
                desc="Get added to your local volunteer WhatsApp group using your ID number."
            />
            <StepCard
                icon={<Star className="text-[#d4a017]" />}
                title="Earn Points"
                desc="Show your digital ID at events to earn reputation points."
            />
            <StepCard
                icon={<FaRocket className="text-[#f26522]" />}
                title="Start Volunteering"
                desc="Browse available roles in your district and sign up today."
            />
        </div>
      </div>
    </section>
  );
}

// Sub-component for Steps (Styled to match Volunteer Cards)
function StepCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:border-[#d4a017]/30"
    >
      <div className="text-3xl mb-4 p-4 bg-gray-50 rounded-full group-hover:bg-[#002d4b] group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="font-bold text-[#002d4b] mb-2 text-lg">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
