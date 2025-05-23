import React from 'react'

const VisionAndMision = () => {
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
      color: '#000000', // Black font color for heading
      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
    };
   
    const subheadingStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'left',
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
          Vision And Mission
          </h1>

          <h1 style={subheadingStyle}>
          Vision :
          </h1>
  
          <p style={paragraphStyle}>
          The Department of Civil Engineering aims to be a leading center for infrastructure
           development, sustainable engineering, and technological advancement. 
           Our objective is to provide students with comprehensive technical knowledge,
            strong problem-solving skills, and a commitment to sustainability,
             preparing them to contribute to societal and industrial progress.
          </p>
               
          <h1 style={subheadingStyle}>
          Mission :
          </h1>
          <p style={paragraphStyle}>
          We are dedicated to delivering high-quality education and practical training
           in areas such as structural engineering, geotechnical engineering, 
           transportation, and environmental sustainability. Our focus is on research
            and development in smart cities, eco-friendly buildings, and disaster-resistant 
            structures, equipping students to tackle modern engineering challenges. 
            Through industry collaboration, internships, and real-world projects,
             we ensure that students gain practical experience, enhancing their 
             employability and entrepreneurial abilities. Ethical engineering practices, 
             environmental responsibility, and leadership development are key pillars of 
             our program, fostering professionals who contribute to sustainable infrastructure 
             and innovation.
          </p>
          
          </div>
      </div>
    );
  };

export default VisionAndMision
