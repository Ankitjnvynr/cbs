import React from 'react';

function Directorgen() {
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
      padding: '2rem',
      maxWidth: '900px',
      margin: '0 auto',
    },
    image: {
      width: '170px',
      height: '170px',
      objectFit: 'cover',
      borderRadius: '50%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '1rem',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#2d3748',
      marginBottom: '0.5rem',
    },
    subheading: {
      fontSize: '1.25rem',
      color: '#4a5568',
    },
    smallText: {
      fontSize: '0.875rem',
      color: '#718096',
      marginBottom: '1.5rem',
    },
    paragraph: {
      color: '#4a5568',
      lineHeight: '1.75',
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {/* <img
            src="/images/director.jpg"
            alt="Dr. Narendra Dhansoia"
            style={styles.image}
          /> */}
          <h1 style={styles.heading}>Message from the Director General</h1>
          <p style={styles.subheading}>Dr. Narendra Dhansoia</p>
          <p style={styles.smallText}>Director General, CBS Group of Institutions, Jhajjar</p>
        </div>

        <div>
          <p style={styles.paragraph}>
            It gives me great pride and satisfaction to write about the CBS Group of Institutions. Rapid advancements in technology and globalization have brought about dramatic changes in the Indian business environment. Highly competitive markets are putting tremendous pressure on companies, causing a paradigm shift in organizational structures and responsibilities. Since the dawn of the 21st Century, the education landscape has been evolving, and our younger generation must be prepared accordingly to effectively address the needs and challenges of changing times. It is only value-based education that can bring about a positive change in this knowledge-based global economy, transforming society and bringing dignity to the country.
          </p>
          <p style={styles.paragraph}>
            Innovation is the key to transformation. This novelty, newness, and freshness are the very essence of meaningful success. Success for a student encompasses not only a career but also personal development during the academic phase. While knowledge is fostered on all educational platforms, CBS Group of Institutions emphasizes innovation in all aspects—pedagogical tools, infrastructure, strategies, curriculum, evaluation, and more. This spirit leads to the creation of universally acknowledged technocrats and business managers, who are in sync with the latest corporate and technological trends.
          </p>
          <p style={styles.paragraph}>
            Promoted by highly qualified and devoted professionals, CBS Group of Institutions provides students with valuable insights relevant to tackling real-world problems. We understand the evolving role of a professional in today’s business environment, recognizing that it takes more than theoretical knowledge to perform in a team and give the team its winning edge. Business organizations now seek not just technically trained students but multi-dimensional professionals.
          </p>
          <p style={styles.paragraph}>
            CBS Group of Institutions provides students with top-tier infrastructure and guidance to be successful not only in their careers but throughout their lives. Lectures delivered by a team of qualified, dedicated, and research-minded faculty are supplemented by a well-stocked library, state-of-the-art laboratories, and internet facilities. Emphasis is placed on improving students' communication skills, and teaching goes beyond the curriculum, giving students hands-on experience with the latest software tools used by R&D departments in leading global industries.
          </p>
          <p style={styles.paragraph}>
            CBS Group of Institutions is committed to the holistic development of students, laying adequate emphasis on co-curricular activities. We strive to cultivate cherished values in our students by fostering team spirit, a passion for creativity, and a quest for knowledge. CBS not only helps students acquire deep knowledge in their subjects but also fosters the attributes of a civilized human being.
          </p>
          <p style={styles.paragraph}>
            I wish every student the very best in their quest for excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Directorgen;
