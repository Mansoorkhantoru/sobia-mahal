'use client';

import React from 'react';
import Link from 'next/link';

export default function OurStoryPage() {
  return (
    <div className="w-full bg-[#fbf9f5] min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[#7b2323] transition-colors">Home</Link>
          <span>›</span>
          <Link href="/about" className="hover:text-[#7b2323] transition-colors">About</Link>
          <span>›</span>
          <span className="text-[#a33a74] font-semibold">Our Story</span>
        </nav>

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">
            Heritage & Passion
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#a33a74] mt-3 mb-3">
            Our Story
          </h1>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            The inspiring journey of Sobia Mahal, created out of devotion, art, and a lifelong commitment to preserving Islamic and cultural heritage.
          </p>
        </div>

        {/* Story Narrative Box */}
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-amber-100 space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
          
          <div className="border-l-4 border-[#7b2323] pl-4 italic text-gray-700 bg-[#fbf9f5] py-2 rounded-r-md">
            "Sobia Mahal is a sanctuary of art, a sanctuary of spirituality, and a sanctuary of knowledge."
          </div>

          <p>
            Assalam-o-Alaikum.
          </p>

          <p>
            Respected, the way Sobia Mahal began here was out of love for my wife, thinking that I should give her a surprise. So, I suddenly bought a place that was a wilderness. I had a great passion to create something unique, so I named it Sobia Mahal, and we celebrated our anniversary here, which was our Silver Jubilee. In that, we fully surprised her with vibrant colors, and then gradually I started building museums here.
          </p>

          <p>
            First of all, I built the Kashmir Museum, then I built the Muhammad Gallery, where the Holy Qurans are displayed. In the Kashmir Museum, I incorporated metalworks, Kashmiri shawls, Mughal artifacts, and everything else. After that, I started Mohenjo-daro and other similar projects.
          </p>

          <p>
            And now the final stage—two or three tasks are left. One is that I am building a research institute for the public so that our coming generation can benefit from it and gain knowledge about art. Another project is the mausoleum of Ghazi Ilm-ud-Din Shaheed, who was a devoted lover of the Prophet (PBUH). Building his shrine is still pending, which I am also trying to accomplish. So, very simply, this is a sanctuary of art, a sanctuary of spirituality, and a sanctuary of knowledge.
          </p>

          <p>
            So, I invite thoughtful people to come here, benefit from it, and benefit from my knowledge because I am a well-known professor all over the world. I possess a lot of knowledge that I want to share with you. And now, gradually, I have inclined towards spirituality, so I also request accomplished people to add to my knowledge, consult with me, and talk to me. Very simple is that these are the final days of my life, and Almighty Allah has bestowed upon me this status that He made me fall in love with the Holy Qurans. I have the best collection in the world of the Holy Quran, Dala'il al-Khayrat, and rare Islamic books. Alhamdulillah, Alhamdulillah, this journey is ongoing. And I have turned this entire palace into a trust; it is for the public, not for my family.
          </p>

          <p>
            So, this is for the Islamic Ummah, for thoughtful people, and especially for the people of Pakistan. Come and see it, and it is progressing day by day as people are arriving in droves. Especially, I invite students to come and see, and benefit from me regarding art, history, and Islam. Every person in this universe is priceless; I keep learning something continuously, and whatever knowledge I have, I share it. This is the story of Sobia Mahal.
          </p>

          {/* Dialogue Section */}
          <div className="mt-8 pt-6 border-t border-amber-100 space-y-4 bg-amber-50/50 p-5 rounded-xl">
            <div>
              <span className="font-bold text-[#7b2323] text-xs uppercase block mb-1">Visitor / Interviewer:</span>
              <p className="text-gray-700 italic">
                "Well, thank you, Masha'Allah, Butt Sahib. You have dedicated a very precious part of your life for the nation. Because we can hardly believe that this entire palace, this entry, this Islamic gallery, and the collection of our Mohenjo-daro civilization—when we saw all of this, we couldn't believe that a single person could accomplish it."
              </p>
            </div>

            <div>
              <span className="font-bold text-[#4a1515] text-xs uppercase block mb-1">Prof. Butt Sahib:</span>
              <p className="text-gray-800 font-medium">
                "That is true. Alhamdulillah, Alhamdulillah."
              </p>
            </div>

            <div>
              <span className="font-bold text-[#7b2323] text-xs uppercase block mb-1">Visitor / Interviewer:</span>
              <p className="text-gray-700 italic">
                "Please also tell us about... you mentioned earlier that you have also donated many things."
              </p>
            </div>

            <div>
              <span className="font-bold text-[#4a1515] text-xs uppercase block mb-1">Prof. Butt Sahib:</span>
              <p className="text-gray-800">
                "Yes, my brother, at this stage of my life, I realized that I should donate these things. So I started by establishing an entire museum at the National Book Foundation, and then I donated Holy Qurans to the Badshahi Mosque because a lot of people visit there. Then I donated to Lok Virsa, and then I donated in Mirpur, Kashmir. So this journey is continuous. Even in Kashmir, I built the 'Kashmiri Baithak' and donated to it. Alhamdulillah, this journey is ongoing, and I have further intentions to donate to government departments wherever possible. Especially, I wish to gift a portion of Kashmiri items in Lahore so that people there can also benefit from it. So this is my story."
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/museums"
            className="inline-flex items-center gap-2 bg-[#a33a74] hover:bg-[#a33a98] text-white text-xs font-semibold px-6 py-3 rounded-md shadow transition-all uppercase tracking-wider"
          >
            Explore Our Galleries →
          </Link>
        </div>

      </div>
    </div>
  );
}