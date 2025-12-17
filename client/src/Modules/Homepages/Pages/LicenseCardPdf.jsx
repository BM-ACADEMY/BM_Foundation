import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import { Download, CheckCircle, Share2 } from "lucide-react";
import API from "../../../api";

// Import your logo here
import logo from "../../../assets/banner/BM_FOUNDATION _logo.png";

export default function LicenseCardPdf({ license }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /* --------------------------------------------------
     1. WAIT FOR IMAGES TO LOAD (CRITICAL)
  -------------------------------------------------- */
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

  /* --------------------------------------------------
     2. PDF GENERATION (FRONT + BACK)
  -------------------------------------------------- */
  const generatePdf = async () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [650, 420], // Matches card dimensions
    });

    /* ---------- FRONT ---------- */
    await waitForImages(frontRef.current);
    const frontCanvas = await html2canvas(frontRef.current, {
      scale: 2, // High resolution
      useCORS: true,
      backgroundColor: null,
    });

    pdf.addImage(frontCanvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0, 650, 420);

    /* ---------- BACK ---------- */
    pdf.addPage();
    await waitForImages(backRef.current);
    const backCanvas = await html2canvas(backRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    pdf.addImage(backCanvas.toDataURL("image/jpeg", 1.0), "JPEG", 0, 0, 650, 420);

    return pdf;
  };

  /* --------------------------------------------------
     3. ACTIONS (DOWNLOAD & UPLOAD)
  -------------------------------------------------- */
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

      toast.success("Approved & Uploaded to Server");
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

  /* --------------------------------------------------
     4. CARD STYLES (INLINE FOR HTML2CANVAS SAFETY)
  -------------------------------------------------- */

  // Standard ID Card Size Ratio
  const CONTAINER_STYLE = {
    width: "650px",
    height: "420px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  };

  /* --------------------------------------------------
     5. FRONT COMPONENT
  -------------------------------------------------- */
  const FrontCard = () => (
    <div ref={frontRef} style={{ ...CONTAINER_STYLE }}>
      {/* BACKGROUND: Gradient matches Banner */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #b38a11 0%, #1a1a1a 50%, #8b0000 100%)",
        zIndex: 0
      }} />

      {/* TEXTURE OVERLAY */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 20%)",
        zIndex: 1
      }} />

      {/* CONTENT LAYER */}
      <div style={{ position: "relative", zIndex: 10, padding: "30px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "15px" }}>
           <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              {/* Logo Circle */}
              <div style={{ width: "50px", height: "50px", background: "white", borderRadius: "50%", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <img src={logo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div>
                 <h2 style={{ margin: 0, color: "white", fontSize: "24px", fontWeight: "900", textTransform: "uppercase", letterSpacing: "1px" }}>BM Foundation</h2>
                 <p style={{ margin: 0, color: "#f2bc1c", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>Volunteer Identity Card</p>
              </div>
           </div>
           {/* Chip Graphic (Visual Only) */}
           <div style={{ width: "45px", height: "35px", background: "linear-gradient(to bottom right, #eab308, #ca8a04)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)" }}></div>
        </div>

        {/* MAIN BODY */}
        <div style={{ display: "flex", gap: "30px", marginTop: "10px" }}>

            {/* PHOTO */}
            <div style={{ width: "140px", height: "170px", flexShrink: 0, position: "relative" }}>
               <img
                 src={license.photo}
                 alt="User"
                 crossOrigin="anonymous"
                 style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px", border: "3px solid #fcfcfc" }}
               />
               <div style={{
                  position: "absolute", bottom: "-10px", left: "50%", transform: "translateX(-50%)",
                  background: "#f26522", color: "white", padding: "4px 12px", borderRadius: "12px",
                  fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", whiteSpace: "nowrap"
               }}>
                  Active
               </div>
            </div>

            {/* DETAILS */}
            <div style={{ flex: 1, color: "white" }}>
                <h3 style={{ margin: "0 0 4px 0", fontSize: "28px", fontWeight: "bold", color: "#fff" }}>
                  {license.full_name || "Volunteer Name"}
                </h3>
                <p style={{ margin: "0 0 20px 0", color: "#e5e5e5", fontSize: "14px" }}>
                  {license.role || "Social Worker / Volunteer"}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
                   <div>
                      <p style={{ margin: 0, color: "#f2bc1c", fontSize: "10px", textTransform: "uppercase" }}>ID Number</p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: "600", fontFamily: "monospace" }}>{license._id ? license._id.slice(-6).toUpperCase() : "000000"}</p>
                   </div>
                   <div>
                      <p style={{ margin: 0, color: "#f2bc1c", fontSize: "10px", textTransform: "uppercase" }}>Ward / Area</p>
                      <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>{license.ward_number || "N/A"}</p>
                   </div>
                   <div>
                      <p style={{ margin: 0, color: "#f2bc1c", fontSize: "10px", textTransform: "uppercase" }}>Phone</p>
                      <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>{license.phone || "N/A"}</p>
                   </div>
                   <div>
                      <p style={{ margin: 0, color: "#f2bc1c", fontSize: "10px", textTransform: "uppercase" }}>Valid Until</p>
                      <p style={{ margin: 0, fontSize: "14px", fontWeight: "600" }}>Dec 2026</p>
                   </div>
                </div>
            </div>
        </div>

        {/* FOOTER STRIP */}
        <div style={{ marginTop: "auto", paddingTop: "10px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "end" }}>
           <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>
             Authorized Signature: <span style={{ fontFamily: "cursive", fontSize: "14px", color: "white", marginLeft: "5px" }}>BM_Admin</span>
           </p>
           <p style={{ margin: 0, fontSize: "10px", color: "#f26522", fontWeight: "bold", letterSpacing: "1px" }}>
             SERVING HUMANITY
           </p>
        </div>
      </div>
    </div>
  );

  /* --------------------------------------------------
     6. BACK COMPONENT
  -------------------------------------------------- */
  const BackCard = () => (
    <div ref={backRef} style={{ ...CONTAINER_STYLE, background: "#002d4b", color: "white" }}>
      {/* DECORATIVE ELEMENTS */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "8px", background: "linear-gradient(90deg, #f26522, #f2bc1c)" }}></div>
      <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "200px", height: "200px", background: "rgba(255,255,255,0.05)", borderRadius: "50%" }}></div>

      <div style={{ padding: "40px", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>

        <h2 style={{ textAlign: "center", fontSize: "18px", textTransform: "uppercase", letterSpacing: "2px", color: "#f2bc1c", marginBottom: "30px" }}>
           Emergency & Verification
        </h2>

        <div style={{ display: "flex", gap: "40px" }}>
           {/* LEFT COLUMN: Emergency Info */}
           <div style={{ flex: 1 }}>
              <div style={{ marginBottom: "20px" }}>
                 <p style={{ margin: "0 0 5px 0", fontSize: "10px", textTransform: "uppercase", color: "#9ca3af" }}>Emergency Contact</p>
                 <p style={{ margin: 0, fontSize: "16px", fontWeight: "bold" }}>{license.emergency_contact_name || "-"}</p>
                 <p style={{ margin: 0, fontSize: "14px", color: "#f26522" }}>{license.emergency_contact_phone || "-"}</p>
              </div>

              <div style={{ marginBottom: "20px" }}>
                 <p style={{ margin: "0 0 5px 0", fontSize: "10px", textTransform: "uppercase", color: "#9ca3af" }}>Blood Group</p>
                 <div style={{ display: "inline-block", background: "#ef4444", color: "white", fontWeight: "bold", padding: "4px 10px", borderRadius: "4px" }}>
                    {license.blood_group || "O+ve"}
                 </div>
              </div>

              <div>
                 <p style={{ margin: "0 0 5px 0", fontSize: "10px", textTransform: "uppercase", color: "#9ca3af" }}>Interests</p>
                 <p style={{ margin: 0, fontSize: "12px", lineHeight: "1.4", color: "#e5e5e5" }}>
                    {Array.isArray(license.areas_of_interest) ? license.areas_of_interest.join(", ") : license.areas_of_interest || "-"}
                 </p>
              </div>
           </div>

           {/* RIGHT COLUMN: Terms & QR (Simulated) */}
           <div style={{ flex: 1, borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                 <p style={{ fontSize: "10px", color: "#9ca3af", marginBottom: "10px", lineHeight: "1.5" }}>
                   This card is the property of BM Foundation. If found, please return to the address below or contact support.
                 </p>
                 <p style={{ fontSize: "11px", fontStyle: "italic", color: "white" }}>
                   "Namma ooru-ku, oru nalla vishayam unga kaiyaal start pannalaam!"
                 </p>
              </div>

              {/* QR PLACEHOLDER */}
              <div style={{ alignSelf: "center", width: "80px", height: "80px", background: "white", padding: "5px", marginTop: "auto" }}>
                 <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BMFOUNDATION-${license._id}`}
                    alt="QR"
                    style={{ width: "100%", height: "100%" }}
                 />
              </div>
           </div>
        </div>

        <p style={{ marginTop: "auto", textAlign: "center", fontSize: "10px", color: "#6b7280" }}>
           www.bmfoundation.org | support@bmfoundation.org
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-8 py-10 bg-gray-100 min-h-screen">

      {/* 1. VISUAL PREVIEW OF CARDS */}
      <div className="flex flex-col xl:flex-row gap-8 items-center transform scale-90 sm:scale-100">
        <div className="shadow-2xl transition-transform hover:scale-[1.02] duration-300">
          <FrontCard />
        </div>
        <div className="shadow-2xl transition-transform hover:scale-[1.02] duration-300">
          <BackCard />
        </div>
      </div>

      {/* 2. ACTION BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={downloadPdf}
          disabled={loading}
          className="flex items-center gap-2 px-8 py-3 bg-[#f26522] hover:bg-[#d95315] text-white rounded-full font-bold shadow-lg transition-all active:scale-95"
        >
          <Download size={20} />
          Download PDF
        </button>

        <button
          onClick={approveAndUpload}
          disabled={loading}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95 text-white ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#002d4b] hover:bg-[#00406b]"
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

      <p className="text-gray-500 text-sm mt-4">
        * Approve to save the PDF to server and send to user via WhatsApp.
      </p>
    </div>
  );
}
