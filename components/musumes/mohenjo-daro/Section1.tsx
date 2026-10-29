import React from 'react';
import Link from 'next/link';

export default function MohenjodaroMuseum() {
  const artifacts = [
    "/images/collections/stone-art.jpg",
    "/images/collections/wooden-art.jpg",
    "/images/Gemini_Generated_Image_mfgo14mfgo14mfgo.jpg",
    "/images/collections/decorative.jpg",
  ];

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-[#7b2323]">Home</Link>
          <span>›</span>
          <Link href="/museums" className="hover:text-[#7b2323]">Museums</Link>
          <span>›</span>
          <span className="text-[#a33a74] font-semibold">Mohenjo-daro Museum</span>
        </nav>

        {/* Hero Image */}
        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md mb-8">
          <img 
            src="/images/Gemini_Generated_Image_mfgo14mfgo14mfgo.jpg" 
            alt="Mohenjo-daro Museum" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#a33a74] mb-2">
            Mohenjo-daro Museum
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Unearthing the ancient Indus Valley Civilization with rare seals, pottery, and structural artifacts.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center items-center gap-4 border-b border-amber-200/80 mb-8 pb-3 text-xs md:text-sm font-semibold text-gray-600">
          <button className="text-[#a33a74] border-b-2 border-[#7b2323] pb-3 -mb-3 font-bold">Overview</button>
          <button className="hover:text-[#a33a74] transition-colors">Highlights</button>
          <button className="hover:text-[#a33a74] transition-colors">Gallery</button>
          <button className="hover:text-[#a33a74] transition-colors">Visitor Info</button>
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {artifacts.map((img, idx) => (
            <div key={idx} className="h-40 rounded-xl overflow-hidden border border-amber-100 shadow-sm">
              <img src={img} alt={`Artifact ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-[#a33a74] hover:bg-[#a33a98] text-white text-xs font-semibold px-8 py-3 rounded-md shadow transition-all"
          >
            Plan a Visit →
          </Link>
        </div>

      </div>
    </div>
  );
}