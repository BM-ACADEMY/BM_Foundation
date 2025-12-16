import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
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
    full_name: "",
    age: "",
    gender: "",
    ward_number: "",
    phone: "",
    email: "",
    address: "",
    photo: null,
    areas_of_interest: [],
    availability: "",
    previous_experience: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    heard_from: "",
    signature: "",
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [phoneAvailable, setPhoneAvailable] = useState(null);
  const [checking, setChecking] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  /* ---------------- PHONE CHECK ---------------- */
  const checkPhone = async (phone) => {
    if (phone.length !== 10) return;

    setChecking(true);
    try {
      const res = await axios.get(
        `${API_BASE_URL}/license/license/check_phone/`,
        { params: { phone } }
      );
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

  /* ---------------- UI ---------------- */
  return (
    <div className="flex justify-center py-16 px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* HEADER */}
        <div className="flex items-center gap-4 p-6 bg-[#f26522]">
          <img src={logo} className="w-14 h-14 object-contain bg-white rounded-full p-1" />
          <div className="text-white">
            <h1 className="text-2xl font-bold">
              Volunteer Registration
            </h1>
            <p className="text-sm opacity-90">
              BM Foundation – உறுப்பினர் பதிவு
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className="input" name="full_name" placeholder="Full Name *" onChange={handleChange} />
          <input className="input" name="age" type="number" placeholder="Age" onChange={handleChange} />

          <select className="input" name="gender" onChange={handleChange}>
            <option value="">Gender *</option>
            <option value="male">Male (ஆண்)</option>
            <option value="female">Female (பெண்)</option>
            <option value="other">Other</option>
          </select>

          <input className="input" name="ward_number" placeholder="Ward Number *" onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone *" onChange={handleChange} />
          <input className="input" name="email" placeholder="Email (optional)" onChange={handleChange} />

          <textarea className="input md:col-span-2" name="address" placeholder="Full Address *" rows={3} onChange={handleChange} />

          {/* AREAS */}
          <div className="md:col-span-2">
            <p className="font-semibold text-slate-800 mb-3">
              Areas of Interest
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INTERESTS.map((i) => (
                <label
                  key={i.key}
                  className="flex items-center gap-3 p-3 border rounded-lg hover:border-[#f26522]"
                >
                  <input
                    type="checkbox"
                    name="areas_of_interest"
                    value={i.label}
                    onChange={handleChange}
                    className="accent-[#f26522]"
                  />
                  <span className="text-sm">{i.label}</span>
                </label>
              ))}
            </div>
          </div>

          <input className="input" name="availability" placeholder="Available days / time" onChange={handleChange} />
          <textarea className="input" name="previous_experience" placeholder="Previous volunteering experience" rows={3} onChange={handleChange} />
          <input className="input" name="emergency_contact_name" placeholder="Emergency Contact Name" onChange={handleChange} />
          <input className="input" name="emergency_contact_phone" placeholder="Emergency Contact Phone" onChange={handleChange} />
          <input className="input" name="heard_from" placeholder="How did you hear about us?" onChange={handleChange} />
          <input className="input" name="signature" placeholder="Signature (type your name)" onChange={handleChange} />

          <input
            type="file"
            name="photo"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleChange}
            className="md:col-span-2"
          />
        </div>

        {/* SUBMIT */}
        <div className="p-8 text-center">
          <button
            disabled={submitting || checking}
            className="bg-[#f26522] hover:bg-[#d4541a] text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg transition"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>

      {/* Tailwind input helper */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.95rem;
        }
        .input:focus {
          outline: none;
          border-color: #f26522;
          box-shadow: 0 0 0 2px rgba(242, 101, 34, 0.15);
        }
      `}</style>
    </div>
  );
}
