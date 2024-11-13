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

const headingStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#2d3748',
  marginBottom: '1rem',
};

const labelStyle = {
  fontWeight: 'bold',
  color: '#2d3748',
  display: 'block',
  marginBottom: '0.5rem',
};

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  borderRadius: '0.375rem',
  border: '1px solid #cbd5e0',
  marginBottom: '1rem',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '1rem',
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  borderRadius: '0.375rem',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const submitButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#2b6cb0',
  color: '#fff',
};

const resetButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#718096',
  color: '#fff',
};

const Upload = () => {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <p>
          Interested candidates can send us your resumes to{' '}
          <a href="mailto:ceo@cbscolleges.com">ceo@cbscolleges.com</a> or apply through{' '}
          <a href="#">online application form</a>. Our HR Department will get back to you depending upon the requirement.
        </p>
        <h3 style={headingStyle}>Personal Details</h3>
        <form>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Post Applied For</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Name</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Email Address</label>
              <input type="email" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Current Location</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Contact No.</label>
              <input type="text" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Total Experience</label>
              <input type="text" style={inputStyle} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Upload Resume</label>
            <input type="file" style={inputStyle} />
            <small>Please upload .doc, .pdf file only</small>
          </div>
          <div style={buttonContainerStyle}>
            <button type="submit" style={submitButtonStyle}>Submit</button>
            <button type="reset" style={resetButtonStyle}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
