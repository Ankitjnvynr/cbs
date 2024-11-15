import React from 'react';

function SeminarGuesture() {
  const containerStyle = {
    // backgroundColor: '#0D47A1', // Dark blue background
    color: '#ffffff',
    padding: '2rem 0',
    textAlign: 'center',
    background: 'linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)',
  };

  const contentStyle = {
    backgroundColor: '#ffffff',
    color: '#333333',
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const breadcrumbStyle = {
    color: '#ffffff',
    fontSize: '0.875rem',
    marginBottom: '1rem',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <h1 style={headerStyle}>Seminars & Guest Lectures</h1><div style={breadcrumbStyle}>HOME &nbsp; &gt; &nbsp; INDUSTRIAL VISITS</div>
        <div style={contentStyle}>
          <img
            src="/images/seminar.jpg" // Placeholder image URL; replace with your actual image
            alt="Industrial Visit"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
          From time to time, eminent industry and corporate doyens are invited as guest lecturers or as resource persons for various seminars & workshops. They share their valuable experiences and during the question-answer session they interact freely with inquisitive students, adding to their know-how and broadening their perspective.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SeminarGuesture;
