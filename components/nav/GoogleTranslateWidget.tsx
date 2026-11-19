"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ur", label: "اردو" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
];

export default function GoogleTranslateWidget() {
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ur,ko,ja",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);

    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;

    if (langCode === "ur") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ur";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = langCode;
    }

    const selectEl = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;

    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <select
        aria-label="Select Language"
        value={selectedLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="text-xs xl:text-sm font-medium text-gray-700 bg-amber-50/60 border border-amber-200 rounded-md px-2.5 py-1.5 cursor-pointer hover:border-[#a33a74] focus:outline-none"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </>
  );
}