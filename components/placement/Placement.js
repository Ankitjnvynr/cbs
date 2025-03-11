import React from 'react';

function ComputerCenter() {
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
            src="/images/facilities/cbscomputerlab.jpg" // Replace with the correct image path
            alt="Computerlab-CBSGroup"
            style={styles.image}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <p style={styles.paragraph}>
          Recognizing the complexity of the career-planning process and the myriad of options available to students,
          the Department of Training and Placement conducts programs that offer various services to meet the
          professional development needs of students. 
          </p>
          <p style={styles.paragraph}>
          The department partners with students in the process of
          career management. This starts with self-assessment and leads to identifying a career that meets individual
          goals.The Department generates awareness about industry and career trends among the students by
          organizing company visits, informal and formal discussions, workshops, and guest lectures. Senior
          Executives and alumni from a variety of business share practical advice and insights gained from their own
          background and experience. This helps students to make well-considered choices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComputerCenter;
