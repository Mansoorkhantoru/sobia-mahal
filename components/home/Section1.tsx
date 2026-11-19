'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Section1() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Cursor movement track karne ke liye function
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Cursor bahar jane par wapas center mein lane ke liye
  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Museum data for the bottom marquee row
  const museums = [
    {
      title: "Mohenjo-daro Museum",
      subtitle: "Ancient Civilizations",
      image: "/images/Mohenjo-daro-Museum.jpeg",
      link: "/museums/mohenjo-daro"
    },
    {
      title: "Zahid Butt Kashmir Museum",
      subtitle: "Rare Antiquities",
      image: "/images/zahidbutkashmirmusuemtrust.jpeg",
      link: "/museums/zahid-pervez-butt"
    },
    {
      title: "The Prophet Muhammad (S.A.W) Gallery",
      subtitle: "Islamic Art & Heritage",
      image: "/images/muhammadgallery.jpeg",
      link: "/museums/muhammadgallery"
    },
    {
      title: "The Holy Quran Display",
      subtitle: "Regional Culture",
      image: "/images/qurandisplay.jpeg",
      link: "/museums/quran-display"
    },
  ];

  // Seamless infinite loop ke liye array duplicate kiya hai
  const marqueeItems = [...museums, ...museums];

  return (
    <div className="w-full bg-[#fbf9f5] pb-16">
      
      {/* 1. HERO SECTION */}
      <section 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[550px] md:h-[650px] flex items-center justify-start overflow-hidden group/hero"
      >
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-700 ease-out group-hover/hero:scale-110"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/Gemini_Generated_Image_msr4otmsr4otmsr4.jpg')`,
            transform: `scale(1.05) translate(${-mousePos.x}px, ${-mousePos.y}px)`
          }}
        />

        {/* Subtle Ambient Light Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 z-0 pointer-events-none" />

        {/* Hero Content */}
        <div 
          className="relative z-10 text-left text-white px-6 md:px-16 lg:px-24 max-w-4xl mt-[-40px] transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
          }}
        >
          <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-amber-200 mb-3 block transition-all duration-500 group-hover/hero:tracking-[0.32em] group-hover/hero:text-amber-300">
            A WORLD OF HERITAGE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-4 text-amber-50 transition-transform duration-500 group-hover/hero:translate-x-1">
            SOBIA MAHAL
          </h1>
          <p className="text-sm md:text-lg text-gray-200 tracking-wider mb-8 font-light max-w-2xl transition-opacity duration-500 group-hover/hero:text-white">
            DISCOVER HISTORY. EXPERIENCE CULTURE. EXPLORE RARE ANTIQUES.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/museums"
              className="bg-[#a33a74] hover:bg-[#8c2f62] text-white px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2 group"
            >
              Explore Museums 
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="/visit"
              className="bg-[#e4eace] hover:bg-[#d8d2b5] text-gray-900 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 group"
            >
              Plan a Visit 
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-6 md:left-16 lg:left-24 z-10 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer hover:bg-white transition-all"></span>
          <span className="w-6 h-2.5 rounded-full bg-[#d4af37]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer hover:bg-white transition-all"></span>
        </div>
      </section>

      {/* 2. MUSEUMS MARQUEE SECTION */}
      <section
        dir="ltr"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-70px] relative z-20"
      >
        <div className="overflow-hidden py-4 marquee-wrapper">
          <div className="flex flex-row gap-6 w-max animate-marquee">
            {marqueeItems.map((museum, index) => (
              <div 
                key={index} 
                className="w-[280px] sm:w-[300px] shrink-0 bg-white rounded-xl shadow-md overflow-hidden border border-amber-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              >
                {/* Card Image */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={museum.image} 
                    alt={museum.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#a67c52] text-xs font-semibold">🏛️</span>
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-base mb-1 group-hover:text-[#7b2323] transition-colors duration-200">
                    {museum.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-4">
                    {museum.subtitle}
                  </p>
                  <Link
                    href={museum.link}
                    className="text-xs font-bold text-[#7b2323] hover:text-[#5a1919] inline-flex items-center gap-1.5 uppercase tracking-wider group/link"
                  >
                    <span>Explore</span>
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Keyframes & Hover Pause */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}