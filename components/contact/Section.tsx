'use client';
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Yahan Formspree ka link lagana hai (apni ID ke sath)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-[#a33a74] tracking-wide">
          CONTACT US
        </h1>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          Have questions about our heritage collections or want to plan a visit? Get in touch with Sobia Mahal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side: Contact Information & Form */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <h2 className="text-2xl font-serif font-semibold text-[#a33a74] mb-6">
            Send Us a Message
          </h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg text-center">
              <p className="font-medium">Thank you! Your message has been sent successfully to Sobia Mahal team.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs underline text-green-800 font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#621b1b] focus:outline-none text-sm text-gray-800"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#621b1b] focus:outline-none text-sm text-gray-800"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#621b1b] focus:outline-none text-sm text-gray-800"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 uppercase mb-1">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#621b1b] focus:outline-none text-sm text-gray-800"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#a33a74] text-white font-medium rounded-lg hover:bg-[#501515] transition-colors flex items-center justify-center gap-2 text-sm shadow-md disabled:opacity-50"
              >
                <FaPaperPlane className="text-xs" /> {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}

          {/* Quick Contact Details */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#a33a74] shrink-0" />
              <span>+92 3275781404</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#a33a74] shrink-0" />
              <span>sobiamahal@softwayhub.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#a33a74] shrink-0" />
              <span>Sobia Mahal, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Right Side: Google Maps Iframe */}
        <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100 flex flex-col">
          <h2 className="text-2xl font-serif font-semibold text-[#a33a74] mb-4 px-2">
            Our Location
          </h2>
          <div className="w-full flex-grow min-h-[400px] rounded-lg overflow-hidden border border-gray-200">
            <iframe 
              src="https://maps.google.com/maps?q=33.7406625,73.2780469&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              title="Sobia Mahal Location Map"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}