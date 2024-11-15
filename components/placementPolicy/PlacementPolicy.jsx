import React from 'react';

function PlacementPolicy() {
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

  const subheadingStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '1rem',
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
        <h1 style={headingStyle}>Our Policies</h1>
        <p style={paragraphStyle}>
          The purpose of the placement policy is to define the overall structure & processes of the placement cell, and to structure the roles & responsibilities of the teams working on this process of the placement cell.
        </p>
        <h2 style={subheadingStyle}>The policy will ensure that-</h2>
        <ul style={listStyle}>
          <li>Maximum number of students get on-campus placement.</li>
          <li>Deserving candidates can have the opportunity to start their career with their preferred company.</li>
          <li>To maintain the quality standards of the jobs offered.</li>
          <li>To ensure that the whole team works according to the defined processes to achieve the common objective.</li>
        </ul>
      </div>
    </div>
  );
}

export default PlacementPolicy;
