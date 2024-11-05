'use client';
import { useState } from 'react';

const AlumniRegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    nationality: '',
    occupation: '',
    city: '',
    email: '',
    mobile: '',
    course: '',
    branch: '',
    rollNo: '',
    session: '',
    currentOrgDesignation: '',
    pastOrgDesignation: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Helper function to capitalize the first letter of each word (for non-email and non-mobile fields)
  const capitalizeFirstLetter = (text) => {
    return text.replace(/\b\w/g, char => char.toUpperCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const capitalizedValue = name === 'Email' || name === 'Mobile' ? value : capitalizeFirstLetter(value);
    setFormData((prevData) => ({ ...prevData, [name]: capitalizedValue }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = ['StudentName', 'Nationality', 'City',  'Mobile', 'Course', 'Branch', 'RollNo', 'Session'];
    
    // Check required fields
    requiredFields.forEach((field) => {
      const value = formData[field]?.trim();
      if (!value) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
      }
    });

    // Validate Email
    if (formData.Email && !/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Invalid email format';
    }

    // Validate Mobile
    if (formData.Mobile && !/^\d{10}$/.test(formData.Mobile)) {
      newErrors.Mobile = 'Mobile number must be 10 digits';
    }

    setErrors(newErrors);
    console.log("Validation errors:", newErrors); // Logging for debugging
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (!validateForm()) {
      alert("Error: Please fill out all required fields correctly.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/alumni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          studentName: '',
          nationality: '',
          occupation: '',
          city: '',
          email: '',
          mobile: '',
          course: '',
          branch: '',
          rollNo: '',
          session: '',
          currentOrgDesignation: '',
          pastOrgDesignation: '',
        });
        setErrors({});
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Network error. Please try again later.');
      console.error('Network error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const Branches = {
    BTech: ['Mechanical', 'Computer Science', 'Civil', 'Electronics', 'Electrical', 'Other'],
    MTech: ['Mechanical', 'Computer Science', 'Civil', 'Electronics', 'Electrical', 'Other'],
    MBA: ['Marketing', 'Finance', 'Human Resource', 'International Business', 'IT', 'Other'],
    BCA: ['Software Development', 'AI & ML', 'Data Science', 'Other'],
    MCA: ['Software Engineering', 'Cyber Security', 'AI & Data Science', 'Other'],
    BBA: ['Marketing', 'Finance', 'Human Resource', 'International Business', 'Other'],
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.title}>Alumni Registration Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.flex}>
            {Object.keys(formData).map((key) => (
              <div key={key} style={styles.inputBox}>
                {key === 'Course' ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="">Select a Course</option>
                    {Object.keys(Branches).map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                ) : key === 'Branch' && formData.Course ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="">Select a Branch</option>
                    {Branches[formData.Course].map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input
                      type={key === 'Email' ? 'email' : 'text'}
                      name={key}
                      value={formData[key]}
                      onChange={handleChange}
                      placeholder={key.replace(/([A-Z])/g, ' $1').trim()}
                      style={styles.input}
                    />
                    {errors[key] && <span style={styles.error}>{errors[key]}</span>}
                  </>
                )}
              </div>
            ))}
          </div>
          <button type="submit" style={styles.button} disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url("/images/bgdash.jpg")',
    backgroundSize: 'cover',
    padding: '20px',
  },
  formWrapper: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(1px)',
    borderRadius: '15px',
    padding: '30px',
    maxWidth: '800px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.37)',
  },
  title: {
    textAlign: 'center',
    color: '#08124d',
    marginBottom: '20px',
    fontSize: '2rem',
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
  },
  inputBox: {
    padding: '10px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.9)',
    border: '1px solid gray',
    flex: '1 0 250px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    width: '100%',
    border: '1px solid gray',
  },
  button: {
    padding: '15px',
    borderRadius: '8px',
    background: '#08124d',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
    transition: 'background 0.3s',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
  },
};

export default AlumniRegistrationForm;
