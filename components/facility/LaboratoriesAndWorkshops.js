import React from 'react';

function Canteen() {
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
        {/* Image Section */}
        <div style={styles.imageWrapper}>
          <img
            src="/images/facilities/cbslabs.jpg"// Replace with the correct image path
            alt="Laboratories And Workshops at CBS Group"
            style={{ width: '900px'}}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Laboratories And Workshops at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          The laboratories and workshops being the core facility have most modern equipments and 
          machinery conforming to highest standards. The institute has state of the art physics, chemistry, 
        electronics and communication, electrical technology labs and mechanical workshops to facilitate the 
        acquisition of knowledge. The laboratories have been planned with absolute care to ensure safety while 
        working. All the required machines and equipments in the labs/mechanical workshops are as per prescribed 
        norms and standards.
           Each lab/workshop is spacious enough for the students to work comfortably. 
          </p>
          <p style={styles.paragraph}>
          Institute has extensive Workshops and Laboratory facilities in every department Language lab,
           communication lab, digital lab, computer lab etc. with all required equipment and systems to enable
            the students to conduct practical properly. The Laboratories are well maintained and are having sufficient number of supporting staff, 
          who are equally well trained and committed to students learning. 
          </p>
          <div style={styles.finalText}>
          Enhance your learning experience with our well-equipped laboratories and workshops!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canteen;
