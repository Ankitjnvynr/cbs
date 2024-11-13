import React from 'react';

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

const paragraphStyle = {
  color: '#4a5568',
  lineHeight: '1.75',
  marginBottom: '1rem',
};

const Placement = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <p style={paragraphStyle}>
          Recognizing the complexity of the career-planning process and the myriad of options available to students,
          the Department of Training and Placement conducts programs that offer various services to meet the
          professional development needs of students. The department partners with students in the process of
          career management. This starts with self-assessment and leads to identifying a career that meets individual
          goals.
        </p>
        <p style={paragraphStyle}>
          The Department generates awareness about industry and career trends among the students by
          organizing company visits, informal and formal discussions, workshops, and guest lectures. Senior
          Executives and alumni from a variety of business share practical advice and insights gained from their own
          background and experience. This helps students to make well-considered choices.
        </p>
      </div>
    </div>
  );
};

export default Placement;
