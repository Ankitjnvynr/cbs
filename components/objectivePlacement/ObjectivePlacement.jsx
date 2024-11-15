import React from 'react';

function CareerObjectives() {
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
    textAlign: 'center',
    marginBottom: '1.5rem',
  };

  const listStyle = {
    color: '#4a5568',
    lineHeight: '1.75',
    marginBottom: '1rem',
    paddingLeft: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Placement Cell Objectives</h1>
        <ul style={listStyle}>
          <li>To assist students develop/clarify their academic and career interests, and their short- and long-term goals through individual counseling and group sessions.</li>
          <li>To assist students develop and implement successful job search strategies.</li>
          <li>To work with faculty members, department heads, and administration to integrate career planning and academic curriculum as well as coordinate Project Work/Summer Training/internship programs.</li>
          <li>To assist students for industrial training at the end of the fourth and sixth semester.</li>
          <li>To assist employers to achieve their hiring goals.</li>
          <li>To serve the community by providing access to our campus-wide activities & career resources.</li>
          <li>To empower students with life-long career decision-making skills.</li>
          <li>To provide resources and activities to facilitate the career planning process.</li>
          <li>To act as a link between students, alumni, and the employment community.</li>
          <li>Upgradation of the students' communication skills and personality development by inviting experts from outside for seminars/classes.</li>
          <li>To assist our students in obtaining final placement in reputed companies.</li>
        </ul>
      </div>
    </div>
  );
}

export default CareerObjectives;
