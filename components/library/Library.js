import React from 'react';

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
    textAlign: 'center',
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
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  paragraph: {
    maxWidth: '800px',
    marginBottom: '16px',
    lineHeight: '1.6',
    textAlign: 'justify',
  },
  finalText: {
    marginTop: '20px',
    fontWeight: '600',
    fontSize: '18px',
    textAlign: 'center',
  },
};

function Library() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Library</h1>

      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <img
          src="/images/CBSJHL-3732.JPG"
          alt="Library"
          style={styles.image}
        />
      </div>

      <p style={styles.paragraph}>
        Library is the heart, mind, and soul of an educational institution and a 
        fountain-head of innovativeness, inspiration, and insight both for the students 
        and the faculty. Learning and library are to each other as the light to the lamp.
      </p>
      <p style={styles.paragraph}>
        A voluminous library that supports the learning process with textbooks, 
        reference books, general books, periodicals, journals, etc., is an asset 
        to the students. An air-conditioned library has been developed to provide 
        information support to teachers, students, and non-teaching staff.
      </p>
      <p style={styles.paragraph}>
        The library is equipped with more than 10,000 books from different streams. 
        Besides these text and reference books, the Library is also subscribing to a 
        large number of national and international journals, magazines, and 
        encyclopedias. The library remains open for 12 hours daily, throughout the year.
      </p>
      <p style={styles.paragraph}>
        It has a large reading AC hall with a conducive reading environment. 
        Well-trained librarians assist the students in gathering information by promptly 
        responding to their requirements.
      </p>

      <p style={styles.finalText}>
        The Library is a cornerstone of academic excellence at CBS Group of Institution.
      </p>
    </div>
  );
}

export default Library;
