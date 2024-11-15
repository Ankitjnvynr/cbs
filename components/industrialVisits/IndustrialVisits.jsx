import React from 'react';

function IndustrialVisits() {
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
        <h1 style={headerStyle}>Industrial Visits</h1>
        <div style={breadcrumbStyle}>HOME &nbsp; &gt; &nbsp; INDUSTRIAL VISITS</div>
        <div style={contentStyle}>
          <img
            src="/images/visit.png" // Placeholder image URL; replace with your actual image
            alt="Industrial Visit"
            style={imageStyle}
          />
          <p style={paragraphStyle}>
            Industry visits fill in the gap between the content of study at the institute level and
            the ground reality. They enrich practical knowledge of the students and broaden their
            vision of the corporate world. The Industrial Projects and Visits to different Industrial
            Organizations are arranged from Second year onwards for all the Engineering and Management
            Students, mostly in the months of January and February, or immediately after the completion
            of their course curriculum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndustrialVisits;
