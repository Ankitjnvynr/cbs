'use client';
import { useState } from 'react';

const Alumniregistrationform = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    placeOfBirth: '',
    guardianName: '',
    nationality: '',
    occupation: '',
    state: '',
    city: '',
    pinCode: '',
    email: '',
    mobile: '',
    otherContact: '',
    rollNo: '',
    session: '',
    currentOrgDesignation: '',
    pastOrgDesignation: '',
    contactNo: '',
    course: '',
    branch: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) validateField(name, value);
  };

  const validateField = (name, value) => {
    const error = value ? '' : `${name} is required`;
    setErrors({ ...errors, [name]: error });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = `${key} is required`;
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/alumni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        console.log('Response:', result);

        setFormData({
          studentName: '',
          dob: '',
          placeOfBirth: '',
          guardianName: '',
          nationality: '',
          occupation: '',
          state: '',
          city: '',
          pinCode: '',
          email: '',
          mobile: '',
          otherContact: '',
          rollNo: '',
          session: '',
          currentOrgDesignation: '',
          pastOrgDesignation: '',
          contactNo: '',
          course: '',
          branch: '',
        });
        setErrors({});
      } else {
        alert(`Error: ${result.message}`);
        console.error('Error response:', result);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const branches = {
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
            {Object.keys(formData).map((key, index) => (
              <div key={index} style={styles.inputBox}>
                {key === 'course' ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="">Select a Course</option>
                    {Object.keys(branches).map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                ) : key === 'branch' && formData.course ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="">Select a Branch</option>
                    {branches[formData.course].map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                ) : (
                  <>
                    <input
                      type={key === 'dob' ? 'date' : key === 'email' ? 'email' : 'text'}
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
          <button
            className="my-3"
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = styles.buttonHover.background)}
            onMouseOut={(e) => (e.target.style.background = styles.button.background)}
          >
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
    backgroundAttachment: 'fixed',
    backgroundPosition: 'full',
    padding: '20px',
  },
  formWrapper: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(1px)',
    borderRadius: '15px',
    padding: '30px',
    width: '100%',
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
    border: 'none',
    background: 'rgba(255, 255, 255, 0.9)',
    color: 'black',
    outline: 'none',
    border: '1px solid gray',
    flex: '1 0 250px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.9)',
    color: 'black',
    outline: 'none',
    border: '1px solid gray',
    width: '100%',
  },
  button: {
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    background: '#08124d',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
    width: '100%',
  },
  buttonHover: {
    background: '#08122d',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
  },
};

export default Alumniregistrationform;
