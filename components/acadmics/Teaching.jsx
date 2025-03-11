import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const Teaching = () => {
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
      textAlign: 'left',
    },
    imageWrapper: {
      width: '100%',
      maxWidth: '800px',
      height: '400px',
      position: 'relative',
      marginBottom: '20px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    paragraph: {
      maxWidth: '800px',
      marginBottom: '16px',
      lineHeight: '1.6',
      textAlign: 'justify',
    },
    list: {
        display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '800px',
      marginBottom: '16px',
      paddingLeft: '0px',
      alignItems: 'left',
    },
    listItem: {
      marginBottom: '8px',
      alignItems:"left"
    },
    finalText: {
      marginTop: '20px',
      fontWeight: '600',
      fontSize: '18px',
      textAlign: 'center',
    },
    container2:{
      display: 'flex',
      flexDirection: 'column',
      paddingLeft:"30rem",
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',  
    }
  };

  return (
    <>
    <div style={styles.container}>
      <h1 style={styles.heading}>Teaching Pedagogy</h1>
      
      {/* Image Section */}
      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <Image
          src="/images/mech.jpeg" // Replace with the correct image path
          alt="Teaching-Pedagogy"
          width={900}  // Replace with actual width
  height={500} 
        />
      </div>
      

      {/* Content Section */}
      <p style={styles.paragraph}>
      We believe in developing strong fundamentals and conceptual understanding of the subjects. Accordingly, the learning process involves a mix of teaching techniques and self learning exercises including classroom lecture, case analysis, field studies, seminar, simulations, group project, role playing and independent project. These varied teaching styles provide a platform where the students can learn by active interaction in the class as well as through participation in various practical exercises. 
      </p>
      <p style={styles.paragraph}>
      Our curriculum is based on the latest management practices keeping in mind the current business scenario. The present developments in each of the specific area are discussed, using articles and research papers from reputed, national and international journals. We also lay a strong emphasis on project work. Regular presentation by individual students and groups are conducted, which help in enhancing communication skill and also lead to self growth and personality development. 
      </p>
      <p style={styles.paragraph}>
      CBS follow the most advanced, multi-dimensional training methodology involving techniques like case Study Methodology .of Management Game and Role plays, seminars & workshop, web-enabled learning, computerized business simulation and so on. 
      </p>
      </div>
      <div style={styles.container2}>
      <h2 style={styles.heading}>
      Our Teaching Methodology Includes
      </h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Regular Classroom Teaching</li>
        <li style={styles.listItem}>Guest lecture by eminent professionals</li>
        <li style={styles.listItem}>Live project and role play</li>
        <li style={styles.listItem}>
        Industrial Visit and Seminars
        </li>
        <li style={styles.listItem}>Issue Oriented Classes</li>
        <li style={styles.listItem}>Off Campus Workshops</li>
        <li style={styles.listItem}>Team Work and Peer Learning through Study Groups</li>
        <li style={styles.listItem}>Business Simulation Games</li>
        <li style={styles.listItem}>Enrichment Workshop</li>
        <li style={styles.listItem}>Mentorship Program</li>
        <li style={styles.listItem}>Experimental Activities</li>
        <li style={styles.listItem}>Technology Quiz</li>
        <li style={styles.listItem}>Audio Visual Aids</li>
      </ul>
      </div>
      {/* <p style={styles.paragraph}>
        The hostels provide both structure and freedom, balancing students' personal growth with academic success. 
        Through conscientious efforts, the atmosphere encourages students to grow emotionally, mentally, spiritually, 
        physically, and socially, making them feel at home away from home.
      </p>
      <div style={styles.finalText}>
        Join us and experience a home-like atmosphere while pursuing your academic goals!
      </div> */}
    
    </>
  );
};

export default Teaching;
