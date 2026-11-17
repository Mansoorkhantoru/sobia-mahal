'use client';
import React from 'react';

interface ImageData {
  id: number;
  url: string;
  title: string;
}

const Section1: React.FC = () => {
  // 1 se 80 tak images generate karne ke liye array
  const images: ImageData[] = Array.from({ length: 80 }, (_, index) => {
    const imageNumber = 1 + index;
    return {
      id: imageNumber,
      url: `/images/islmicart/images (${imageNumber}).jpeg`,
      title: `Islamic Art ${imageNumber}`
    };
  });

  // WhatsApp par direct redirect karne ka function
  const handleWhatsAppBuy = (img: ImageData) => {
    const phoneNumber = "923275781404"; 
    const message = encodeURIComponent(`Hello, main yeh Islamic Art product khareedna chahta hoon:\n\nProduct ID: ${img.id}\nImage Link: ${window.location.origin}${img.url}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '35px' }}>ISLAMIC ART</h1>
      
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
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px', 
              textAlign: 'center',
              backgroundColor: '#fff'
            }}
          >
            {/* Image wrapper taake zoom hone par image card se bahar na nikle */}
            <div style={{ overflow: 'hidden', borderRadius: '4px', margin: '5px' }}>
              <img 
                src={img.url} 
                alt={img.title} 
                style={{ 
                  width: '100%', 
                  height: '280px', 
                  objectFit: 'cover', 
                  display: 'block',
                  transition: 'transform 0.35s ease',
                  cursor: 'pointer'
                }} 
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.28)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.28)')}
              />
            </div>
            
            {/* Title ki jagah WhatsApp Button / Icon */}
            <button 
              onClick={() => handleWhatsAppBuy(img)}
              style={{
                marginTop: '12px',
                width: '100%',
                padding: '10px',
                backgroundColor: '#25D366',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1ebe57')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
            >
              {/* WhatsApp SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.068 7.925c0 1.399.366 2.76 1.057 3.965L0 16l4.223-1.106a7.859 7.859 0 0 0 3.772.96h.004c4.363 0 7.926-3.558 7.926-7.93 0-2.11-.822-4.092-2.324-5.6-3.09-3.09-8.094-3.09-11.185 0z"/>
              </svg>
              Buy on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;