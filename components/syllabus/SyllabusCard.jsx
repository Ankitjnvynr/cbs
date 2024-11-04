import React from 'react';

const SyllabusCard = ({ courseName, type, rating, size, downloads, icon, downloadLink }) => {
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '20px',
    width: '250px',
    height: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transition on hover
    animation: 'fadeIn 1s ease-in-out', // Fade-in animation on load
  };

  const buttonStyle = {
    backgroundColor: '#4299E1',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background-color 0.3s', // Smooth transition for hover
  };

  return (
    <div
      style={cardStyle}
      className="syllabus-card"
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{type}</span>
        <span
          style={{
            backgroundColor: '#C6F6D5',
            padding: '5px 10px',
            borderRadius: '20px',
            fontSize: '12px',
          }}
        >
          Free
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img src={icon} alt={`${courseName} icon`} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1A202C' }}>{courseName}</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#4A5568' }}>
        <div>
          <strong>Rating</strong>
          <div>{rating}</div>
        </div>
        <div>
          <strong>Size</strong>
          <div>{size}</div>
        </div>
        <div>
          <strong>Downloads</strong>
          <div>{downloads}</div>
        </div>
      </div>

      <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
      >
        Download Syllabus
      </a>
    </div>
  );
};

export default SyllabusCard;
