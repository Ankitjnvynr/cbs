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
      The Department of Computer Applications aspires to be a center of excellence in computing education, research, and innovation. We aim to empower students with strong technical knowledge in software development, data science, artificial intelligence, and emerging technologies, enabling them to contribute meaningfully to the IT industry and society.
      </p>
           
      <h1 style={subheadingStyle}>
      Mission :
      </h1>
      <p style={paragraphStyle}>
      Our mission is to provide high-quality education that integrates theoretical learning with practical experience, ensuring students are equipped to meet industry demands. We emphasize problem-solving, analytical thinking, and creativity, covering areas such as programming, database management, cybersecurity, and cloud computing. Through industry partnerships, internships, and project-based learning, we enhance students’ technical skills, employability, and entrepreneurial abilities. Ethical values, teamwork, and a commitment to innovation-driven solutions remain central to our approach. By fostering a culture of lifelong
       learning and professional excellence, we aim to develop skilled IT professionals who lead technological advancements and digital transformation.
      </p>
      </div>
  </div>
  )
}

export default VisionMission