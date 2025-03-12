import React from 'react'

const CivilEngineering = () => {
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
  
    // const headingStyle = {
    //   fontSize: '2.5rem',
    //   fontWeight: 'bold',
    //   textAlign: 'center',
    //   marginBottom: '1.5rem',
    //   color: '#000000', // Black font color for heading
    //   textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
    // };
  
    const paragraphStyle = {
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '1rem',
      color: '#000000', // Black font color for paragraphs
    };

    const imageWrapper = {
      width: '100%',
    };
  
    // const listStyle = {
    //   listStyleType: 'disc',
    //   paddingLeft: '1rem',
    //   marginBottom: '1rem',
    //   lineHeight: '1.75',
    // };

    const image = {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    };
  
    // const listItemStyle = {
    //   marginBottom: '0.75rem',
    //   color: '#000000', // Black font color for list items
    // };
  
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>

        <div style={imageWrapper}>
          <img
            src="/images/civil.jpg" // Replace with the correct image path
            alt="CivilEngineering-CBSGroup"
            style={image}
          />
          
        </div>
          <br />
          <p style={paragraphStyle}>
          Civil Engineering is one of the oldest engineering disciplines, 
          since civil engineers in one form or another have been around ever 
          since humans started building major public works such as roads, bridges,
           tunnels, and large public buildings. It is also an incredibly broad discipline,
            spanning treatment of environmental issues, transportation, power generation,
             major structures etc. As the world becomes more sophisticated, so arises need
              to create and maintain a sustainable environment for future generations. 
          </p>

          <p style={paragraphStyle}>
          This is the challenge being faced by today’s civil engineers.
           Studying a graduate course in Civil Engineering offers chance to 
           understand the diversity of activity and skills that civil engineers are involved in. 
           Projects, such as The Delhi and Hyderabad airport are the handiwork of talented and
            enthusiastic civil engineers. Seize your chance to be one of them by studying a graduate
             program in civil engineering at CBS Group of Institutions.The Institute has provided a
              good grooming ground for Civil Engineering by making available ISO certified instruments
               in various well-equipped laboratories.
          </p>
          <p style={paragraphStyle}>
          The labs at CBS College included in Civil Engineering are:
          </p>

          <p style={{fontWeight:"bolder"}}>
          Structural Analysis Lab, Fluid Mechanics Lab, Surveying Lab, Concrete Lab.
          </p>

         
  
          
        </div>
      </div>
    );
  };


export default CivilEngineering