import React from 'react';

function PlacementProcedure() {
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
    paddingLeft: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Our Placement Procedure</h1>
        <ul style={listStyle}>
          <li>The students are free to apply in any number of companies offering jobs in their opted specialization.</li>
          <li>No applications from students in response to the press advertisements or to the organizations which have not notified the T&P about their requirements shall be entertained by the T&P.</li>
          <li>The student should inform T&P department if they have earlier applied for the same company on their own.</li>
          <li>If a company has approached the T&P or is in the process of approaching the T&P for placements, no student shall approach any of these companies on their own, except through T&P.</li>
          <li>Students should submit a soft copy of their CV to the T & P department before the start of placements.</li>
          <li>Students are advised to keep sufficient copies of resume, passport size photos, etc ready so as to submit it as per the requirement of company. No requests for taking the printouts of resumes from the T&P department will be entertained.</li>
          <li>Sometimes organizations, at the time of their campus interviews, may inform the T&P that they are interested in screening more candidates. Then the T&P will ask other interested students to apply immediately and the students may have to submit their resumes at short notice. Making several copies of the resume is, therefore, desirable.</li>
          <li>Students may apply to organizations only against functional positions specified by T&P. T&P shall not entertain applications/resumes of students who want to apply for hypothetical positions or for functional areas not announced.</li>
        </ul>
      </div>
    </div>
  );
}

export default PlacementProcedure;
