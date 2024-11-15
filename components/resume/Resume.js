import React from 'react';

const Resume = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Resume Tips</h1>

        <h2 style={subheadingStyle}>Use Bulleted Sentences</h2>
        <p style={paragraphStyle}>
          In the body of your resume, use bullets with short sentences rather than lengthy paragraphs.
          Resumes are read quickly; therefore, make key phrases stand out. Bulleting information will help
          the reader view your resume more effectively.
        </p>

        <h2 style={subheadingStyle}>Use Action Words</h2>
        <p style={paragraphStyle}>
          Use action words like prepared, managed, developed, monitored, and presented. These words make
          your resume stand out. Many companies now scan resumes electronically, looking for keywords related
          to the position. Including action keywords can prevent your resume from being disregarded as a
          “non-match.”
        </p>

        <h2 style={subheadingStyle}>Use %’s, $’s, and #’s</h2>
        <p style={paragraphStyle}>
          You should always use %’s, $’s, and #’s. Dollar totals, numbers, and percentages stand out in the
          body of a resume.
        </p>

        <h2 style={subheadingStyle}>Highlight Your Strengths</h2>
        <p style={paragraphStyle}>
          Highlight your strengths and what is most relevant to the potential employer. Resumes are reviewed
          in 10-30 seconds, so make sure the strongest points are listed first.
        </p>

        <h2 style={subheadingStyle}>Match the Need They Have</h2>
        <p style={paragraphStyle}>
          Review job postings and use the keywords listed in those ads to match your resume. Customizing
          your resume instead of using a generic one will greatly increase your chances of an interview.
        </p>

        <h2 style={subheadingStyle}>Be Positive</h2>
        <p style={paragraphStyle}>
          Focus on positive and relevant points. Leave out negatives and irrelevant information like
          graduation dates that may lead to age discrimination or personal details like race, weight, and height.
        </p>

        <h2 style={subheadingStyle}>White Space is Important</h2>
        <p style={paragraphStyle}>
          White space is important for readability. Don’t worry if there’s unused space; it can improve
          readability and make your resume more appealing.
        </p>

        <h2 style={subheadingStyle}>Formatting Guidelines</h2>
        <ul style={paragraphStyle}>
          <li>Font size should be no smaller than 10 points, using standard serif or sans-serif fonts.</li>
          <li>Keep fonts standard to avoid conversion issues.</li>
          <li>Resume length should be 1-2 pages, keeping it concise but complete.</li>
        </ul>

        <h2 style={subheadingStyle}>Start Applying</h2>
        <p style={paragraphStyle}>
          Apply for positions at different levels. Even if a job seems below your qualifications, it may lead
          to more opportunities once you’re in the door. Interviewing more also increases your skills and confidence.
        </p>

        <p style={finalTextStyle}>
          Following these tips can greatly improve your resume and increase your chances of securing an interview.
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

export default Resume;
