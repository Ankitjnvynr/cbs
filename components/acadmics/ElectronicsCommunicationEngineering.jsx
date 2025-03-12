import React from 'react'

// const ElectronicsCommunicationEngineering = () => {
  function ElectronicsCommunicationEngineering() {
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
    // <div>ElectronicsCommunicationEngineering</div>
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Image Section */}
        <div style={styles.imageWrapper}>
          <img
            src="/images/comm.jpg" // Replace with the correct image path
            alt="Computerlab-CBSGroup"
            style={styles.image}
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          {/* <h1 style={styles.heading}>Computer Center at CBS Group of Institutions</h1> */}
          <p style={styles.paragraph}>
          Rapid growth in the field of Electronics and Communication Engineering has a profound effect on modern society. Personal communication such as mobile phones and satellite communication has changed the world functions. This has introduced diverse opportunities for employment for the ECE graduates. 
          </p>
          <p style={styles.paragraph}>
          The Electronics and Communication Engineering program deals with analog and digital transmission and reception of data, voice and video, basic electronics, solid state devices, microprocessors, analog and digital communication, microwave engineering, and antenna & wave propagation. Also, it deals with microprocessors, micro-controllers, power electronics, industrial drives, control and intelligent instrumentation department.
          </p>
          <p style={{fontSize:"15px",fontWeight:"bolder"}}>
          The labs included in Electronics and Communication Engineering are:
          </p>
          <p style={{fontSize:"15px",fontWeight:"bolder"}}>
          Basics of Electronics Lab, Micro Controller Lab, Microprocessor Lab, Microwave Lab, Analog Electronics lab, Communication System Lab, Electronics Workshop and Design LAB, Digital Electronics Lab, MET Lab.
          </p>
          {/* <div style={styles.finalText}>
            Enjoy a delightful dining experience at our campus canteen!
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ElectronicsCommunicationEngineering