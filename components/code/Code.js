import React from 'react';

const Code = () => {
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    backgroundImage: "url('https://source.unsplash.com/random/?education,building')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    borderRadius: '1.5rem',
    padding: '2rem',
    width: '100%',
    maxWidth: '900px',
    fontFamily: 'Arial, sans-serif',
    color: '#000000', // Black font color for contrast
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#000000', // Black font color for heading
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.75',
    marginBottom: '1rem',
    color: '#000000', // Black font color for paragraphs
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '1rem',
    marginBottom: '1rem',
    lineHeight: '1.75',
  };

  const listItemStyle = {
    marginBottom: '0.75rem',
    color: '#000000', // Black font color for list items
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>
          CBS Group of Institutions - Code of Conduct
        </h1>

        <p style={paragraphStyle}>
          CBS Group of Institutions offers the best college environment to its
          students. Discipline and decorum are part of day-to-day life at CBS.
          All students studying here must follow the rules below:
        </p>

        <ul style={listStyle}>
          <li style={listItemStyle}>
            On admission, every student is issued an identity card. On demand,
            every student must produce it.
          </li>
          <li style={listItemStyle}>
            While on campus, students are responsible for their belongings. CBS
            Group of Institutions is not liable for any loss or damage.
          </li>
          <li style={listItemStyle}>
            Any absence from the institute requires an application. For more
            than 3 days of absence, a doctor's certificate, endorsed by parents,
            is required.
          </li>
          <li style={listItemStyle}>
            Prescribed practical training in the field is mandatory for all
            students.
          </li>
          <li style={listItemStyle}>
            Any change of residential address must be reported to CBS College.
          </li>
          <li style={listItemStyle}>
            Students must observe safety precautions while working. The institute
            is not responsible for injuries, but first aid will be provided.
          </li>
          <li style={listItemStyle}>
            Fines may be imposed only to improve or enforce discipline on campus.
          </li>
          <li style={listItemStyle}>
            Students must follow library rules to utilize library facilities.
          </li>
          <li style={listItemStyle}>
            Punctuality is required at the beginning of the day and in all classes
            and programs.
          </li>
          <li style={listItemStyle}>
            Politeness is mandatory, and students must avoid actions that hurt
            others' feelings.
          </li>
          <li style={listItemStyle}>
            Exemplary behavior, discipline, and good conduct are expected at all
            times. CBS is not responsible for misconduct or mishaps outside the
            premises.
          </li>
          <li style={listItemStyle}>
            Ragging is strictly prohibited. In accordance with the Supreme Court
            of India, any student involved in ragging will be given a chance to
            explain. If unsatisfactory, the student will be expelled.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Code;
