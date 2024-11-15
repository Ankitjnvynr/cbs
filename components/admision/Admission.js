import React, { useEffect, useState } from 'react';

const Admission = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensures component is fully mounted on the client
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch during SSR

  return (
    <div style={formContainerStyle}>
      <form style={formStyle}>
        <h2 style={sectionHeadingStyle}>Student Information</h2>
        <div style={sectionStyle}>
          <div style={inputGroupStyle}>
            <label>Full Name of Student *</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Date of Birth *</label>
            <input type="date" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Place of Birth *</label>
            <input type="text" required style={inputStyle} />
          </div>
        </div>

        <h2 style={sectionHeadingStyle}>Father/Guardian Information</h2>
        <div style={sectionStyle}>
          <div style={inputGroupStyle}>
            <label>Full Name *</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Nationality *</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Occupation *</label>
            <input type="text" required style={inputStyle} />
          </div>
        </div>

        <h2 style={sectionHeadingStyle}>Contact Information</h2>
        <div style={sectionStyle}>
          <div style={inputGroupStyle}>
            <label>State *</label>
            <select required style={inputStyle}>
              <option>----- Select -----</option>
              <option>Andhra Pradesh</option>
              <option>Arunachal Pradesh</option>
              <option>Assam</option>
              <option>Bihar</option>
              <option>Chhattisgarh</option>
              <option>Goa</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Himachal Pradesh</option>
              <option>Jharkhand</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Madhya Pradesh</option>
              <option>Maharashtra</option>
              <option>Manipur</option>
              <option>Meghalaya</option>
              <option>Mizoram</option>
              <option>Nagaland</option>
              <option>Odisha</option>
              <option>Punjab</option>
              <option>Rajasthan</option>
              <option>Sikkim</option>
              <option>Tamil Nadu</option>
              <option>Telangana</option>
              <option>Tripura</option>
              <option>Uttar Pradesh</option>
              <option>Uttarakhand</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div style={inputGroupStyle}>
            <label>City *</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Pin Code *</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Email *</label>
            <input type="email" required style={inputStyle} />
          </div>
          <div style={inputGroupStyle}>
            <label>Mobile Number *</label>
            <input type="text" required style={inputStyle} placeholder="+91" />
          </div>
          <div style={inputGroupStyle}>
            <label>Other Contact Number</label>
            <input type="text" style={inputStyle} />
          </div>
        </div>

        <h2 style={sectionHeadingStyle}>Other</h2>
        <div style={sectionStyle}>
          <div style={inputGroupStyle}>
            <label>Course in which admission is desired *</label>
            <select required style={inputStyle}>
              <option>Select Course</option>
              <option>B.Tech</option>
              <option>BBA</option>
              <option>BCA</option>
              <option>MBA</option>
              <option>MCA</option>
              <option>M.Tech</option>
            </select>
          </div>

          <div style={checkboxGroupStyle}>
            <input type="checkbox" required />
            <label>I agree to terms & conditions.</label>
          </div>

          <p style={noteStyle}>
            <strong>Note:</strong> Please register my son/daughter on your waiting list as per particulars given above which I certify are true and correct. If my son/daughter is selected, I agree to fully abide by the Rules and Regulations of the College, pay the fees etc. in advance and settle any other accounts promptly.
          </p>
        </div>

        <div style={buttonGroupStyle}>
          <button type="submit" style={buttonStyle}>Submit</button>
          <button type="reset" style={buttonStyle}>Reset</button>
        </div>
      </form>
    </div>
  );
};

// Styles
const formContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '2rem',
  background: '#f8f9fa',
};

const formStyle = {
  width: '80%',
  maxWidth: '700px',
  backgroundColor: 'white',
  padding: '1.5rem',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '0.5rem',
};

const sectionHeadingStyle = {
  fontSize: '1.25rem',
  color: '#2b6cb0',
  borderBottom: '2px solid #2b6cb0',
  marginBottom: '1rem',
  paddingBottom: '0.5rem',
};

const sectionStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  marginBottom: '1.5rem',
  flexDirection:'column',
};

const inputGroupStyle = {
  flex: '1 1 45%',
  display: 'flex',
  flexDirection: 'column',
};

const inputStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  border: '1px solid #cbd5e0',
};

const checkboxGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '1rem',
};

const noteStyle = {
  fontSize: '0.875rem',
  color: '#4a5568',
  marginBottom: '1rem',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#2b6cb0',
  color: 'white',
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default Admission;
