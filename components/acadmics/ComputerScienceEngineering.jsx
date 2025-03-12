import React from 'react'

// const ComputerScienceEngineering = () => {
  function ComputerScienceEngineering() {
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
    // <div>ComputerScienceEngineering</div>
    <div style={styles.container}>
    <div style={styles.card}>
      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <img
          src="/images/computersc.jpg" // Replace with the correct image path
          alt="Computerlab-CBSGroup"
          style={styles.image}
        />
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        {/* <h1 style={styles.heading}>Computer Center at CBS Group of Institutions</h1> */}
        <p style={styles.paragraph}>
        Students undergoing this course are exposed to new generation of computer applications bringing about major changes in industry, commerce, education, leisure and government. 
        </p>
        <p style={styles.paragraph}>
        The Computer Science Engineering course at CBS Group of Institutions provides a platform for students to enhance their skills in various fields of hardware and software. It also facilitates students to interact with IT professionals, industry practitioners and academicians from IT and allied areas.
        </p>
        <p style={styles.paragraph}>
        Computer science or computing science (sometimes abbreviated as CS) is the study of theoretical foundations of information, computation, practical techniques for their implementation and application in computer systems. It is frequently described as the systematic study of algorithmic processes that create, describe, and transform information. The Department at CBS Group of Colleges has various laboratories that have state-of-the-art software environments like Oracle 9.i, RDBMS, Java, VHDL Development Kits, Multimedia Modules, and System Software environments encompassing, Windows, UNIX and Linux operating systems, and compilers like C, C++, and Visual Studio. Laboratory activities are focused to enable the students to gain knowledge as well as hands on experience in different software environments. 
        </p>
        <p style={styles.paragraph}>
        The Computer Science at CBS department having equipped with 350 computers of latest configuration offers an independent system to work on an excellent and most desirable facility. 
        </p>
        <p style={{fontSize:"15px",fontWeight:"bolder"}}>
        The Labs in Computer Science at CBS Group of Institutions are:
        </p>
        <p style={{fontSize:"15px",fontWeight:"bolder"}}>
        C Programming Lab, C++ Programming Lab, Multimedia Lab, Java Lab, Operating Systems lab, DBMS Lab, Visual Programming Lab.
        </p>
        {/* <div style={styles.finalText}>
          Enjoy a delightful dining experience at our campus canteen!
        </div> */}
      </div>
    </div>
  </div>
  )
}

export default ComputerScienceEngineering