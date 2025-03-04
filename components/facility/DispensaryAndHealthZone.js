import React from 'react';

function DispensaryAndHealthZone() {
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
        {/* <div style={styles.imageWrapper}>
          <img
            src="/images/canteen.jpg" // Replace with the correct image path
            alt="Dispensary at CBS Group"
            style={styles.image}
          />
        </div> */}

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Dispensary at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          In order to provide round the clock medical facilities to the students and staff and also to attend to unforeseen medical emergencies, CBS possesses a full-fledged medical dispensary in its campus under the supervision of well qualified and experienced doctors as well as nurses. To deal with emergency cases, college transport is available round the clock to carry the patients for treatment at surrounding hospitals. 
          </p>
          {/* <p style={styles.paragraph}>
            The canteen is designed to provide a comfortable dining experience, making it a popular spot for students 
            to relax, enjoy meals, and socialize with friends. With a variety of food options available throughout the day, 
            students can find nutritious meals and snacks that suit their preferences.
          </p>
          <div style={styles.finalText}>
            Enjoy a delightful dining experience at our campus canteen!
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DispensaryAndHealthZone;
