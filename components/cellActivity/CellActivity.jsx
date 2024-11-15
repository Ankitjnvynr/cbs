import React from 'react';

function CellActivity() {
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
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    color: '#4a5568',
    lineHeight: '1.75',
    marginBottom: '1rem',
  };

  const listStyle = {
    color: '#4a5568',
    lineHeight: '1.75',
    paddingLeft: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Activities</h1>
        <p style={paragraphStyle}>
          <strong>CBS Group of Institutions</strong> has a fully functional dynamic Placement Cell to ensure that the students have a promising career opportunities. Apart from organizing placement rounds for the Regular Companies visiting the campus, the Placement Cell has numerous functionalities which are listed as follows:
        </p>
        <ul style={listStyle}>
          <li>Visits to various companies.</li>
          <li>Visits by the corporate captains in the campus of CBS Group of Institutions.</li>
          <li>MNC big wigs to the institute campus for seminars and conferences.</li>
          <li>Creation of Alumni association, meetings, and get-togethers.</li>
          <li>Creation of placement brochure of <strong>CBS Group of Institutions</strong>.</li>
          <li>Maintenance of Institute website.</li>
          <li>Creation of Data bank of various placements per session.</li>
        </ul>
      </div>
    </div>
  );
}

export default CellActivity;
