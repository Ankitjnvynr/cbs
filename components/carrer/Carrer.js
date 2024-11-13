'use client'
import React from 'react';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  background: 'linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '1rem',
  padding: '2rem',
  maxWidth: '900px',
  margin: '0 auto',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#2d3748',
  marginBottom: '0.5rem',
};

const paragraphStyle = {
  color: '#4a5568',
  lineHeight: '1.75',
  marginBottom: '1rem',
};

const finalTextStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#2d3748',
  marginTop: '1.5rem',
};

const Carrer = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Faculty and Other Positions</h2>
        <p style={paragraphStyle}>
          Faculty and other positions at the CBS Group of Institutions are advertised in newspapers as well as
          displayed on this website. If you would like to be considered for a faculty position, please fill the online
          application form and attach your updated C.V.
        </p>
        <p style={paragraphStyle}>
          Even if we do not have a position available, your application will be kept on file, and we shall contact you
          as and when a position of your interest becomes available.
        </p>
        <h3 style={{ ...headingStyle, fontSize: '1.5rem', marginBottom: '1rem' }}>Current Opening</h3>
        <p style={paragraphStyle}>
          Currently, at CBS Group of Institutions, there are no openings, but we are accepting resumes from candidates
          for future opportunities. Please post your resume at our resume manager. As soon as we have an opening
          matching your profile, we will contact you.
        </p>
        <p style={finalTextStyle}>We look forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default Carrer;
