import React from 'react';
import Link from 'next/link';

export default function VisitAndToursPage() {
  const tourTypes = [
    {
      title: "Individual Visit",
      icon: "🏛️",
      description: "Self-guided walk through all four unique museum collections."
    },
    {
      title: "Group Tours",
      icon: "👥",
      description: "Special guided experience tailored for family & large groups."
    },
    {
      title: "Educational Tours",
      icon: "🎓",
      description: "Curated learning paths for schools, colleges & universities."
    },
    {
      title: "Lecture Hall",
      icon: "🏛️",
      description: "Academic sessions, seminars, and historic research talks."
    }
  ];

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen pb-16">
      
      {/* 1. Hero Image Banner */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <img 
          src="/images/Gemini_Generated_Image_msr4otmsr4otmsr4.jpg" 
          alt="Sobia Mahal Visit" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-50">
              Plan Your Visit
            </h1>
            <p className="text-xs md:text-sm text-amber-200 mt-2 tracking-widest uppercase">
              Experience history, culture and heritage in person.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* 2. Tour Types Grid (4 Icon Cards Row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {tourTypes.map((tour, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-5 border border-amber-100 shadow-sm text-center hover:border-[#7b2323] hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#7b2323]/5 text-[#7b2323] flex items-center justify-center text-2xl mb-3 group-hover:bg-[#7b2323] group-hover:text-white transition-all">
                {tour.icon}
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-sm mb-1">
                {tour.title}
              </h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                {tour.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Visitor Information & Side Image Section */}
        <div className="bg-white rounded-2xl border border-amber-100 shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 md:p-8">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4a1515]">
                Visitor Information
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Essential details to help plan your visit to Sobia Mahal.
              </p>
            </div>

            <ul className="space-y-3 text-xs md:text-sm text-gray-700 font-light">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7b2323]"></span>
                <span><strong>Timings:</strong> Open Tuesday – Sunday (10:00 AM – 6:00 PM)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7b2323]"></span>
                <span><strong>How to Reach:</strong> Accessible via main city transport and private vehicle parking.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7b2323]"></span>
                <span><strong>Facilities:</strong> Prayer area, photography zones, souvenir shop & cafeteria.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7b2323]"></span>
                <span><strong>Guided Tours:</strong> Available on prior request for individuals and groups.</span>
              </li>
            </ul>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs font-semibold px-6 py-3 rounded-md shadow transition-all"
              >
                Send an Enquiry →
              </Link>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="md:col-span-5 h-64 md:h-80 rounded-xl overflow-hidden relative border border-amber-200/60">
            <img 
              src="/images/wedding-hall.jpg" 
              alt="Sobia Mahal Entrance & Architecture" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}