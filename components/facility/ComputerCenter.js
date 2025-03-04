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
          <h1 style={styles.heading}>Computer Center at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          We firmly believe that the overall development and knowledge enhancement for any student is possible only after adequate exposure to information technology. In alignment with this ideology self sufficient Computer & hp servers, desktops, HP Hi-end Laser jet printers and relevant software have been set up that completely fulfils all the requirements of the students and faculty. Internet facility with high speed internet has been made available for education and academic purposes.
          </p>
          <p style={styles.paragraph}>
          All computers are in LAN (Local Area Network) and are served by a powerful server. Students have the choice of Windows (XP, Vista, Windows 7 etc.) or Linux Operating System. An air-conditioned Computer Centre facilitates the students to become independent learners and self- starters. We encourage use of multimedia to learn inter-actively and work on class projects. They use the Internet to explore, engage in projects, and communicate with no barriers. The computer lab has been set up under the guidance of expert professionals, so as to provide best technology and facilities to the students.
          All students are highly benefitted by gathering information, organizing and presenting the same in meaningful manner.
          </p>
          {/* <div style={styles.finalText}>
            Enjoy a delightful dining experience at our campus canteen!
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ComputerCenter;
