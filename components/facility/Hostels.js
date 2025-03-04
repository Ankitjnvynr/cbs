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
            src="/images/facilities/hostel_(1).jpg"// Replace with the correct image path
            alt="Hostel-CBS Group of Institution"
            style={{ width: '900px' }}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Hostel Facilities at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          There are separate apartment style hostels for boys and girls located in the campus itself so it makes
           easy access between Institute and students. Students can opt for A/C rooms as well. The hostel on the campus of the Institute has a capacity to accommodate around 250 students. The hostels provide the structure and order which all young people need and at the same time offer warm surroundings of an extended home so that students feel comfortable with provision of home-life comforts and the 
          inmates will not miss their homes as a loving and caring atmosphere is created through conscientious efforts.
          </p>
          
          <div style={styles.finalText}>
          Experience a comfortable and secure stay at our well-equipped campus hostels!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canteen;
