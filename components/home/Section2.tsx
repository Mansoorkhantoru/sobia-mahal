import React from 'react';
import Link from 'next/link';

export default function OurCollections() {
  const categories = [
    { name: "Ceramics", id: "ceramics", icon: "🏺", image: "/images/Gemini_Generated_Image_qxhgvbqxhgvbqxhg(1).jpg" },
    { name: "Calligraphy", id: "calligraphy", icon: "📜", image: "/images/Gemini_Generated_Image_a4d8yxa4d8yxa4d8.jpg" },
    { name: "Metalwork", id: "metalwork", icon: "🫖", image: "/images/Gemini_Generated_Image_smv43ismv43ismv4.jpg" },
    { name: "Manuscripts", id: "manuscripts", icon: "📖", image: "/images/Gemini_Generated_Image_6rxoee6rxoee6rxo.jpg" },
    { name: "Weapons", id: "weapons", icon: "🗡️", image: "/images/Gemini_Generated_Image_ebajdxebajdxebaj.jpg" },
    { name: "Jewelry", id: "jewelry", icon: "💍", image: "/images/Gemini_Generated_Image_k7vt9ak7vt9ak7vt.jpg" },
    { name: "Wooden Art", id: "wooden-art", icon: "🪵", image: "/images/Gemini_Generated_Image_qxhgvbqxhgvbqxhg(1).jpg" },
    { name: "Stone Art", id: "stone-art", icon: "🗿", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800" },
    { name: "Decorative Objects", id: "decorative-objects", icon: "🏺", image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800" },
  ];

  return (
    <section className="w-full bg-[#fbf9f5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title & View All Button */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-[#4a1515]">
              Our Collections
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Explore thousands of unique antiques from different eras and regions.
            </p>
          </div>
          <Link
            href="/collections"
            className="bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs font-semibold px-5 py-2.5 rounded-md shadow transition-all"
          >
            View All →
          </Link>
        </div>

        {/* Categories List Horizontal Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3 mb-12">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={`/collections#${cat.id}`}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-amber-200/80 shadow-sm flex items-center justify-center text-2xl group-hover:border-[#7b2323] group-hover:scale-105 transition-all overflow-hidden relative">
                {cat.image ? (
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>{cat.icon}</span>
                )}
              </div>
              <span className="text-[11px] font-semibold text-gray-800 mt-2 text-center group-hover:text-[#7b2323]">
                {cat.name}
              </span>
            </Link>
          ))}

          {/* All Categories Icon Card */}
          <Link
            href="/collections"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#7b2323]/5 border border-[#7b2323]/20 flex items-center justify-center text-[#7b2323] font-serif font-bold text-xs group-hover:bg-[#7b2323] group-hover:text-white transition-all">
              🏛️
            </div>
            <span className="text-[11px] font-semibold text-gray-800 mt-2 text-center">
              All Categories
            </span>
          </Link>
        </div>

        {/* Feature Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 flex items-center p-6 md:p-8 bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.2)), url('/images/wedding-hall.jpg')` }}>
            <div className="max-w-md z-10">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1 block">
                🏛️ Wedding Hall & Events
              </span>
              <p className="text-sm text-gray-200 mb-6 leading-relaxed">
                A beautiful, historic setting for memorable occasions.
              </p>
              <Link
                href="/events"
                className="bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2 shadow"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 flex items-center p-6 md:p-8 bg-cover bg-center text-gray-900" style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.92), rgba(255,255,255,0.6)), url('/images/academic-center.jpg')` }}>
            <div className="max-w-md z-10">
              <span className="text-xs uppercase tracking-widest text-[#7b2323] font-bold mb-1 block">
                🎓 Academic Center
              </span>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                Educational programs, research and lecture sessions.
              </p>
              <Link
                href="/about"
                className="bg-[#7b2323] hover:bg-[#621b1b] text-white text-xs font-semibold px-5 py-2.5 rounded-md inline-flex items-center gap-2 shadow"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}