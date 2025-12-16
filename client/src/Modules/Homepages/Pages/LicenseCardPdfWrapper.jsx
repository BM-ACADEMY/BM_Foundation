// LicenseCardPdfWrapper.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import API from "../../../api";
import LicenseCardPdf from "./LicenseCardPdf";

export default function LicenseCardPdfWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ----------------------------------------------------
      FETCH LICENSE DETAILS
  ---------------------------------------------------- */
  useEffect(() => {
    if (!id) {
      toast.error("Invalid license ID");
      navigate(-1);
      return;
    }

    let active = true;

    const fetchLicense = async () => {
      try {
        const res = await API.get(`/license/license/${id}/`);
        if (active) {
          setLicense(res.data);
        }
      } catch (err) {
        console.error("License fetch error:", err);
        if (active) {
          toast.error("Failed to load license details");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchLicense();

    return () => {
      active = false;
    };
  }, [id, navigate]);

  /* ----------------------------------------------------
      LOADING STATE
  ---------------------------------------------------- */
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-600">
        <p className="text-lg font-medium">
          Loading license details...
        </p>
      </div>
    );
  }

  /* ----------------------------------------------------
      NOT FOUND STATE
  ---------------------------------------------------- */
  if (!license) {
    return (
      <div className="p-10 text-center text-red-600">
        <p className="text-lg font-semibold">
          License not found
        </p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  /* ----------------------------------------------------
      MAIN VIEW
  ---------------------------------------------------- */
  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-md"
      >
        ← Back
      </button>

      <LicenseCardPdf license={license} />
    </div>
  );
}
