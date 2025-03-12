import React from 'react';

function Director() {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '170px',
    height: '170px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '0.5rem',
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    color: '#4a5568',
  };

  const smallTextStyle = {
    fontSize: '0.875rem',
    color: '#718096',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    color: '#4a5568',
    lineHeight: '1.75',
    marginBottom: '1rem',
  };

  const finalTextStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2d3748',
    marginTop: '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          {/* <img
            src="/images/director.jpg"
            alt="Dr. Rajiv Yadav"
            style={imageStyle}
          />
          <h1 style={headingStyle}>Message from the Director</h1>
          <p style={subheadingStyle}>Dr. Rajiv Yadav</p> */}
          <p style={smallTextStyle}>Director, CBS Group of Institutions</p>
        </div>

        <div>
          <p style={paragraphStyle}>
          In an era of globalization, the fierce competition compels to live up to the international standards of education. It holds true since we at   <span style={{ fontWeight: '600' }}>CBS Group of Institutions</span> harbor 
          the tenacity of being the first among equals. We adhere to the global parameters of education and inculcate the core competencies in our Engineering, Management, and Computer Application students with full zest and ardor. The objectives of imparting professional education combined with fostering innovative thinking, application of knowledge, inculcating, professional ethics and consciousness to social responsibilities are being met at CBS Group of Institutions in a holistic manner. With an aim to remain quality conscious, efficient and responsive to today’s rapidly changing economic and technological developments, CBS Group has taken up the challenge not only to give technical and corporate training to 
          the students, but also make them self-confident, better human beings endowed with leadership qualities.
          </p>
          <p style={paragraphStyle}>
          The Institute aims to train future engineers and managers capable of generating new ideas with holistic perspective, overcoming the problems of failure, and collectively moving towards organizational goals on an evolutionary path ensuring sustainable wealth creation. Apart from curriculum based studies, great emphasis is laid on promotion of innovative-driven projects, interaction with industries, soft skill, personality development, sports and cultural traits. CBS Group welcome the new entrants who, all braced up to make their mark as a true professional equipped with required expertise and excellence, are looking for an ideal seat of learning. The Institute is empowered with hi-tech communication system and the
           state-of-the-art facilities provide the students with quality education that match global standards.
          </p>
          <p style={paragraphStyle}>
          It is the holistic approach of education that holds meaning in our lives. Hence, we focus at comprehensive education which is all inclusive and proves to be best for the professionals in –the-making.
          </p>
          <p style={paragraphStyle}>
          I am sure that the new entrants are in safer hands when they opt for CBS Group. Their sagacity will see them through the challenges that might confront them when they step out in the murky market of die-hard professionals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Director;
