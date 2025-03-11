import React from 'react';

function Infrastructure() {
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
            src="\images\about\frontcbs.jpg"// Replace with the correct image path
            alt="Infrastructure-CBS Group of Institutiong"
            style={{ width: '900px',height:"400px" }}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Infrastructure Facilities at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          CBS Group of Institutions offers a well-developed infrastructure designed to support academic excellence and holistic development. 
          The campus features modern classrooms equipped with advanced audio-visual aids, fostering an interactive learning environment. 
          Well-equipped laboratories and research facilities provide hands-on experience in various disciplines, while the central library 
          offers an extensive collection of books, research journals, and digital resources. The institution provides separate
           apartment-style hostels for boys and girls, with an option for air-conditioned rooms, ensuring a safe and comfortable living space. 
           Additionally, the campus includes sports facilities, a gymnasium, and recreational areas, promoting physical fitness and overall 
           well-being. With a blend of academic, residential, 
          and recreational amenities, CBS Group of Institutions ensures a conducive environment for students to learn, innovate, and grow.
          </p>
          
          <div style={styles.finalText}>
          Experience a secure and comfortable stay at our well-equipped campus hostels!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;
