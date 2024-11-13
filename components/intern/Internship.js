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

const Internship = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <p style={paragraphStyle}>
          In the competitive world, there is an urgent need for hands-on training for engineers and managers in India
          to make them more suitable for taking up a technical job, that is why Summer Internships are made
          mandatory for all graduate and post graduate in their curriculum by AICTE. The main objective of this
          training is to give the engineering and management students a scope to supplement their classroom
          knowledge and have wide exposure to active industrial life and environment before they step into the real
          professional world.
        </p>
        <p style={paragraphStyle}>
          Every student has to take a six/eight weeks Practical Training. Unless a student satisfies
          this requirement he/she is not permitted to sit in his/her final examinations. Summer Trainings are arranged
          during the summer vacation in the months of June and July in different reputed organizations all over India.
          This training will help them to enrich their knowledge which in turn will make them better professionals.
        </p>
      </div>
    </div>
  );
};

export default Internship;
