import React from 'react'

const About = () => {
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
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>
          About CSE 
          </h1>
  
          <p style={paragraphStyle}>
          The Computer Science and Engineering (CSE) branch is one of the most dynamic 
          and in-demand fields in engineering, focusing on the principles of computing,
           software development, and system architecture. It integrates both theoretical
            and practical aspects of computer science to create innovative technological
             solutions. Students in this discipline gain a deep understanding of programming
              languages, data structures, algorithms, operating systems, database management,
               and computer networks. Additionally, emerging fields like artificial intelligence,
                machine learning, cloud computing, and cybersecurity are also an essential
                 part of the curriculum, preparing students for the ever-evolving technology 
                 landscape.
          </p>

          </div>
      </div>
    );
  };

export default About
