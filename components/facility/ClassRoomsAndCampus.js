import React from 'react';

function ClassRoomsAndCampus() {
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
            src="/images/facilities/cbsclassrooms.jpg" // Replace with the correct image path
            alt="Classroom-CBSGroup"
            style={styles.image}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Class Rooms & Campus</h1>
          <p style={styles.paragraph}>
          Far from the maddening crowd, CBS Group of Institutions is spread over 32 acres of well developed 
          and maintained, sprawling green semi air conditioned Campus with state of art facilities/amenities.
          Well designed and spacious class rooms facilitate teaching-learning process.
          These trendy classrooms have all modern learning aids like LCD projector, VCD player and OHP. 
          And add to this the comfortable seating arrangements, learning at CBS Group of Colleges becomes more
          exciting.
          </p>
          <p style={styles.paragraph}>
          CBS Group of Institutions has number of tutorial rooms where students meet the teachers 
          in groups and brainstorm over academic issues. Other forms of teaching like interactive 
          session, workshop, seminar and management game & role-plays are organized in the seminar 
          and conference room.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClassRoomsAndCampus;
