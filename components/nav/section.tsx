"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="w-full bg-white border-b border-amber-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. BRAND LOGO & TITLE */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Emblem Icon */}
            <div className="w-10 h-10 rounded-full bg-[#7b2323] text-amber-300 flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:scale-105 transition-transform">
              🏛️
            </div>
            <div>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-gray-900 tracking-wide">
                SOBIA MAHAL
              </h1>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#a67c52] font-semibold">
                HERITAGE • MUSEUMS • CULTURE
              </p>
            </div>
          </Link>

          {/* 2. DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-gray-700 hover:text-[#7b2323] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#7b2323] hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. RIGHT SIDE: SEARCH & CTA BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Icon / Button */}
            <button 
              aria-label="Search"
              className="p-2 text-gray-600 hover:text-[#7b2323] transition-colors rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
              </svg>
            </button>

            {/* Plan a Visit Button */}
            <Link
              href="/visit"
              className="bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs xl:text-sm font-semibold px-5 py-2.5 rounded-md shadow-md transition-all hover:shadow-lg"
            >
              Plan a Visit
            </Link>
          </div>

          {/* 4. MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#7b2323] hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* 5. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-gray-800 hover:text-[#7b2323] hover:bg-amber-50 px-3 py-2 rounded-md"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <Link
              href="/visit"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-[#7b2323] text-white text-sm font-semibold py-2.5 rounded-md shadow-sm"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;