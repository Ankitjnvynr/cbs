import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    programme: '',
    subject: '',
    candidateName: '',
    fatherName: '',
    motherName: '',
    gender: '',
    category: '',
    district: '',
    mobile: '',
  });

  const subjectsList = {
    "B.Tech": ["Maths", "Physics", "Computer Science", "Electronics"],
    "B.Tech (LEET)": ["Advanced Mathematics", "Electrical Engineering", "Mechanical Engineering"],
    MBA: ["Marketing", "Finance", "HR Management", "Business Analytics"],
    BBA: ["Principles of Management", "Business Communication", "Economics"],
    MCA: ["Algorithms", "Operating Systems", "Database Management"],
    BCA: ["Programming", "Web Development", "Data Structures"],
    "M.Tech": ["Artificial Intelligence", "Machine Learning", "Cyber Security"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form Submitted Successfully!');
  };

  // Styles
  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)',
    padding: '2rem',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '800px',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2d3748',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const sectionHeadingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#4a5568',
    marginBottom: '0.5rem',
    marginTop: '1.5rem',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '0.5rem',
  };

  const formGroupStyle = {
    marginBottom: '1rem',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#4a5568',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    border: '1px solid #cbd5e0',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2b6cb0',
    color: '#fff',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1.5rem',
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Admission Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Program Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Program Details</h2>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="programme">
                Programme *
              </label>
              <select
                id="programme"
                name="programme"
                value={formData.programme}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Choose</option>
                <option value="B.Tech">B.Tech</option>
                <option value="B.Tech (LEET)">B.Tech (LEET)</option>
                <option value="MBA">MBA</option>
                <option value="BBA">BBA</option>
                <option value="MCA">MCA</option>
                <option value="BCA">BCA</option>
                <option value="M.Tech">M.Tech</option>
              </select>
            </div>

            {/* Subject Section */}
            {formData.programme && (
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="subject">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                >
                  <option value="">Choose</option>
                  {subjectsList[formData.programme]?.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Personal Details Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Candidate's Personal Details</h2>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="candidateName">
                Candidate's Name *
              </label>
              <input
                type="text"
                id="candidateName"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="fatherName">
                Father's Name *
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="motherName">
                Mother's Name *
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Choose</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Choose</option>
                <option value="SC">SC</option>
                <option value="Gen">Gen</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="district">
                District *
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="mobile">
                Mobile No. *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
