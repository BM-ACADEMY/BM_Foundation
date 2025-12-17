import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  User, MapPin, Phone, Mail,
  Briefcase, Heart, Clock, AlertTriangle,
  CheckCircle2, PenTool, ChevronRight, ChevronLeft, SkipForward
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

  // State for Multi-Step Form
  const [currentStep, setCurrentStep] = useState(1);

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

  /* ---------------- STEP VALIDATION ---------------- */
  const validateStep = (step) => {
    if (step === 1) {
        if (!formData.full_name) { toast.error("Enter full name"); return false; }
        if (!formData.gender) { toast.error("Select gender"); return false; }
        if (!formData.ward_number) { toast.error("Enter ward number"); return false; }
        if (formData.phone.length !== 10) { toast.error("Invalid phone number"); return false; }
        if (phoneAvailable === false) { toast.error("Phone already registered"); return false; }
        if (!formData.address) { toast.error("Enter address"); return false; }
        return true;
    }
    if (step === 2) {
        // Step 2 is OPTIONAL - No validation needed
        return true;
    }
    if (step === 3) {
        if (!formData.photo) { toast.error("Upload photo"); return false; }
        if (!formData.signature) { toast.error("Signature required"); return false; }
        return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  /* ---------------- FINAL SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;

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

        {/* 1. HEADER */}
        <div className="relative py-10 px-8 text-center bg-gradient-to-r from-[#b38a11] via-[#1a1a1a] to-[#8b0000]">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          <div className="relative z-10 flex flex-col items-center">
             <img src={logo} alt="Logo" className="w-16 h-16 object-contain bg-white rounded-full p-2 mb-3 shadow-lg" />
             <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
               Volunteer Registration
             </h1>
          </div>
        </div>

        {/* 2. PROGRESS BAR */}
        <div className="bg-gray-50 border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-center gap-4 text-sm font-bold">
                <span className={`flex items-center gap-2 ${currentStep >= 1 ? "text-[#f26522]" : "text-gray-400"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 1 ? "bg-[#f26522] text-white" : "bg-gray-300 text-gray-500"}`}>1</div>
                    Personal
                </span>
                <div className="w-10 h-0.5 bg-gray-300"></div>
                <span className={`flex items-center gap-2 ${currentStep >= 2 ? "text-[#f26522]" : "text-gray-400"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 2 ? "bg-[#f26522] text-white" : "bg-gray-300 text-gray-500"}`}>2</div>
                    Details (Optional)
                </span>
                <div className="w-10 h-0.5 bg-gray-300"></div>
                <span className={`flex items-center gap-2 ${currentStep >= 3 ? "text-[#f26522]" : "text-gray-400"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${currentStep >= 3 ? "bg-[#f26522] text-white" : "bg-gray-300 text-gray-500"}`}>3</div>
                    Verify
                </span>
            </div>
        </div>

        {/* 3. FORM STEPS */}
        <div className="p-8 md:p-12 min-h-[400px]">

           {/* --- STEP 1: PERSONAL (MANDATORY) --- */}
           {currentStep === 1 && (
             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3">
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
                     <InputGroup label="Mobile Number" name="phone" placeholder="10-digit number" value={formData.phone} onChange={handleChange} required icon={<Phone size={18} />} />
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
                    <textarea name="address" rows={2} placeholder="Door No, Street, Area, City, Pincode" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] outline-none" onChange={handleChange} defaultValue={formData.address}></textarea>
                  </div>
                </div>
             </motion.div>
           )}

           {/* --- STEP 2: EXTRAS (OPTIONAL) --- */}
           {currentStep === 2 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">

                {/* Interests */}
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3 mb-6">
                      <Heart className="text-[#f26522]" size={24} /> Areas of Interest <span className="text-sm font-normal text-gray-400 ml-auto">(Optional)</span>
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

                {/* Additional Info */}
                <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3 mb-6">
                      <Briefcase className="text-[#f26522]" size={24} /> Additional Info <span className="text-sm font-normal text-gray-400 ml-auto">(Optional)</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <InputGroup label="Availability" name="availability" placeholder="e.g. Weekends" value={formData.availability} onChange={handleChange} icon={<Clock size={18}/>} />
                       <InputGroup label="Previous Experience" name="previous_experience" placeholder="Any past social work?" value={formData.previous_experience} onChange={handleChange} />
                       <InputGroup label="Emergency Contact Name" name="emergency_contact_name" placeholder="Relative / Friend" value={formData.emergency_contact_name} onChange={handleChange} />
                       <InputGroup label="Emergency Phone" name="emergency_contact_phone" placeholder="Contact Number" value={formData.emergency_contact_phone} onChange={handleChange} />
                    </div>
                </div>
             </motion.div>
           )}

           {/* --- STEP 3: VERIFY (MANDATORY) --- */}
           {currentStep === 3 && (
             <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <h3 className="flex items-center gap-2 text-xl font-bold text-[#002d4b] border-b border-gray-200 pb-3">
                  <CheckCircle2 className="text-[#f26522]" size={24} /> Verification
                </h3>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                     {/* Photo */}
                     <div>
                        <label className="block text-sm font-bold text-[#002d4b] mb-3">Upload Your Photo *</label>
                        <div className="flex items-center gap-6">
                           <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                              {previewUrl ? <img src={previewUrl} className="w-full h-full object-cover" /> : <User className="w-full h-full p-6 text-gray-400" />}
                           </div>
                           <div className="flex-1">
                              <input type="file" ref={fileInputRef} name="photo" accept="image/*" onChange={handleChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#002d4b]/10 file:text-[#002d4b] hover:file:bg-[#002d4b]/20" />
                              <p className="text-xs text-gray-400 mt-2">Max size 5MB. Formats: JPG, PNG.</p>
                           </div>
                        </div>
                     </div>
                     {/* Signature */}
                     <div>
                        <InputGroup label="Digital Signature *" name="signature" placeholder="Type your full name to sign" value={formData.signature} onChange={handleChange} icon={<PenTool size={18}/>} />
                        <p className="text-xs text-gray-400 mt-2">By typing your name, you agree to the BM Foundation code of conduct.</p>
                     </div>
                  </div>
                </div>
             </motion.div>
           )}

        </div>

        {/* 4. FOOTER / NAVIGATION */}
        <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center">

            {/* BACK BUTTON */}
            {currentStep > 1 ? (
                <button onClick={prevStep} className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-gray-600 hover:bg-gray-200 transition">
                    <ChevronLeft size={20} /> Back
                </button>
            ) : (
                <div></div> // Spacer
            )}

            {/* NEXT / SKIP / SUBMIT BUTTONS */}
            <div className="flex gap-4">
                {currentStep === 1 && (
                    <button onClick={nextStep} className="flex items-center gap-2 px-8 py-3 bg-[#002d4b] text-white rounded-full font-bold hover:bg-[#00406b] transition shadow-lg">
                        Next Step <ChevronRight size={20} />
                    </button>
                )}

                {currentStep === 2 && (
                    <>
                        <button onClick={nextStep} className="flex items-center gap-2 px-6 py-3 text-gray-500 font-bold hover:text-gray-700 hover:bg-gray-200 rounded-full transition">
                            Skip <SkipForward size={18} />
                        </button>
                        <button onClick={nextStep} className="flex items-center gap-2 px-8 py-3 bg-[#002d4b] text-white rounded-full font-bold hover:bg-[#00406b] transition shadow-lg">
                            Next Step <ChevronRight size={20} />
                        </button>
                    </>
                )}

                {currentStep === 3 && (
                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className={`flex items-center gap-2 px-10 py-3 rounded-full font-bold text-white shadow-lg transition ${submitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#f26522] hover:bg-[#d95315]"}`}
                    >
                        {submitting ? "Submitting..." : "Submit Application"}
                    </button>
                )}
            </div>

        </div>

      </motion.div>
    </section>
  );
}

// ---------------- REUSABLE INPUT COMPONENT ---------------- //
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
