import React from 'react';

function Canteen() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      maxWidth: '800px',
      height: 'auto',
      borderRadius: '12px',
      marginBottom: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    paragraph: {
      maxWidth: '800px',
      marginBottom: '16px',
      lineHeight: '1.6',
      textAlign: 'justify',
    },
    finalText: {
      marginTop: '20px',
      fontWeight: '600',
      fontSize: '18px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Canteen at CBS Group of Institutions</h1>

      {/* Canteen Image Section */}
      <img
        src="/images/canteen.jpg" // Replace with the correct path to your image
        alt="Canteen at CBS Group"
        style={styles.image}
      />

      {/* Canteen Content */}
      <p style={styles.paragraph}>
        CBS Group of Institutions has a spacious and clean canteen that caters to the taste of all students. 
        It is equipped with modern furniture and automatic cooking and storing facilities, ensuring that students 
        and staff have access to hot lunches, snacks, and beverages at reasonable rates.
      </p>
      <p style={styles.paragraph}>
        The canteen is designed to provide a comfortable dining experience, making it a popular spot for students 
        to relax, enjoy meals, and socialize with friends. With a variety of food options available throughout the day, 
        students can find nutritious meals and snacks that suit their preferences.
      </p>

      <div style={styles.finalText}>
        Enjoy a delightful dining experience at our campus canteen!
      </div>
    </div>
  );
}

export default Canteen;
