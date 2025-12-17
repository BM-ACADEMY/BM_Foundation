import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  User, Calendar, MapPin, Phone, Mail,
  Briefcase, Heart, Clock, AlertTriangle,
  CheckCircle2, UploadCloud, PenTool
} from "lucide-react";
import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const INTERESTS = [
  { key: "education", label: "Education (கல்வி)" },
  { key: "health", label: "Health (ஆரோக்கியம்)" },
  { key: "food", label: "Food Distribution (உணவு)" },
  { key: "jobs", label: "Job Support (வேலை உதவி)" },
  { key: "development", label: "Area Development (ஊர் வளர்ச்சி)" },
  { key: "disaster", label: "Disaster Relief (அவசர உதவி)" },
  { key: "schemes", label: "Government Schemes (அரசுத் திட்டங்கள்)" },
];

export default function License() {
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    full_name: "", age: "", gender: "", ward_number: "",
    phone: "", email: "", address: "", photo: null,
    areas_of_interest: [], availability: "", previous_experience: "",
    emergency_contact_name: "", emergency_contact_phone: "",
    heard_from: "", signature: "",
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [phoneAvailable, setPhoneAvailable] = useState(null);
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* ---------------- PHONE CHECK ---------------- */
  const checkPhone = async (phone) => {
    if (phone.length !== 10) { setPhoneAvailable(null); return; }
    setChecking(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/license/license/check_phone/`, { params: { phone } });
      setPhoneAvailable(res.data.available);
    } catch {
      setPhoneAvailable(false);
    }
    setChecking(false);
  };

  /* ---------------- INPUT HANDLER ---------------- */
  const handleChange = (e) => {
    const { name, value, files, checked } = e.target;

    if (name === "phone") {
      const clean = value.replace(/\D/g, "").slice(0, 10);
      setFormData((p) => ({ ...p, phone: clean }));
      checkPhone(clean);
      return;
    }

    if (name === "photo") {
      const file = files?.[0] || null;
      setFormData((p) => ({ ...p, photo: file }));
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(file ? URL.createObjectURL(file) : null);
      return;
    }

    if (name === "areas_of_interest") {
      setFormData((p) => ({
        ...p,
        areas_of_interest: checked
          ? [...p.areas_of_interest, value]
          : p.areas_of_interest.filter((v) => v !== value),
      }));
      return;
    }

    setFormData((p) => ({ ...p, [name]: value }));
  };

  /* ---------------- VALIDATION ---------------- */
  const validate = () => {
    if (!formData.full_name) return toast.error("Enter full name");
    if (!formData.gender) return toast.error("Select gender");
    if (!formData.ward_number) return toast.error("Enter ward number");
    if (formData.phone.length !== 10) return toast.error("Invalid phone number");
    if (phoneAvailable === false) return toast.error("Phone already registered");
    if (!formData.address) return toast.error("Enter address");
    if (!formData.photo) return toast.error("Upload photo");
    if (!formData.signature) return toast.error("Signature required");
    return true;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => {
      if (Array.isArray(v)) data.append(k, v.join(", "));
      else data.append(k, v ?? "");
    });

    try {
      await axios.post(`${API_BASE_URL}/license/license/`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Volunteer application submitted successfully!");
      window.location.reload();
    } catch (err) {
      toast.error(err.response?.data?.error || "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-[#fcfcfc] font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >

        {/* 1. HEADER SECTION (Matches Banner Gradient) */}
        <div className="relative py-12 px-8 text-center bg-gradient-to-r from-[#b38a11] via-[#1a1a1a] to-[#8b0000]">
          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          <motion.div
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="relative z-10 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg p-2">
                 <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wide mb-2">
              Volunteer Registration
            </h1>
            <p className="text-[#f2bc1c] font-medium tracking-widest text-sm uppercase">
              Join the Movement • Make a Difference
            </p>
          </motion.div>
        </div>

        {/* 2. FORM CONTENT */}
        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">

          {/* SECTION: PERSONAL DETAILS */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3 mb-6">
              <User className="text-[#f26522]" size={24} /> Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Full Name" name="full_name" placeholder="As per ID proof" value={formData.full_name} onChange={handleChange} required />

              <div className="grid grid-cols-2 gap-4">
                 <InputGroup label="Age" name="age" type="number" placeholder="Years" value={formData.age} onChange={handleChange} />
                 <SelectGroup label="Gender" name="gender" value={formData.gender} onChange={handleChange} options={[
                    { val: "male", txt: "Male" }, { val: "female", txt: "Female" }, { val: "other", txt: "Other" }
                 ]} required />
              </div>

              <div className="relative">
                 <InputGroup
                    label="Mobile Number"
                    name="phone"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    icon={<Phone size={18} />}
                 />
                 {/* Phone Validation Indicator */}
                 <div className="absolute right-3 top-10 text-xs">
                    {checking && <span className="text-gray-400">Checking...</span>}
                    {!checking && formData.phone.length === 10 && phoneAvailable === true && <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle2 size={12}/> Available</span>}
                    {!checking && formData.phone.length === 10 && phoneAvailable === false && <span className="text-red-500 font-bold flex items-center gap-1"><AlertTriangle size={12}/> Taken</span>}
                 </div>
              </div>

              <InputGroup label="Email Address" name="email" type="email" placeholder="Optional" value={formData.email} onChange={handleChange} icon={<Mail size={18} />} />
              <InputGroup label="Ward Number" name="ward_number" placeholder="Your Ward No." value={formData.ward_number} onChange={handleChange} required icon={<MapPin size={18}/>} />

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Address *</label>
                <textarea
                  name="address" rows={3} placeholder="Door No, Street, Area, City, Pincode"
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] outline-none transition-all"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* SECTION: INTERESTS */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3 mb-6">
              <Heart className="text-[#f26522]" size={24} /> Areas of Interest
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
               {INTERESTS.map((i) => (
                 <label key={i.key} className={`cursor-pointer border rounded-xl p-4 flex items-start gap-3 transition-all hover:shadow-md ${formData.areas_of_interest.includes(i.label) ? "border-[#f26522] bg-orange-50" : "border-gray-200 bg-white"}`}>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 ${formData.areas_of_interest.includes(i.label) ? "bg-[#f26522] border-[#f26522]" : "border-gray-300"}`}>
                        {formData.areas_of_interest.includes(i.label) && <CheckCircle2 size={14} className="text-white" />}
                    </div>
                    <input type="checkbox" name="areas_of_interest" value={i.label} onChange={handleChange} className="hidden" />
                    <span className={`text-sm font-medium ${formData.areas_of_interest.includes(i.label) ? "text-[#002d4b]" : "text-gray-600"}`}>{i.label}</span>
                 </label>
               ))}
            </div>
          </div>

          {/* SECTION: ADDITIONAL INFO */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3 mb-6">
              <Briefcase className="text-[#f26522]" size={24} /> Additional Info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <InputGroup label="Availability" name="availability" placeholder="e.g. Weekends, Evenings" value={formData.availability} onChange={handleChange} icon={<Clock size={18}/>} />
               <InputGroup label="Previous Experience" name="previous_experience" placeholder="Any past social work?" value={formData.previous_experience} onChange={handleChange} />
               <InputGroup label="Emergency Contact Name" name="emergency_contact_name" placeholder="Relative / Friend" value={formData.emergency_contact_name} onChange={handleChange} />
               <InputGroup label="Emergency Phone" name="emergency_contact_phone" placeholder="Contact Number" value={formData.emergency_contact_phone} onChange={handleChange} />
               <InputGroup label="How did you hear about us?" name="heard_from" placeholder="Social Media, Friend, Event" value={formData.heard_from} onChange={handleChange} />
            </div>
          </div>

          {/* SECTION: UPLOADS & SIGNATURE */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Photo Upload */}
                <div>
                   <label className="block text-sm font-bold text-[#002d4b] mb-3">Upload Your Photo *</label>
                   <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                         {previewUrl ? <img src={previewUrl} className="w-full h-full object-cover" /> : <User className="w-full h-full p-6 text-gray-400" />}
                      </div>
                      <div className="flex-1">
                         <input
                           type="file" ref={fileInputRef} name="photo" accept="image/*" onChange={handleChange}
                           className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#002d4b]/10 file:text-[#002d4b] hover:file:bg-[#002d4b]/20"
                         />
                         <p className="text-xs text-gray-400 mt-2">Max size 5MB. Formats: JPG, PNG.</p>
                      </div>
                   </div>
                </div>

                {/* Digital Signature */}
                <div>
                   <InputGroup
                     label="Digital Signature *"
                     name="signature"
                     placeholder="Type your full name to sign"
                     value={formData.signature}
                     onChange={handleChange}
                     icon={<PenTool size={18}/>}
                   />
                   <p className="text-xs text-gray-400 mt-2">By typing your name, you agree to the BM Foundation code of conduct.</p>
                </div>
             </div>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4 text-center">
             <motion.button
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               disabled={submitting || checking || (formData.phone.length===10 && phoneAvailable===false)}
               className={`w-full md:w-auto px-16 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-xl transition-all ${
                  submitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#f26522] hover:bg-[#d95315] text-white hover:shadow-orange-500/30"
               }`}
             >
                {submitting ? "Processing Application..." : "Submit Registration"}
             </motion.button>
          </div>

        </form>
      </motion.div>
    </section>
  );
}

// ---------------- REUSABLE INPUT COMPONENTS ---------------- //

const InputGroup = ({ label, name, type = "text", placeholder, value, onChange, required, icon }) => (
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
       {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
       {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
       <input
         type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
         className={`w-full bg-gray-50 border border-gray-200 rounded-lg focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] outline-none transition-all py-3 ${icon ? "pl-12 pr-4" : "px-4"}`}
       />
    </div>
  </div>
);

const SelectGroup = ({ label, name, value, onChange, options, required }) => (
  <div>
    <label className="block text-sm font-bold text-gray-700 mb-2">
       {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
         name={name} value={value} onChange={onChange}
         className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] outline-none appearance-none"
      >
         <option value="">Select...</option>
         {options.map((o) => <option key={o.val} value={o.val}>{o.txt}</option>)}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
    </div>
  </div>
);
