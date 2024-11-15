import React from 'react';

const Interview = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Interview Preparation Tips</h1>

        <h2 style={subheadingStyle}>Golden Rule</h2>
        <ul style={paragraphStyle}>
          <li>Speak loudly, clearly, and slowly.</li>
        </ul>

        <h2 style={subheadingStyle}>Before the Interview</h2>
        <ul style={paragraphStyle}>
          <li>Arrive and be ready 15 minutes before the scheduled interview time.</li>
          <li>Ensure the phone line is not busy 10 minutes before the scheduled time.</li>
          <li>Have a pen and paper ready for notes, along with your resume.</li>
          <li>Be calm and composed before and during the interview.</li>
          <li>Research the client’s website to understand their business.</li>
        </ul>

        <h2 style={subheadingStyle}>During the Interview</h2>
        <ul style={paragraphStyle}>
          <li>Be enthusiastic and smile—they can hear it in your voice.</li>
          <li>Provide direct and complete answers to all questions.</li>
          <li>Wait for the interviewer to finish speaking before responding.</li>
          <li>Respond to “How are you doing?” with “Fine. How about you?”</li>
          <li>End the interview with “Thanks for your time. It was nice talking to you and I look forward to being a part of your project.”</li>
          <li>Highlight special training or certifications if relevant.</li>
          <li>Do not discuss personal issues.</li>
        </ul>

        <h2 style={subheadingStyle}>Tips for Answering Questions</h2>
        <ul style={paragraphStyle}>
          <li>If you haven’t worked with specific software, say you’re a quick learner with related experience.</li>
          <li>Avoid saying “involved in”; use “responsible for” or “carried out.”</li>
          <li>Check with your recruiter about the interviewer’s expectations and provide a suitable start date.</li>
        </ul>

        <h2 style={subheadingStyle}>Interview Question Bank</h2>
        <ul style={paragraphStyle}>
          <li>Please introduce yourself.</li>
          <li>Tell us something about yourself not in your C.V.</li>
          <li>Describe your summer training.</li>
          <li>What are your career objectives?</li>
          <li>What do you know about our company and its competitors?</li>
          <li>Describe a conflict you had in a professional or academic setting. How did you resolve it?</li>
          <li>Do you prefer to work independently or in a group?</li>
          <li>Give three adjectives that describe you.</li>
          <li>How would a friend/family member/supervisor/professor describe you?</li>
          <li>If you could change something about your college education, what would it be?</li>
          <li>Describe a recent goal you achieved and how you achieved it.</li>
          {/* Add other questions as needed */}
        </ul>

        <h2 style={finalTextStyle}>
          Following these tips and preparing for potential interview questions can help increase your confidence and performance in your interview.
        </h2>
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

export default Interview;
