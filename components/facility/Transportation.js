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
            src="/images/facilities/transports.jpg"// Replace with the correct image path
            alt="Transportation  at CBS Group"
            style={{ width: '900px', height: '450px', objectFit: 'cover' }}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Transportation at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          Very cozy, comfortable and convenient transport facilities are provided at affordable cost 
          to the students who are day scholars and travel daily to the campus. Luxurious A/C and non A/C 
          buses are available from Delhi NCR, Rohtak, Rewari, Gurgaon, Jhajjar
           that pick and drop faculty members / students to and fro. 
          </p>
        
          <div style={styles.finalText}>
          Experience a smooth and convenient commute with our well-organized transportation services!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canteen;
