import React from 'react'

const ProgramSpecificOutcomes = () => {
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

    const listHeadingStyle = {
        fontSize: '1rem',
        fontWeight: 'bold',
       
        marginBottom: '1.5rem',
        color: '#000000', // Black font color for heading
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
      };
  
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>
          Program Specific Outcomes
          </h1>

          <h1 style={subheadingStyle}>
          At the end of the program
          </h1>
  
          <ul style={listStyle}>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PSO1:</span>  Graduates will have adequate knowledge of computer engineering domain to become employable in
            Industry.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PSO2:</span> Graduate will have strong fundamentals and problem solving skills to analyze, design and develop
            economically feasible solutions for technical and social problems.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PSO3:</span> Graduate will be aware of recent research trends, higher education and entrepreneurial opportunities, and
            will work ethically towards society.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PSO4:</span> Graduate will be aware about the latest technology in software and hardware.
            </li>
            <li style={listItemStyle}>
            <span style={listHeadingStyle}>PSO5:</span> Graduate will be exposed to industrial training giving hands on experience.
            </li>
           
          </ul>
          </div>
      </div>
    );
  };

export default ProgramSpecificOutcomes
