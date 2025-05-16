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
      The Department of Electrical Engineering envisions establishing itself as a center of excellence in electrical sciences, power systems,
       and automation. We aim to drive innovation, research, and industry-focused learning, 
      equipping students with the knowledge and skills required to develop sustainable electrical solutions for societal and industrial needs.
      </p>
           
      <h1 style={subheadingStyle}>
      Mission :
      </h1>
      <p style={paragraphStyle}>
      Our mission is to offer high-quality education that integrates theory with hands-on experience in power systems, control engineering, renewable energy, and smart grid technologies. We emphasize research and development in energy efficiency, electric vehicles, and automation, ensuring students are prepared for real-world challenges. Collaborations with industries and skill development programs bridge the gap between academia and practical applications, enhancing employability and entrepreneurial potential. Additionally, we foster 
      ethical responsibility, sustainability, and leadership qualities to shape professionals who drive national and global technological progress.
      </p>
      </div>
  </div>
  )
}

export default VisionMission