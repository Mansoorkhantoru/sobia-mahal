'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CollectionItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function CollectionsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Categories list for top filter/jump bar
  const categories = [
    { name: "Ceramics", id: "ceramics" },
    { name: "Calligraphy", id: "calligraphy" },
    { name: "Metalwork", id: "metalwork" },
    { name: "Manuscripts", id: "manuscripts" },
    { name: "Weapons", id: "weapons" },
    { name: "Jewelry", id: "jewelry" },
    { name: "Wooden Art", id: "wooden-art" },
    { name: "Stone Art", id: "stone-art" },
    { name: "Decorative Objects", id: "decorative-objects" },
  ];

  // Products / Items Data categorized
  const collectionsData: CollectionItem[] = [
    { id: "ceramics", title: "Ancient Ceramic Vase", category: "Ceramics", image: "/images/collections/ceramics-1.jpg", description: "Hand-painted historical pottery artifact." },
    { id: "calligraphy", title: "Royal Islamic Calligraphy", category: "Calligraphy", image: "/images/collections/calligraphy.jpg", description: "Exquisite hand-written gold leaf script." },
    { id: "metalwork", title: "Ottoman Brass & Copper Craft", category: "Metalwork", image: "/images/collections/metalwork.jpg", description: "Intricately carved traditional metal vessel." },
    { id: "manuscripts", title: "Historic Illuminated Texts", category: "Manuscripts", image: "/images/collections/manuscripts.jpg", description: "Rare historical document pages preserved safely." },
    { id: "weapons", title: "Antique Ceremonial Sword", category: "Weapons", image: "/images/collections/weapons.jpg", description: "Traditional hilt-crafted heritage blade." },
    { id: "jewelry", title: "Royal Gemstone Necklace", category: "Jewelry", image: "/images/collections/jewelry.jpg", description: "Handcrafted vintage ornamental jewelry." },
    { id: "wooden-art", title: "Carved Wooden Panel", category: "Wooden Art", image: "/images/collections/wooden.jpg", description: "Detailed geometric architecture woodwork." },
    { id: "stone-art", title: "Carved Stone Relic", category: "Stone Art", image: "/images/collections/stone.jpg", description: "Ancient sculptural relief artwork." },
    { id: "decorative-objects", title: "Vintage Royal Artifact", category: "Decorative Objects", image: "/images/collections/decorative.jpg", description: "Ornate royal display collectible." },
  ];

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#7b2323] transition-colors">Home</Link>
          <span>›</span>
          <span className="text-[#a33a74] font-semibold">Collections</span>
        </nav>

        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#a33a74] mb-2">
            Sobia Mahal Collections
          </h1>
          <p className="text-xs md:text-sm text-gray-600">
            Explore our curated historical categories. Click any category below to jump straight to its collection.
          </p>
        </div>

        {/* Sticky Category Jump Bar */}
        <div className="sticky top-4 z-30 bg-[#fbf9f5]/90 backdrop-blur-md py-3 border-y border-amber-200/60 mb-10 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max px-2 justify-start sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-amber-200 text-gray-700 hover:bg-[#a33a74] hover:text-white transition-all shadow-sm"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Collections Sections */}
        <div className="space-y-12">
          {categories.map((cat) => {
            // Filter items for this category (or show placeholder card if empty)
            const categoryItems = collectionsData.filter(item => item.id === cat.id);

            return (
              <div key={cat.id} id={cat.id} className="scroll-mt-24 pt-4">
                <div className="flex items-center gap-3 mb-4 border-b border-amber-200 pb-2">
                  <h2 className="text-xl font-serif font-bold text-[#a33a74]">
                    {cat.name}
                  </h2>
                  <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-medium">
                    Gallery Section
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {categoryItems.length > 0 ? (
                    categoryItems.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedImage(item.image)}
                        className="group bg-white rounded-xl overflow-hidden border border-amber-100 shadow-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between"
                      >
                        <div className="h-48 w-full overflow-hidden relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <span className="text-[10px] uppercase font-bold text-[#a67c52] tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="font-serif font-bold text-gray-900 text-sm mt-0.5 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-xs line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Fallback sample card if specific image isn't added yet
                    <div 
                      onClick={() => setSelectedImage("/images/muhammadgallery.jpeg")}
                      className="group bg-white rounded-xl overflow-hidden border border-amber-100 shadow-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="h-48 w-full overflow-hidden relative">
                        <img
                          src="/images/muhammadgallery.jpeg"
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] uppercase font-bold text-[#a67c52] tracking-wider">
                          {cat.name}
                        </span>
                        <h3 className="font-serif font-bold text-gray-900 text-sm mt-0.5 mb-1">
                          Featured {cat.name} Relic
                        </h3>
                        <p className="text-gray-500 text-xs">
                          Explore exquisite historical pieces from our {cat.name.toLowerCase()} archive.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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

      </div>
    </div>
  );
}