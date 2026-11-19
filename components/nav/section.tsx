"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const RTL_LANGS = new Set(["ur", "ar", "fa", "he", "ps", "sd", "ug", "yi"]);

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ur", label: "اردو" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "ar", label: "العربية" },
  { code: "zh-CN", label: "中文" },
  { code: "zh-TW", label: "繁體" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
  { code: "ru", label: "RU" },
  { code: "it", label: "IT" },
  { code: "tr", label: "TR" },
  { code: "hi", label: "हिन्दी" },
  { code: "bn", label: "বাংলা" },
  { code: "fa", label: "فارسی" },
  { code: "ps", label: "پښتو" },
  { code: "sd", label: "سنڌي" },
  { code: "id", label: "ID" },
  { code: "ms", label: "MS" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "VI" },
  { code: "nl", label: "NL" },
  { code: "pl", label: "PL" },
  { code: "sv", label: "SV" },
  { code: "uk", label: "UK" },
  { code: "el", label: "EL" },
  { code: "he", label: "עברית" },
  { code: "sw", label: "SW" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Museums", href: "/museums" },
    { name: "Collections", href: "/collections" },
    { name: "Shop", href: "/shop" },
    { name: "Visit", href: "/visit" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const applyDirection = (langCode: string) => {
    const baseLang = langCode.split("-")[0].toLowerCase();
    document.documentElement.dir = RTL_LANGS.has(baseLang) ? "rtl" : "ltr";
    document.documentElement.lang = langCode;
  };

  const clearGoogTransCookie = () => {
    const hostname = window.location.hostname;
    const parts = hostname.split(".");

    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;

    if (parts.length > 1) {
      const parentDomain = "." + parts.slice(-2).join(".");
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${parentDomain};`;
    }
  };

  useEffect(() => {
    // Har load/refresh par default English rakhne ke liye purani cookie clear karein
    clearGoogTransCookie();
    setSelectedLang("en");
    applyDirection("en");

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    if (langCode === "en") {
      clearGoogTransCookie();
      applyDirection("en");
      window.location.reload();
      return;
    }

    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    applyDirection(langCode);

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
    <nav className="w-full bg-white border-b border-amber-100 sticky top-0 z-50 shadow-sm">
      {/* Hidden Google Translate Container & Script */}
      <div id="google_translate_element" className="hidden" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* 1. LOGO & BRAND */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#a33a74] text-amber-300 flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:scale-105 transition-transform overflow-hidden shrink-0">
              <img src="/logo/logo.webp" alt="Sobia Mahal Logo" />
            </div>
            <div>
              <h1 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-wide whitespace-nowrap">
                SOBIA MAHAL
              </h1>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#a67c52] font-semibold whitespace-nowrap">
                HERITAGE • MUSEUMS • CULTURE
              </p>
            </div>
          </Link>

          {/* 2. DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-gray-700 hover:text-[#a33a74] transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-0 after:h-[2px] after:bg-[#a33a74] hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. RIGHT SIDE: COMPACT LANGUAGE, SEARCH & CTA BUTTON */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <select
              aria-label="Select Language"
              value={selectedLang}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="notranslate w-24 text-xs xl:text-sm font-medium text-gray-700 bg-amber-50/60 border border-amber-200 rounded-md px-2 py-1.5 cursor-pointer hover:border-[#a33a74] focus:outline-none focus:border-[#a33a74]"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>

            <button
              aria-label="Search"
              className="p-2 text-gray-600 hover:text-[#7b2323] transition-colors rounded-full hover:bg-gray-100 shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                />
              </svg>
            </button>

            <Link
              href="/visit"
              className="bg-[#a33a74] hover:bg-[#a33a98] text-white text-xs xl:text-sm font-semibold px-4 py-2.5 rounded-md shadow-md transition-all hover:shadow-lg whitespace-nowrap shrink-0"
            >
              Plan a Visit
            </Link>
          </div>

          {/* 4. MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-md text-gray-700 hover:text-[#7b2323] hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 5. MOBILE SIDEBAR / MENU DRAWER */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          />
          <aside className="lg:hidden fixed top-0 end-0 h-full w-72 max-w-[85vw] bg-white border-s border-gray-200 z-50 p-5 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                <span className="font-serif text-lg font-bold text-gray-900">
                  SOBIA MAHAL
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Menu"
                  className="p-1.5 rounded-md text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm font-medium text-gray-800 hover:text-[#7b2323] hover:bg-amber-50 px-3 py-2 rounded-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-gray-100 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                  Language
                </label>
                <select
                  aria-label="Select Language Mobile"
                  value={selectedLang}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="notranslate w-full text-sm font-medium text-gray-700 bg-amber-50/60 border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:border-[#a33a74]"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>

              <Link
                href="/visit"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#7b2323] hover:bg-[#a33a74] text-white text-sm font-semibold py-2.5 rounded-md shadow-sm transition-colors"
              >
                Plan a Visit
              </Link>
            </div>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;