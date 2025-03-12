import React from 'react'

function Bca() {
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
     marginTop: '1.5rem'
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
            alt="Bachelor of Computer Application"
            style={styles.image}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Bachelor of Computer Application </h1>
          <p style={styles.paragraph}>
          Fast growing information technology and communication system have become critical components of almost every company which want to take 
          advantage of the new information technologies and communication require expert professionals, who can apply computer science principles to 
          solve problems caused by the interface between business and technology. At CBS Group of Institutions, this is an undergraduate 
          program where students are exposed to various area of computer application including the latest developments keeping pace with the industry.
          </p>
          
          <h3 style={styles.paragraph} >The course at CBS aims at realizing the following objectives:</h3>
          <ul>
        <li>To demonstrate a sound knowledge in key areas of computer science or industrial computing.</li>
        <li>To carry out the required analysis and synthesis involved in computer system, information system and computer applications.</li>
        <li>To demonstrate a sound knowledge in key areas of computer science or industrial computing.</li>
        </ul>
      <div>
          <p style={styles.paragraph}>
          Future Prospects for BCA Students at CBS Group of Institutes:
          Students have a bright future in the IT field. 
          They could take up as programmer and grow to become project managers. A post graduation in the relevant field is always preferred.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bca;