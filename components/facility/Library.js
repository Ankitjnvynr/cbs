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
            src="/images/facilities/cbslibrary.jpg"// Replace with the correct image path
            alt="Library at CBS Group of Instituion "
            style={{ width: '900px', height: '450px', objectFit: 'cover' }}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}> Library at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          Library is the heart, mind and soul of an educational institution and a fountain-head of innovativeness,
           inspiration and insight both for the students and the faculty. Learning and library are to each other as 
           the light to the lamp. A voluminous library that supports the learning process with textbooks, reference 
           books, general books, periodicals, journals etc. is an asset to the students. . An air-conditioned library 
           has been developed to provide information support to teachers, students and non-teaching staff. The library 
           is equipped with more than 10000 books from different streams. Besides these text and reference books, 
           the Library is also subscribing to a large number of national and international journals, magazines and 
           Encyclopedia. The library remains open for 12 hours daily, throughout the year. It has a large reading AC 
           hall with conducive reading environment. Well-trained librarians assist 
          the students in gathering information by promptly responding to their requirements.  
          </p>
          <div style={styles.finalText}>
          Immerse yourself in a world of knowledge at our well-stocked library!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canteen;
