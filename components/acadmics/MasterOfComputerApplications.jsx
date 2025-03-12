import React from 'react';

function MasterOfComputerApplications() {
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
      height: '500px',
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
            src="/images/facilities/cbscomputerlab.jpg" 
            alt="Master Of Computer Applications"
            style={styles.image}
          />
        </div>

        <div style={styles.content}>
          <h1 style={styles.heading}>Master Of Computer Applications</h1>
          <p style={styles.paragraph}>
          MCA is a course exclusively designed to meet the IT industry requirements. The well balanced course significantly emphasizes on planning, designing and building of complex commercial application software and system software. The course also places equal importance on the functional knowledge in various areas. A three year full-time MCA course is not just a postgraduate course; it is also a complete professional grooming for students for a successful career in the IT Industry. </p>

          <h3>Future Prospects</h3>
          <p style={styles.paragraph}>The fact that industries in India and abroad have been placing the MCA students on regular basis is testimony to the quality of course and its students. </p>
          <li>MCA graduates begin their career as junior programmers and grow at a very fast pace to become systems analysts and project leaders. Since the course is also designed towards the research side, some students pursue higher studies. Yet others seek entrepreneurial roles like consultation etc.</li>
          <li>Application areas include transaction processing (such as banking, stock exchange order processing) simulation, database management, e-commerce, design support and data communications, networking, embedded technologies etc.</li>
         
        </div>
      </div>
    </div>
  );
}

export default MasterOfComputerApplications;
