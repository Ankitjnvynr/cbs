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
            src="/images/facilities/cbssports.jpg"// Replace with the correct image path
            alt="Sports at CBS Group"
            style={{ width: '900px', height: '450px', objectFit: 'cover' }}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>Sports at CBS Group of Institutions</h1>
          <p style={styles.paragraph}>
          At CBS Group of Institutions, we recognize that sports and physical activities 
          are integral to a student's holistic development. Our campus offers a diverse array of sports\
           facilities designed to promote physical well-being and teamwork among students.
            From well-maintained fields for outdoor games like cricket and basketball to dedicated spaces
             for indoor activities such as chess and table tennis, we ensure that students have ample 
             opportunities to engage in their preferred sports. These facilities are complemented by a supportive
              environment that encourages participation, fostering both physical fitness and social interaction. 
              By integrating sports into our educational framework, CBS Group of Institutions aims to cultivate well-rounded 
              individuals prepared for the challenges of the future. 
          </p>
          <p style={styles.paragraph}>
          At CBS Group of Institutions, we prioritize the holistic development of our students by offering a range of sports facilities that promote physical fitness and teamwork. Our campus includes well-equipped areas for both indoor and outdoor sports, ensuring students have ample opportunities to engage in various physical activities. By integrating sports into our educational framework, 
          we aim to nurture well-rounded individuals prepared for future challenges. 
          </p>
          <div style={styles.finalText}>
            Enjoy a delightful dining experience at our campus canteen!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canteen;
