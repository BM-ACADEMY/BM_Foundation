import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "react-toastify";
import API from "../../../api";

export default function LicenseCardPdf({ license }) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [loading, setLoading] = useState(false);

  /* --------------------------------------------------
      WAIT FOR IMAGES TO LOAD (CRITICAL FIX)
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
      PDF GENERATION (FRONT + BACK)
  -------------------------------------------------- */
  const generatePdf = async () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [650, 420],
    });

    /* ---------- FRONT ---------- */
    await waitForImages(frontRef.current);

    const frontCanvas = await html2canvas(frontRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#000",
    });

    pdf.addImage(
      frontCanvas.toDataURL("image/jpeg", 1.0),
      "JPEG",
      0,
      0,
      650,
      420
    );

    /* ---------- BACK ---------- */
    pdf.addPage();
    await waitForImages(backRef.current);

    const backCanvas = await html2canvas(backRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#000",
    });

    pdf.addImage(
      backCanvas.toDataURL("image/jpeg", 1.0),
      "JPEG",
      0,
      0,
      650,
      420
    );

    return pdf;
  };

  /* --------------------------------------------------
      DOWNLOAD PDF
  -------------------------------------------------- */
  const downloadPdf = async () => {
    try {
      const pdf = await generatePdf();
      pdf.save(`BM_VOLUNTEER_${license.full_name || "MEMBER"}.pdf`);
    } catch (err) {
      console.error(err);
      toast.error("PDF generation failed");
    }
  };

  /* --------------------------------------------------
      APPROVE & UPLOAD (415 FIX)
  -------------------------------------------------- */
  const approveAndUpload = async () => {
    try {
      setLoading(true);

      const pdf = await generatePdf();
      const blob = pdf.output("blob");

      const formData = new FormData();
      formData.append(
        "pdf_file",
        blob,
        `BM_VOLUNTEER_${license.full_name || "MEMBER"}.pdf`
      );

      const res = await API.post(
        `/license/license/${license._id}/upload_pdf/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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

  /* --------------------------------------------------
      COMMON STYLES
  -------------------------------------------------- */
  const cardStyle = {
    width: 650,
    height: 420,
    background: "#000",
    color: "#8fff8f",
    fontFamily: "monospace",
    padding: 24,
    border: "2px dashed #8fff8f",
    boxSizing: "border-box",
  };

  /* --------------------------------------------------
      FRONT SIDE
  -------------------------------------------------- */
  const FrontCard = () => (
    <div ref={frontRef} style={cardStyle}>
      <h2 style={{ textAlign: "center" }}>
        BM FOUNDATION VOLUNTEER CARD
      </h2>

      <div style={{ display: "flex", marginTop: 20, gap: 20 }}>
        <div style={{ flex: 1 }}>
          <p>Name: {license.full_name || "-"}</p>
          <p>Volunteer ID: {license._id?.slice(-6)}</p>
          <p>Ward: {license.ward_number || "-"}</p>
          <p>Area: {license.address || "-"}</p>
          <p>Contact: {license.phone || "-"}</p>
          <p>Role: {license.role || "Volunteer"}</p>
          <p>Valid Till: {license.valid_till || "2026"}</p>
        </div>

        <img
          src={license.photo}
          alt="Volunteer"
          crossOrigin="anonymous"
          style={{
            width: 120,
            height: 160,
            objectFit: "cover",
            border: "1px solid #8fff8f",
          }}
        />
      </div>
    </div>
  );

  /* --------------------------------------------------
      BACK SIDE
  -------------------------------------------------- */
  const BackCard = () => (
    <div ref={backRef} style={cardStyle}>
      <h2 style={{ textAlign: "center" }}>
        BM FOUNDATION INFO
      </h2>

      <p>
        Emergency Contact:{" "}
        {license.emergency_contact_name || "-"} –{" "}
        {license.emergency_contact_phone || "-"}
      </p>

      <p>Blood Group: {license.blood_group || "N/A"}</p>

      <p>Areas of Interest:</p>
      <p>
        {Array.isArray(license.areas_of_interest)
          ? license.areas_of_interest.join(", ")
          : license.areas_of_interest || "-"}
      </p>

      <p style={{ marginTop: 20, fontStyle: "italic" }}>
        "Namma ooru-ku, oru nalla vishayam unga kaiyaal start pannalaam!"
      </p>

      <p style={{ marginTop: 20 }}>Signed by: Organiser</p>
      <p>Contact: BM Foundation</p>
    </div>
  );

  return (
    <div>
      <FrontCard />
      <div style={{ height: 20 }} />
      <BackCard />

      <div className="flex gap-4 mt-6">
        <button
          onClick={downloadPdf}
          className="px-5 py-2 bg-red-600 text-white rounded"
        >
          Download PDF
        </button>

        <button
          onClick={approveAndUpload}
          disabled={loading}
          className="px-5 py-2 bg-green-600 text-white rounded"
        >
          {loading ? "Approving..." : "Approve & Upload"}
        </button>
      </div>
    </div>
  );
}
