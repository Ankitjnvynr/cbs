import React from 'react'

const VissionMission = () => {
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
        The Department of Mechanical Engineering aspires to be a premier hub for mechanical sciences, research, and technological development. 
        Our mission is to impart a strong foundation in engineering principles while nurturing problem-solving abilities and research skills, 
        enabling students to meet industry and societal needs. We seek to cultivate professionals who develop sustainable and efficient engineering solutions at national and international levels.
        </p>
             
        <h1 style={subheadingStyle}>
        Mission :
        </h1>

        <ul style={listStyle}>
          <li style={listItemStyle}>
          1.	Quality Education: Provide a well-structured academic framework that integrates theoretical knowledge with hands-on practical 
          applications, equipping students for successful careers in mechanical engineering.
          </li>
          <li style={listItemStyle}>
          2.	Research & Innovation: Foster research and advancements in automation, manufacturing, renewable energy, and mechanical systems to address real-world engineering challenges
          </li>
          <li style={listItemStyle}>
          
          3.	Industry Engagement: Strengthen ties with industries and research institutions, offering hands-on training, internships, and skill development opportunities.
          </li>
          <li style={listItemStyle}>
          4.	Sustainability & Ethics: Encourage responsible engineering practices by promoting energy-efficient and environmentally sustainable technologies.
          </li>
          <li style={listItemStyle}>
          5.	Global Competence: Prepare students for international opportunities through skill enhancement in leadership, entrepreneurship, and technical expertise.
          </li>
         
        </ul>
        </div>
    </div>
      )
}

export default VissionMission