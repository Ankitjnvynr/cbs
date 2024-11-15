import React from 'react';

const Communication = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* <img
          src="https://via.placeholder.com/170" // Replace with the actual image URL
          alt="Communication"
          style={imageStyle}
        /> */}
        <h1 style={headingStyle}>The Purpose of Communication</h1>
        <h2 style={subheadingStyle}>Importance of Good Communication Skills</h2>
        <p style={smallTextStyle}>
          The purpose of communication is to get your message across to others clearly and unambiguously.
          Communication has two parts. The first is the communicator and how effectively he/she can convey
          his/her message to the listener. The second is how well the listener of the communication receives the message.
        </p>
        <p style={paragraphStyle}>
          There should be little or no misunderstanding, misinterpretation, or confusion – if there is, the
          communication is not successful. Communication is only successful when both the sender and the
          receiver understand the same information as a result of the communication.
        </p>
        <p style={paragraphStyle}>
          Effective communication skills have become a predominant factor even while recruiting employees.
          While interviewing candidates, most interviewers judge them on the basis of the way they communicate.
          They believe that skills can be improved on the job; but the ability to communicate well is important,
          as every employee becomes the representing face of the company.
        </p>
        <p style={paragraphStyle}>
          <strong>Importance of Good Communication Skills:</strong>
        </p>
        <ul style={paragraphStyle}>
          <li>Persuade people.</li>
          <li>Influence others.</li>
          <li>Negotiate effectively.</li>
          <li>Provide valuable feedback.</li>
          <li>Inspire, motivate and encourage your staff and employees.</li>
          <li>Convey your ideas better to your boss.</li>
          <li>Make interesting conversation and network easier.</li>
          <li>Speak to groups of people with self-confidence and credibility.</li>
        </ul>
        <p style={finalTextStyle}>
          The better your communication skills, the greater success you can achieve. The importance of communication
          skills cannot be understated.
        </p>
      </div>
    </div>
  );
};

// Styles
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

export default Communication;
