'use client';
import React, { useState } from 'react';

// TypeScript interface for image object
interface ImageData {
  id: number;
  url: string;
  title: string;
}

const Section1: React.FC = () => {
  // 18 se 22 tak images generate karne ke liye array
  const images: ImageData[] = Array.from({ length: 22 - 18 + 1 }, (_, index) => {
    const imageNumber = 18 + index;
    return {
      id: imageNumber,
      url: `/images/sasanianart/images (${imageNumber}).jpg`,
      title: `Sasanian Art ${imageNumber}`
    };
  });

  // State to track clicked image for large view (Modal)
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{
        textAlign: 'center', fontSize: '35px'
      }}>SASANIAN ART</h1>
      
      {/* Images Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '16px',
        marginTop: '20px' 
      }}>
        {images.map((img) => (
          <div 
            key={img.id} 
            onClick={() => setSelectedImage(img)} // Click karne par image bari ho jayegi
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px', 
              textAlign: 'center',
              cursor: 'pointer', // Mouse pointer hand icon ban jayega
              transition: 'transform 0.2s'
            }}
          >
            <img 
              src={img.url} 
              alt={img.title} 
              style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '4px', padding: '10px' }} 
            />
            <p style={{ marginTop: '8px', fontSize: '14px' }}>{img.title}</p>
          </div>
        ))}
      </div>

      {/* Modal / Large Image Overlay */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)} // Background par click karne se modal band ho jayega
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
        >
          <div 
            style={{ 
              position: 'relative', 
              maxWidth: '90%', 
              maxHeight: '90%',
              textAlign: 'center' 
            }}
            onClick={(e) => e.stopPropagation()} // Image ke andar click karne se modal band nahi hoga
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '80vh', 
                objectFit: 'contain', 
                borderRadius: '8px',
                border: '2px solid white'
              }} 
            />
            <h3 style={{ color: 'white', marginTop: '10px' }}>{selectedImage.title}</h3>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;