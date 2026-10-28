'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface SubMuseum {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface Artifact {
  title: string;
  category: string;
  image: string;
}

export default function MuhammadGallery() {
  const heroImages = [
    "/images/hero-1-muhammad-gallery (1).jpeg",
    "/images/hero-1-muhammad-gallery (2).jpeg",
    "/images/hero-1-muhammad-gallery (3).jpeg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const subMuseums: SubMuseum[] = [
    {
      title: "Islamic Art",
      subtitle: "Islamic Art & Sacred Heritage",
      image: "/images/muhammadgallery.jpeg",
      link: "/museums/muhammadgallery/islamicart"
    },
    {
      title: "Sasanian Art",
      subtitle: "Persian Antiquities & Artifacts",
      image: "/images/zahidbutkashmirmusuemtrust.jpeg",
      link: "/museums/muhammadgallery/sasanianart"
    },
    {
      title: "Bacterian Art",
      subtitle: "Ancient Greco-Bactrian Relics",
      image: "/images/Mohenjo-daro-Museum.jpeg",
      link: "/museums/muhammadgallery/bacterienart"
    }
  ];

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen pb-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#7b2323] transition-colors">Home</Link>
          <span>›</span>
          <Link href="/museums" className="hover:text-[#7b2323] transition-colors">Museums</Link>
          <span>›</span>
          <span className="text-[#7b2323] font-semibold">Muhammad Gallery</span>
        </nav>

        {/* Hero Banner Slider using <img> tag so it doesn't zoom/crop awkwardly */}
        <div className="w-full h-124 md:h-80 rounded-xl overflow-hidden shadow-sm mb-6 relative bg-black">
          {heroImages.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt="Hero Slide"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-1' : 'opacity-0 z-0'
              }`}
            />
          ))}

          {/* Gradient Overlay & Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4 md:p-6 z-10">
            <div>
              <span className="text-amber-200 text-[10px] md:text-xs uppercase tracking-widest font-medium">
                Sobia Mahal Collections
              </span>
              <h1 className="text-xl md:text-3xl font-serif font-bold text-white mt-0.5">
                Muhammad Gallery
              </h1>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center gap-1.5 mb-1">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide 
                      ? 'w-5 h-1.5 bg-[#d4af37]' 
                      : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sub-Pages / Categories Section */}
        <div className="mb-8">
          <div className="text-center max-w-xl mx-auto mb-4">
            <h2 className="text-xl font-serif font-bold text-[#4a1515]">
              Explore Gallery Collections
            </h2>
            <p className="text-xs text-gray-600 mt-0.5">
              Select a sub-gallery to view specific historical periods and rare artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subMuseums.map((sub, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md border border-amber-100 overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="h-32 w-full overflow-hidden relative">
                    <img 
                      src={sub.image} 
                      alt={sub.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[9px] uppercase font-bold text-[#a67c52] tracking-wider">
                      Sub Collection
                    </span>
                    <h3 className="font-serif font-bold text-gray-900 text-base mt-0.5 mb-1">
                      {sub.title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                      {sub.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={sub.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#7b2323] hover:text-[#9c2d2d] uppercase tracking-wider transition-colors"
                  >
                    View Collection →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox / Image Preview Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-2xl w-full max-h-[80vh] bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 text-white text-xl font-bold bg-black/50 w-7 h-7 rounded-full flex items-center justify-center hover:bg-black"
              >
                ×
              </button>
              <img src={selectedImage} alt="Enlarged view" className="max-h-[75vh] w-auto object-contain" />
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs font-semibold px-6 py-2.5 rounded-md shadow transition-all uppercase tracking-wider"
          >
            Plan a Visit →
          </Link>
        </div>

      </div>
    </div>
  );
}