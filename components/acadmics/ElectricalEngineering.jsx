import React from 'react'

// const ElectricalEngineering = () => {
  function ElectricalEngineering() {
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
          src="/images/el.jpg" // Replace with the correct image path
          alt="Computerlab-CBSGroup"
          style={styles.image}
        />
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        {/* <h1 style={styles.heading}>Computer Center at CBS Group of Institutions</h1> */}
        <p style={styles.paragraph}>
        The global scenario of Electrical Engineers is on a high. There are vast openings abroad and also in the country. The basic knowledge of Electrical Engineering is a must for every engineer of any discipline. 
        </p>
        <p style={styles.paragraph}>
        
        The program provides to illustrate practical and theoretical aspects of basic electrical devices, circuits, networks, electrical machines, power electronics, control system, industrial drives and control transducers and high voltage engineering etc. 
        </p>
        <p style={{fontSize:"15px",fontWeight:"bolder"}}>
        
        The Labs included in Electrical engineering are:
        </p>
        <p style={{fontSize:"15px",fontWeight:"bolder"}}>
        
        Network Theory Lab, Electrical Measurements and Measuring Instruments Lab, Electrical Machines Lab.
        </p>
        {/* <div style={styles.finalText}>
          Enjoy a delightful dining experience at our campus canteen!
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default ElectricalEngineering