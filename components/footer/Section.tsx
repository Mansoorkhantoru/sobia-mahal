import React from 'react';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedinIn, 
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#621b1b] text-white pt-10 pb-6 border-t border-[#7b2323]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand & Socials Section */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {/* Museum Outline Logo */}
              <div className="w-12 h-12 flex items-center justify-center text-amber-200">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" className="w-10 h-10 stroke-[1.5]">
                  <path d="M32 8 C28 16 20 18 20 26 L44 26 C44 18 36 16 32 8 Z" />
                  <path d="M12 26 L52 26 L52 52 L12 52 Z" />
                  <path d="M22 52 L22 36 A10 10 0 0 1 42 36 L42 52" />
                  <path d="M8 52 L56 52" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold tracking-wider text-amber-50">
                  SOBIA MAHAL
                </h2>
                <p className="text-[10px] sm:text-xs tracking-[0.2em] text-amber-200/80 uppercase">
                  HERITAGE • MUSEUMS • CULTURE • TOURISM
                </p>
              </div>
            </div>

            {/* Social Media Icons Row */}
            <div className="flex items-center gap-2 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-all">
                <FaYoutube />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-all">
                <FaTiktok />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-all">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xs transition-all">
                <FaPinterestP />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-amber-200 mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-200 font-light">
              <li><Link href="/" className="hover:text-amber-300 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-amber-300 transition-colors">About</Link></li>
              <li><Link href="/museums" className="hover:text-amber-300 transition-colors">Museums</Link></li>
              <li><Link href="/collections" className="hover:text-amber-300 transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Visitor Info Column */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-amber-200 mb-3 tracking-wide">
              Visitor Info
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-200 font-light">
              <li><Link href="/plan-visit" className="hover:text-amber-300 transition-colors">Plan a Visit</Link></li>
              <li><Link href="/events" className="hover:text-amber-300 transition-colors">Events</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-300 transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-amber-200 mb-3 tracking-wide">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-xs text-gray-200 font-light">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-amber-300 text-xs shrink-0" />
                <span>+92 3275781404</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-amber-300 text-xs shrink-0" />
                <span>sobiamahal@softwayhub.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-amber-300 text-xs shrink-0" />
                <span>Sobia Mahal, Pakistan</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-300 font-light gap-2">
          <p>© 2026 Sobia Mahal. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <span>|</span>
            <Link href="/visitor-information" className="hover:text-white transition-colors">Visitor Information</Link>
          </div>
        </div>

      </div>

      {/* Organized By Section */}
      <div className="text-center pt-6 mt-6 border-t border-white/10">
        <p className="text-xs text-gray-300">
          Organized by{' '}
          <a 
            href="https://softwayhub.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-amber-200 hover:underline font-medium"
          >
            Softway Hub
          </a>
        </p>
      </div>
    </footer>
  );
}