import React from 'react';

const Doanddonot = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Interview Do's and Don'ts</h1>

        <h2 style={subheadingStyle}>Do Your Research</h2>
        <p style={paragraphStyle}>
          Learn as much as possible about the company and the position. Visit their retail outlets, review software products,
          talk to people who know the company, explore industry information, and read the company's annual and quarterly
          reports. Checking trade publications can also provide the latest information.
        </p>

        <h2 style={subheadingStyle}>Prepare a List of Questions to Ask</h2>
        <p style={paragraphStyle}>
          It's natural to have questions about the position you're interviewing for. Prepare a list, even if some might be answered
          during the interview process.
        </p>

        <h2 style={subheadingStyle}>Dress Professionally</h2>
        <p style={paragraphStyle}>
          Make a great first impression by looking professional and confident. Even in a casual corporate culture, being the best-dressed
          person in the room during an interview won’t hurt.
        </p>

        <h2 style={subheadingStyle}>Arrive Fashionably Early</h2>
        <p style={paragraphStyle}>
          Arrive at the destination at least fifteen minutes early. Plan your travel route in advance and consider a trial run to ensure
          you know how long it will take.
        </p>

        <h2 style={subheadingStyle}>Maintain a Friendly and Professional Demeanor</h2>
        <p style={paragraphStyle}>
          Be approachable and professional. Listen carefully to the questions, make relevant and concise responses, and provide specific
          examples to reinforce your points.
        </p>

        <h2 style={subheadingStyle}>Ask Permission to Take Notes</h2>
        <p style={paragraphStyle}>
          Asking permission to take notes shows that you are interested, organized, and thorough.
        </p>

        <h2 style={subheadingStyle}>Answer Questions Confidently</h2>
        <p style={paragraphStyle}>
          Handle questions with poise and confidence, even tough ones. Don't hide weaknesses but focus on putting a positive and honest spin on them.
        </p>

        <h2 style={subheadingStyle}>Things to Avoid</h2>
        <ul style={paragraphStyle}>
          <li>Avoid giving too much personal information (e.g., financial problems, marital status, children).</li>
          <li>Don't discuss salary and benefits until the job is offered.</li>
          <li>Don’t talk too much. Prepare a few focused, thoughtful questions about the position, such as duties, responsibilities, and advancement potential.</li>
          <li>Don’t be late. Aim to be at least 5-10 minutes early.</li>
          <li>Avoid excessive bragging. It's fine to bring a “brag book” to the interview but use it as a guide, not a crutch.</li>
        </ul>

        <p style={finalTextStyle}>
          Following these guidelines can help you make a positive impression and increase your chances of success in the interview.
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

export default Doanddonot;
