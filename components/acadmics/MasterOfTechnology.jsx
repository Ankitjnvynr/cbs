import React from 'react';

function MasterOfTechnology() {
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
      height: '500px',
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
        <div style={styles.imageWrapper}>
          <img
            src="/images/CBSJHL-3524.JPG" 
            alt="Master Of Technology"
            style={styles.image}
          />
        </div>

        <div style={styles.content}>
          <h1 style={styles.heading}>Master Of Technology</h1>
          <p style={styles.paragraph}>
         Master of Engineering or Master of Technology degree is a postgraduate program in engineering or technology. This is generally a 2-year specialization program in a specific branch of engineering or a technical field. Students enter the ME/ M.Tech programs after completing an undergraduate program in engineering. M.Tech degree program exposes students to a wide range of courses, combined with specialized research which culminates in a thesis. M.Tech programs in India were started with the aim of producing Research Engineers who can also get the position of “Technologist” in the Industries and Research Institutes.</p>

         <p style={styles.paragraph}> The postgraduate program prepares scholars to become leaders in knowledge-driven professions by providing a learning environment strongly focused on collaborative, interdisciplinary research. Students learn to reach across traditional academic boundaries, to seek the knowledge and resources needed to solve important technological problems. The educational experience helps students choose from a number of challenging paths to reach their goal of a degree in a particular discipline.
          </p> 
          <h3>Duration of the Program</h3>
          <p style={styles.paragraph}>The four semester M.Tech. programmes offered in three disciplines, ME,CSE and ECE of the institute are based on the credit system and provide a student with wide choice of courses. Each programme comprises of several core and elective courses and project work. Equal emphasis on course-work and research dissertation thesis. The thesis is compulsory for an award of M. Tech degree. It is expected that the thesis would result in high quality scholarly publications and national and international conference presentations. </p>
          <p style={styles.paragraph}>Each discipline/stream in a department has a faculty advisor to help the students in the choice of academic options for elective courses. Students may be permitted to do their project work in industries and other approved organizations. Students are also encouraged to participate in the research and development projects undertaken by the faculty through the Industrial Consultancy and Sponsored Research (IC & SR). Students are encouraged to participate in national level conferences & present papers. Almost all students desirous of placement are placed in reputed organizations and industries after completing their courses of study.</p>
          <h3>M.Tech Disciplines</h3>
          <p style={styles.paragraph}>CBS Group of institutions provide M.Tech degree in three disciplines: Mechanical, Computer Science and Electronics and communications. The aim of the programme is to train the students in high level theoretical knowledge which enables them to tackle practical complex problems of design and development in the industrial fields as well as pursue further academic achievements through research. Apart from imparting technical knowledge, the program teaches managerial and other cognate skills that are essential for a successful career in today’s competitive world.  </p>
        </div>
      </div>
    </div>
  );
}

export default MasterOfTechnology;
