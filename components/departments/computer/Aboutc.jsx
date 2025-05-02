import React from 'react'

const Aboutc = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  //   padding: '1rem',
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
    color: '#000000', // Black font color for heading
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: '#000000', // Black font color for paragraphs
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1rem',
    marginBottom: '1rem',
    lineHeight: '1.75',
  };

  const listItemStyle = {
    marginBottom: '0.75rem',
    color: '#000000', // Black font color for list items
  };
  return (
    <>
    <div style={containerStyle}>
    <div style={cardStyle}>
      <h1 style={headingStyle}>
      About Computer applications 
      </h1>

      <p style={paragraphStyle}>
      Computer Applications is a field of study that focuses on the practical use of computing technology to solve real-world problems. It involves the development, implementation, and management of software applications, databases, and digital systems. Unlike core computer science, which emphasizes theoretical concepts and algorithm 
      development, computer applications focus on applying programming, software development, and system management to various industries.
</p>
      </div>
  </div>
  </>
  )
}

export default Aboutc;