import React from 'react';

const VisionAndMission = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    backgroundImage: "url('https://source.unsplash.com/random/?education,building')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    borderRadius: '1.5rem',
    padding: '2rem',
    width: '100%',
    maxWidth: '900px',
    fontFamily: 'Arial, sans-serif',
    color: '#000000', // Black font color for contrast
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#000000',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: '1.5rem',
    color: '#000000',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: '#000000',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Vision and Mission</h1>

        <h2 style={subheadingStyle}>Vision:</h2>
        <p style={paragraphStyle}>
          The Department of Electronics and Communication Engineering aims to be a leader 
          in electronics, communication, and embedded systems education. By fostering innovation, 
          research, and technological advancements, we strive to equip students with expertise 
          in electronic systems, signal processing, and wireless communication, empowering them 
          to contribute to industry and global technological progress.
        </p>

        <h2 style={subheadingStyle}>Mission:</h2>
        <p style={paragraphStyle}>
          Our mission is to provide high-quality education, promote research and development, 
          and cultivate a spirit of innovation among students. We are committed to producing 
          technically proficient and ethically responsible engineers who can excel in their careers 
          and contribute to societal progress through continuous learning and leadership.
        </p>
      </div>
    </div>
  );
};

export default VisionAndMission;
