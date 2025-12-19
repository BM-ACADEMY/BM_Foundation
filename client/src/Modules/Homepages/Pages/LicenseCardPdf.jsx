import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import { Download, CheckCircle } from "lucide-react";
import API from "../../../api";

// Import your logo here
import logo from "../../../assets/Foundation/bmf_logo.png";
import bmfseal from "../../../assets/Foundation/bmfseal.png";
export default function LicenseCardPdf({ license }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // --- 1. IMAGE LOADING HELPER ---
  const waitForImages = async (element) => {
    const images = element.querySelectorAll("img");
    await Promise.all(
      Array.from(images).map(
        (img) =>
          img.complete ||
          new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );
  };

  // --- 2. PDF GENERATION (Updated for Transparency & Sharpness) ---
  const generatePdf = async () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [650, 420],
    });

    /* FRONT */
    await waitForImages(frontRef.current);
    const frontCanvas = await html2canvas(frontRef.current, {
      scale: 3, // Higher scale for sharper text/logos
      useCORS: true,
      backgroundColor: null, // Critical for transparency
      logging: false,
    });
    // Changed to PNG to preserve transparency and prevent JPEG artifacts
    pdf.addImage(frontCanvas.toDataURL("image/png"), "PNG", 0, 0, 650, 420);

    /* BACK */
    pdf.addPage();
    await waitForImages(backRef.current);
    const backCanvas = await html2canvas(backRef.current, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });
    pdf.addImage(backCanvas.toDataURL("image/png"), "PNG", 0, 0, 650, 420);

    return pdf;
  };

  // --- 3. ACTIONS ---
  const downloadPdf = async () => {
    try {
      const pdf = await generatePdf();
      pdf.save(`BM_ID_${license.full_name || "MEMBER"}.pdf`);
      toast.success("PDF Downloaded successfully!");
    } catch (err) {
      console.error(err);
      toast.error("PDF generation failed");
    }
  };

  const approveAndUpload = async () => {
    try {
      setLoading(true);
      const pdf = await generatePdf();
      const blob = pdf.output("blob");

      const formData = new FormData();
      formData.append("pdf_file", blob, `BM_ID_${license.full_name}.pdf`);

      const res = await API.post(
        `/license/license/${license._id}/upload_pdf/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      toast.success("Approved & Uploaded");
      if (res.data?.whatsapp_link) {
        window.open(res.data.whatsapp_link, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // --- 4. STYLES & ASSETS ---
  const COLORS = {
    primary: "#002d4b",
    accent: "#f26522",
    gold: "#f2bc1c",
    textLabel: "#002d4b",
    textValue: "#1f2937",
  };

  const ASSETS = {
    officialPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
    signature: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg",
  };

  const CONTAINER_STYLE = {
    width: "650px",
    height: "420px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "white",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  };

  // --- 5. FRONT CARD ---
  const FrontCard = () => (
    <div ref={frontRef} style={{ ...CONTAINER_STYLE }}>

      {/* HEADER */}
      <div style={{ height: "90px", backgroundColor: COLORS.primary, display: "flex", alignItems: "center", padding: "0 30px", gap: "20px", borderBottom: `4px solid ${COLORS.accent}` }}>
        {/* Transparent Logo Container (Removed white background circle) */}
        <div style={{ width: "70px", height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} crossOrigin="anonymous"/>
        </div>
        <div>
          <h1 style={{ margin: 0, color: "white", fontSize: "28px", fontWeight: "900", letterSpacing: "1px", textTransform: "uppercase" }}>BM FOUNDATION</h1>
          <p style={{ margin: 0, color: COLORS.gold, fontSize: "14px", fontWeight: "600", letterSpacing: "1px" }}>Volunteer Identity Card</p>
        </div>
      </div>

      {/* BODY */}
      <div style={{ display: "flex", height: "330px", position: "relative" }}>

        {/* Improved Watermark Logic */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 0 }}>
           <img
             src={logo}
             alt="Watermark"
             style={{
               width: "300px",
               opacity: 0.06,
               filter: "grayscale(100%)",
               mixBlendMode: "multiply" // Helps remove any white backgrounds if the PNG isn't perfect
             }}
             crossOrigin="anonymous"
           />
        </div>

        {/* LEFT: Photo & QR */}
        <div style={{ width: "30%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10, paddingLeft: "20px" }}>
            <div style={{ width: "130px", height: "150px", border: `2px solid ${COLORS.primary}`, padding: "2px", backgroundColor: "white", marginBottom: "15px", borderRadius: "4px" }}>
              <img
                src={license.photo}
                alt="Volunteer"
                crossOrigin="anonymous"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ width: "70px", height: "70px" }}>
              <img
                 src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BM-${license._id}`}
                 alt="QR"
                 crossOrigin="anonymous"
                 style={{ width: "100%", height: "100%" }}
              />
            </div>
        </div>

        {/* MIDDLE: Details */}
        <div style={{ width: "45%", height: "100%", padding: "25px 0 0 10px", zIndex: 10, display: "flex", flexDirection: "column" }}>
            <h2 style={{ color: COLORS.accent, textAlign: "center", fontSize: "18px", fontWeight: "bold", margin: "0 0 25px 0", textTransform: "uppercase" }}>Official Volunteer</h2>

            <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", rowGap: "14px", fontSize: "15px" }}>
               <span style={{ color: COLORS.textLabel, fontWeight: "bold" }}>Name</span>
               <span style={{ color: COLORS.textValue, fontWeight: "600", textTransform: "uppercase" }}>{license.full_name || "N/A"}</span>

               <span style={{ color: COLORS.textLabel, fontWeight: "bold" }}>Designation</span>
               <span style={{ color: COLORS.textValue, fontWeight: "500", textTransform: "capitalize" }}>{license.role || "Social Worker"}</span>

               <span style={{ color: COLORS.textLabel, fontWeight: "bold" }}>Phone</span>
               <span style={{ color: COLORS.textValue, fontWeight: "500" }}>{license.phone || "N/A"}</span>

               <span style={{ color: COLORS.textLabel, fontWeight: "bold" }}>Ward/Area</span>
               <span style={{ color: COLORS.textValue, fontWeight: "500", lineHeight: "1.2" }}>{license.ward_number || license.address || "N/A"}</span>
            </div>

            {/* ✅ RIGHT SIDE SEAL */}
        <div
          style={{
            position: "absolute",
            right: "30px",
            bottom: "20px",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <img
            src={bmfseal}
            alt="BM Foundation Seal"
            style={{
              width: "70px",
              height: "70px",
              objectFit: "contain",
              opacity: 0.85,
            }}
          />
          <div style={{ fontSize: "9px", color: "#666" }}>
            Official Seal
          </div>
        </div>
        </div>

        {/* RIGHT: Official Image */}


      </div>
    </div>
  );

  // --- 6. BACK CARD ---
  // --- 6. BACK CARD (BM BRANDING) ---
const BackCard = () => (
  <div ref={backRef} style={{ ...CONTAINER_STYLE }}>
    {/* Header */}
    <div style={{ height: "60px", backgroundColor: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: `4px solid ${COLORS.accent}`, position: "relative", zIndex: 10 }}>
       <h2 style={{ color: "white", fontSize: "16px", textTransform: "uppercase", letterSpacing: "2px", fontWeight: "bold" }}>Emergency Details</h2>
    </div>

    {/* BODY CONTAINER */}
    <div style={{ padding: "30px", display: "flex", gap: "30px", height: "calc(100% - 60px)", position: "relative" }}>

       {/* --- ADDED WATERMARK FOR BACK SIDE --- */}
       <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", zIndex: 0 }}>
          <img
            src={logo}
            alt="Watermark"
            style={{
              width: "280px",
              opacity: 0.05,
              filter: "grayscale(100%)",
              mixBlendMode: "multiply"
            }}
            crossOrigin="anonymous"
          />
       </div>

       {/* Left Side (Z-index added to stay above watermark) */}
       <div style={{ flex: 1, borderRight: "2px solid #f3f4f6", paddingRight: "20px", zIndex: 10 }}>
          <div style={{ marginBottom: "20px" }}>
             <p style={{ margin: "0 0 4px 0", fontSize: "11px", textTransform: "uppercase", color: "#9ca3af", fontWeight: "bold" }}>Emergency Contact</p>
             <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold", color: "#1f2937" }}>{license.emergency_contact_name || "Not Provided"}</p>
          </div>

          <div style={{ marginBottom: "20px" }}>
             <p style={{ margin: "0 0 4px 0", fontSize: "11px", textTransform: "uppercase", color: "#9ca3af", fontWeight: "bold" }}>Contact Number</p>
             <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: COLORS.accent }}>{license.emergency_contact_phone || "N/A"}</p>
          </div>

          <div>
             <p style={{ margin: "0 0 4px 0", fontSize: "11px", textTransform: "uppercase", color: "#9ca3af", fontWeight: "bold" }}>Blood Group</p>
             <span style={{ display: "inline-block", background: "#ef4444", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: "bold" }}>
                {license.blood_group || "O+"}
             </span>
          </div>
       </div>

       {/* Right Side (Z-index added) */}
       <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 10 }}>
          <div>
             <h3 style={{ color: COLORS.primary, fontSize: "14px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "bold" }}>Terms & Conditions</h3>
             <ul style={{ paddingLeft: "15px", margin: 0, fontSize: "11px", color: "#4b5563", lineHeight: "1.6" }}>
                <li>This card is the property of BM Foundation.</li>
                <li>Misuse of this card will result in legal action.</li>
                <li>"Serving Humanity" is our motto.</li>
             </ul>
          </div>

          <div style={{ textAlign: "center", borderTop: "1px solid #f3f4f6", paddingTop: "15px" }}>
              <p style={{ fontSize: "12px", color: COLORS.primary, fontWeight: "bold", margin: 0 }}>www.bmfoundation.org</p>
          </div>
       </div>
    </div>

    {/* Footer Strip */}
    <div style={{ height: "12px", background: COLORS.accent, position: "absolute", bottom: 0, width: "100%", zIndex: 10 }}></div>
  </div>
);

  return (
    <div className="flex flex-col items-center gap-8 py-10 bg-gray-100 min-h-screen">
      <div className="flex flex-col xl:flex-row gap-8 items-center transform scale-90 sm:scale-100">
        <div className="shadow-2xl hover:scale-[1.01] transition-transform duration-300">
          <FrontCard />
        </div>
        <div className="shadow-2xl hover:scale-[1.01] transition-transform duration-300">
          <BackCard />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={downloadPdf}
          disabled={loading}
          className="flex items-center gap-2 px-8 py-3 bg-[#002d4b] hover:bg-[#001f33] text-white rounded-full font-bold shadow-lg transition-all active:scale-95"
        >
          <Download size={20} />
          Download PDF
        </button>

        <button
          onClick={approveAndUpload}
          disabled={loading}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#f26522] hover:bg-[#d95315]"
          }`}
        >
          {loading ? (
             <span className="animate-pulse">Processing...</span>
          ) : (
             <>
               <CheckCircle size={20} /> Approve & Send WhatsApp
             </>
          )}
        </button>
      </div>
    </div>
  );
}
