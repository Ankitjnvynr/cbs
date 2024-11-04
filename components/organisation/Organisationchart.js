// src/components/Organisationchart.js

import React from 'react';

function Organisationchart() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9', // Optional: light background
  };

  const imageStyle = {
    maxWidth: '100%',   // Ensure the image scales within the parent container
    height: 'auto',     // Maintain aspect ratio
    objectFit: 'contain', // Prevent cropping of the image
    border: '1px solid #ddd', // Optional: light border around the image
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
  };

  return (
    <div style={containerStyle}>
      <img 
        src="/images/BOG-3.jpg"  // Path to the image inside public folder
        alt="Organization Chart" 
        style={imageStyle} 
      />
    </div>
  );
}

export default Organisationchart;
