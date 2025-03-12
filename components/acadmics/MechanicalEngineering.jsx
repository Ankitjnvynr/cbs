import React from 'react';

function MechanicalEngineering() {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '1rem',
      maxWidth: '900px',
      width: '100%',
      overflow: 'hidden',
      margin: '0 auto',
    },
    imageWrapper: {
      width: '100%',
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
    },
    content: {
      padding: '2rem',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '0.5rem',
    },
    paragraph: {
      color: '#4a5568',
      lineHeight: '1.75',
      marginBottom: '1rem',
    },
    finalText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#2d3748',
      marginTop: '1.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageWrapper}>
          <img
            src="/images/CBSJHL-3504.JPG" 
            alt="MechanicalEngineering-CBSGroup"
            style={styles.image}
          />
        </div>

        <div style={styles.content}>
          <h1 style={styles.heading}>Mechanical Engineering</h1>
          <p style={styles.paragraph}>
          Mechanical engineering is a very broad field of engineering that involves the application of physical principles for analysis, design, manufacturing, and maintenance of mechanical systems. Good economy of the country leads to better future and it relies largely on total productivity, which is highly dependent on Mechanical Engineers. The field of mechanical engineering has the widest applications in the engineering industry; whether the product is a medical instrument, electronic gadget or any other equipment, Mechanical Engineer is always there to plan, design, and manufacture and control the quality. The department of Mechanical Engineering strives to impart quality education keeping in view the global scenario and social obligation. The department has well designed infrastructure to provide the basic foundation to the student. The department uses modern teaching methodology like audio-visual aids, models and charts. The institute has made arrangement of AutoCAD/Pro-E in the computer lab so that students are equipped with latest technology to be able to meet challenges of global competition. 
          </p> 
          <p>The labs included in Mechanical engineering are :</p>
          <p style={styles.paragraph}>Strength of Materials Lab, Refrigeration and Air Conditioning Lab, Heat Transfer lab, Internal Combustion Engines Lab.</p>
        </div>
      </div>
    </div>
  );
}

export default MechanicalEngineering;
