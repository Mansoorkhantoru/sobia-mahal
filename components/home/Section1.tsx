import React from 'react';
import Link from 'next/link';

export default function Section1() {
  // Museum data for the bottom cards row
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
      title: "Muhammad Gallery",
      subtitle: "Islamic Art & Heritage",
      image: "/images/muhammadgallery.jpeg",
      link: "/museums/muhammadgallery"
    },
    {
      title: "Quran Display",
      subtitle: "Regional Culture",
      image: "/images/qurandisplay.jpeg",
      link: "/museums/quran-display"
    },
  ];

  return (
    <div className="w-full bg-[#fbf9f5] pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[550px] md:h-[650px] flex items-center justify-start overflow-hidden">
        
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/Gemini_Generated_Image_msr4otmsr4otmsr4.jpg')` 
          }}
        />

        {/* Hero Content (Left-aligned) */}
        <div className="relative z-10 text-left text-white px-6 md:px-16 lg:px-24 max-w-4xl mt-[-40px]">
          <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-amber-200 mb-3 block">
            A WORLD OF HERITAGE
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-4 text-amber-50">
            SOBIA MAHAL
          </h1>
          <p className="text-sm md:text-lg text-gray-200 tracking-wider mb-8 font-light max-w-2xl">
            DISCOVER HISTORY. EXPERIENCE CULTURE. EXPLORE RARE ANTIQUES.
          </p>

          {/* Action Buttons (Left-aligned) */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/museums"
              className="bg-[#7b2323] hover:bg-[#621b1b] text-white px-6 py-3 rounded-md text-sm font-medium transition-all shadow-lg flex items-center gap-2"
            >
              Explore Museums →
            </Link>
            <Link
              href="/visit"
              className="bg-[#d4af37] hover:bg-[#c29e2f] text-gray-900 px-6 py-3 rounded-md text-sm font-semibold transition-all shadow-lg flex items-center gap-2"
            >
              Plan a Visit →
            </Link>
          </div>
        </div>

        {/* Carousel Indicators / Controls */}
        <div className="absolute bottom-6 left-6 md:left-16 lg:left-24 z-10 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer"></span>
          <span className="w-6 h-2.5 rounded-full bg-[#d4af37]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-white/50 cursor-pointer"></span>
        </div>
      </section>

      {/* 2. MUSEUMS CARDS ROW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-70px] relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {museums.map((museum, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
            >
              {/* Card Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={museum.image} 
                  alt={museum.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#a67c52] text-xs font-semibold">🏛️</span>
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-base mb-1">
                  {museum.title}
                </h3>
                <p className="text-gray-500 text-xs mb-4">
                  {museum.subtitle}
                </p>
                <Link
                  href={museum.link}
                  className="text-xs font-bold text-[#7b2323] hover:text-[#9c2d2d] flex items-center gap-1 uppercase tracking-wider"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}