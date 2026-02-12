import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic (العربية)" },
    { code: "hi", label: "Hindi (हिन्दी)" },
    { code: "ta", label: "Tamil (தமிழ்)" },
    { code: "bn", label: "Bengali (বাংলা)" },
    { code: "fr", label: "French (Français)" },
    { code: "de", label: "German (Deutsch)" },
    { code: "es", label: "Spanish (Español)" },
    { code: "zh-CN", label: "Chinese (简体中文)" },
    { code: "ja", label: "Japanese (日本語)" },
    { code: "ko", label: "Korean (한국어)" },
    { code: "ru", label: "Russian (Русский)" },
    { code: "pt", label: "Portuguese (Português)" },
    { code: "it", label: "Italian (Italiano)" },
    { code: "nl", label: "Dutch (Nederlands)" },
    { code: "tr", label: "Turkish (Türkçe)" },
  ];

  useEffect(() => {
    // 1. Clear Cookies to force English on load
    const domain = window.location.hostname;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;

    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      if (document.getElementById("google_translate_element")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((lang) => lang.code).join(","),
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
          },
          "google_translate_element"
        );
      }
    };

    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.id = "google_translate_script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const handleLanguageChange = (e) => {
    const langCode = e.target.value;
    setSelectedLanguage(langCode);

    if (langCode === "en") {
      const domain = window.location.hostname;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
      window.location.reload();
    } else {
      const googleCombo = document.querySelector(".goog-te-combo");
      if (googleCombo) {
        googleCombo.value = langCode;
        googleCombo.dispatchEvent(new Event("change"));
      }
    }
  };

  return (
    <div className="relative flex items-center bg-white border border-slate-200 rounded-md px-2 py-1 shadow-sm hover:shadow-md transition-all">
      <FaGlobe className="text-[#00224D] text-lg shrink-0 pointer-events-none" />

      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="notranslate appearance-none bg-transparent border-none text-sm font-semibold text-[#00224D] px-2 py-1 focus:outline-none cursor-pointer w-full"
        style={{ 
             WebkitAppearance: "none", 
             MozAppearance: "none",
             minWidth: "120px"
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none text-[#00224D] text-xs">▼</div>

      {/* --- THE TRICK: Move it OFF-SCREEN but keep it 'visible' to code --- */}
      <div
        id="google_translate_element"
        className="absolute overflow-hidden"
        style={{ 
            width: "1px", 
            height: "1px", 
            position: "absolute", 
            top: "-9999px", // Moves it way up off the screen
            left: "-9999px" 
        }}
      ></div>

      {/* --- STRICT CSS TO HIDE TOP BAR --- */}
      <style>{`
        /* 1. Hide the Google Top Bar (Banner) */
        .goog-te-banner-frame {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd {
            display: none !important;
            visibility: hidden !important;
        }
        .VIpgJd-yAWNEb-hvhgNd{
            display: none !important;
            visibility: hidden !important;
        }
         

        
        /* 2. Reset Body Top (Google adds 40px) */
        body { 
            top: 0px !important; 
            position: static !important;
        }

        /* 3. Hide the Google Tooltip */
        .goog-tooltip {
            display: none !important;
        }
        .goog-text-highlight {
            background-color: transparent !important;
            box-shadow: none !important;
        }

        /* 4. Hide Google's Footer Logo */
        .goog-logo-link {
            display: none !important;
        }
        .goog-te-gadget {
            height: 0 !important;
            overflow: hidden !important;
        }
      `
      }</style>
    </div>
  );
};

export default GoogleTranslate;