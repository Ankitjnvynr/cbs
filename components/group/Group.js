import React from 'react';

const Group = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Group Discussion (GD)</h1>
        <p style={smallTextStyle}>
          A Group Discussion is a methodology used by an organization to gauge whether the candidate has certain
          personality traits and/or skills that it desires in its members. In this methodology, the group of candidates
          is given a topic or a situation, given a few minutes to think about the same, and then asked to discuss it among
          themselves for 15-20 minutes.
        </p>

        <h2 style={subheadingStyle}>Traits Evaluated in a GD</h2>
        <ul style={paragraphStyle}>
          <li>Ability to work in a team</li>
          <li>Communication skills</li>
          <li>Reasoning ability</li>
          <li>Leadership skills</li>
          <li>Initiative</li>
          <li>Assertiveness</li>
          <li>Flexibility</li>
          <li>Creativity</li>
          <li>Ability to think on one’s feet</li>
        </ul>

        <h2 style={subheadingStyle}>Company’s Perspective</h2>
        <p style={paragraphStyle}>
          Companies conduct group discussions after the written test to check interactive skills and assess communication
          abilities. The GD evaluates how candidates behave, participate, and contribute in a group, and how open they are
          to diverse viewpoints. The core aspects include verbal communication, non-verbal behavior, decision-making ability, and cooperation.
        </p>

        <h2 style={subheadingStyle}>Reasons for Conducting a GD</h2>
        <ul style={paragraphStyle}>
          <li>Helps you understand a subject more deeply.</li>
          <li>Improves your ability to think critically.</li>
          <li>Helps in solving a particular problem.</li>
          <li>Assists the group in making a decision.</li>
          <li>Increases confidence in speaking and listening skills.</li>
        </ul>

        <h2 style={subheadingStyle}>Strategies for Improving GD Skills</h2>
        <p style={paragraphStyle}>
          Participating actively, observing others, and practicing discussions in informal settings can improve your GD skills.
          Engaging in social discussions and preparing questions can also be beneficial.
        </p>

        <h2 style={subheadingStyle}>Discussion Etiquette</h2>
        <p style={paragraphStyle}><strong>Do’s</strong></p>
        <ul style={paragraphStyle}>
          <li>Speak pleasantly and politely.</li>
          <li>Respect every speaker’s contribution.</li>
          <li>Stay on topic and maintain body language.</li>
        </ul>
        <p style={paragraphStyle}><strong>Don’ts</strong></p>
        <ul style={paragraphStyle}>
          <li>Lose your temper or interrupt others.</li>
          <li>Shout or use too many aggressive gestures.</li>
          <li>Dominate the discussion.</li>
        </ul>

        <h2 style={subheadingStyle}>Leading a Group Discussion</h2>
        <p style={paragraphStyle}>
          Demonstrating leadership in a GD involves introducing the topic, inviting quieter members to speak, and summarizing the discussion objectively.
        </p>

        <h2 style={subheadingStyle}>Important GD Topics</h2>
        <ul style={paragraphStyle}>
          <li>A Unipolar World spells disaster for underdeveloped countries like India.</li>
          <li>Is Globalisation Really Necessary?</li>
          <li>Should there be private universities?</li>
          <li>Education in India compared to foreign nations.</li>
          <li>Position of Women in India compared to other nations.</li>
          {/* Add other topics as needed */}
        </ul>

        <h2 style={subheadingStyle}>Debate</h2>
        <p style={paragraphStyle}>
          A debate is an organized clash of good ideas where each side presents evidence to promote its viewpoint.
          It is a formal intellectual contest, and a good debater uses evidence and logic to argue effectively.
        </p>

        <p style={finalTextStyle}>
          Participating in group discussions and debates can significantly enhance communication and critical thinking skills.
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

export default Group;
