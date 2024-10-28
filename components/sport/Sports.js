import React from 'react';

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

const Sports = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Image Section */}
        <div style={styles.imageWrapper}>
          <img 
            src="/images/sports_(1).jpg"  // Replace with your actual image name from 'public/images'
            alt="CBS Group Campus and Activities" 
            style={styles.image} 
          />
        </div>

        {/* Content Section */}
        <div style={styles.content}>
          <h1 style={styles.heading}>
            CBS Group of Institutions: Beyond the Curriculum
          </h1>
          <p style={styles.paragraph}>
            One of the aspects that make CBS Group of Institutions stand apart
            is the attempt to go beyond curriculum so that the students have
            all the opportunities needed for comprehensive growth that may
            empower them to become not only competent professionals, but
            worthier human beings as well.
          </p>
          <p style={styles.paragraph}>
            Co-curricular and extracurricular activities are not seen as mere
            pastimes but steps towards sustained, overall development of every
            student. This educational concept, by any means, does not slight
            the importance of serious academic studies. While entirely and
            systematically covering the core curricula, collaborative efforts
            are taken to make students emotionally, mentally, spiritually,
            physically, and socially strong.
          </p>
          <p style={styles.paragraph}>
            The purpose of this conceptual approach is to turn young people into
            self-dependent, socially responsible individuals who can make
            meaningful contributions to the development of the country and the
            world.
          </p>
          <div style={styles.finalText}>
            Join us on this transformative journey!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
