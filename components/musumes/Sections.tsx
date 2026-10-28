import React from 'react';
import Link from 'next/link';

export default function MuseumsPage() {
  const museumsList = [
    {
      title: "Mohenjo-daro Museum",
      subtitle: "Ancient Civilizations",
      image: "/images/Mohenjo-daro-Museum.jpeg",
      link: "/museums/mohenjo-daro"
    },
    {
      title: "Zahid Pervez Butt Kashmir Museum",
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
    <div className="w-full bg-[#fbf9f5] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#4a1515] mb-3">
            Our Museums
          </h1>
          <p className="text-sm md:text-base text-gray-600 tracking-wide">
            Four Unique Journeys Through History
          </p>
        </div>

        {/* Museums Grid (2 columns on large screens as shown in design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {museumsList.map((museum, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-amber-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              {/* Museum Image */}
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img 
                  src={museum.image} 
                  alt={museum.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="font-serif font-bold text-gray-900 text-xl mb-1">
                  {museum.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  {museum.subtitle}
                </p>
                <Link
                  href={museum.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7b2323] hover:text-[#9c2d2d] uppercase tracking-wider"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}