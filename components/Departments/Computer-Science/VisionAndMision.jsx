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
          The Department of Computer Science and Engineering strives 
          to be a distinguished center for computing education, 
          research, and innovation. We aim to empower students 
          with cutting-edge technological expertise, critical 
          problem-solving abilities, and a passion for continuous 
          learning. Our goal is to produce professionals who drive 
          digital transformation, contribute to technological advancements,
           and tackle global challenges. We aspire to develop industry leaders, 
           academicians, and entrepreneurs who foster innovation for the 
           progress of society and the nation.
          </p>
               
          <h1 style={subheadingStyle}>
          Mission :
          </h1>
  
          <ul style={listStyle}>
            <li style={listItemStyle}>
            Comprehensive Education: Deliver an industry-relevant curriculum
             that strengthens students' understanding of fundamental and advanced
              computing concepts, preparing them for evolving IT and research landscapes.
            </li>
            <li style={listItemStyle}>
            Innovation & Research: Promote research and development in advanced computing fields and interdisciplinary studies to encourage technological breakthroughs.
            </li>
            <li style={listItemStyle}>
            Skill Development: Enhance students’ programming, critical thinking, and problem-solving abilities through practical exposure, internships, and industry collaborations.
            </li>
            <li style={listItemStyle}>
            Ethical & Social Awareness: Instill ethical values, leadership qualities, teamwork, and a sense of social responsibility, utilizing technology for sustainable progress.
            </li>
            <li style={listItemStyle}>
            Global Readiness: Equip students with both technical and soft skills to help them excel as professionals, entrepreneurs, and thought leaders in the digital age.
            </li>
           
          </ul>
          </div>
      </div>
    );
  };

export default VisionAndMision
