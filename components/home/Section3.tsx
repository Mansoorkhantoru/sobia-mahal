"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function VideoGallery() {
  const [activeTab, setActiveTab] = useState("All Videos");

  const tabs = ["All Videos", "Museum Tours", "Documentaries", "Events", "Shorts / Reels"];

  const videos = [
    {
      title: "Sobia Mahal Introduction",
      duration: "2:35",
      thumbnail: "/images/videos/intro.jpg",
      category: "Museum Tours",
    },
    {
      title: "Islamic Gallery Tour",
      duration: "4:12",
      thumbnail: "/images/videos/islamic-tour.jpg",
      category: "Museum Tours",
    },
    {
      title: "Rare Artifacts",
      duration: "3:48",
      thumbnail: "/images/videos/artifacts.jpg",
      category: "Documentaries",
    },
    {
      title: "Wedding Hall",
      duration: "2:16",
      thumbnail: "/images/videos/wedding.jpg",
      category: "Events",
    },
    {
      title: "Garden & Views",
      duration: "3:05",
      thumbnail: "/images/videos/garden.jpg",
      category: "Shorts / Reels",
    },
  ];

  const filteredVideos = activeTab === "All Videos" 
    ? videos 
    : videos.filter(v => v.category === activeTab);

  return (
    <section className="w-full bg-[#fbf9f5] py-12 px-4 sm:px-6 lg:px-8 border-t border-amber-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title & View All Button */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#4a1515]">
              Video Gallery
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Take a virtual tour, watch documentaries and explore our latest vlogs.
            </p>
          </div>
          <Link
            href="/gallery"
            className="bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs font-semibold px-5 py-2.5 rounded-md shadow self-start md:self-auto"
          >
            View All Videos →
          </Link>
        </div>

        {/* Filter Tabs Row */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                activeTab === tab
                  ? "bg-[#7b2323] text-white border-[#7b2323] shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-amber-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredVideos.map((video, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              {/* Video Thumbnail with Play Button Overlay */}
              <div className="relative h-36 bg-gray-900 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center group-hover:bg-[#7b2323] group-hover:scale-110 transition-all border border-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-mono px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>

              {/* Video Title */}
              <div className="p-3">
                <h3 className="font-serif font-bold text-xs text-gray-900 group-hover:text-[#7b2323] transition-colors line-clamp-1">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}