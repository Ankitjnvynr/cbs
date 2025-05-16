import React from 'react'

const VisionMission = () => {
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
      The Department of Management envisions becoming a distinguished center for business education, research, and innovation. Our mission is to develop dynamic leaders, entrepreneurs, and professionals with strategic 
      thinking, problem-solving capabilities, and ethical values, contributing to economic growth and organizational success on a global scale.
      </p>
           
      <h1 style={subheadingStyle}>
      Mission :
      </h1>
      <p style={paragraphStyle}>
      We aim to provide a comprehensive management education that combines theoretical foundations with real-world applications, ensuring students develop strong analytical, leadership, and decision-making abilities. Encouraging research in contemporary business trends, digital transformation, and sustainable business models, we prepare students for dynamic corporate environments. Collaborations with industries, internships, and experiential learning bridge the academia-industry gap, enhancing employability and competitiveness. We also emphasize ethical leadership, corporate responsibility, and sustainable business practices. By fostering 
      adaptability, innovation, and professional excellence, we strive to shape future business leaders who drive economic and societal growth.
      </p>
      </div>
  </div>
  )
}

export default VisionMission