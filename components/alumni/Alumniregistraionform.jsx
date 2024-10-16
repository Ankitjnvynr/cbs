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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
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
      setIsLoading(false);
    }, 1000);
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
          <div style={styles.grid}>
            {/* Student Information */}
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Full Name of Student"
              style={styles.input}
            />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              placeholder="Place of Birth"
              style={styles.input}
            />
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="Nationality"
              style={styles.input}
            />
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="Occupation"
              style={styles.input}
            />

            {/* Guardian Information */}
            <input
              type="text"
              name="guardianName"
              value={formData.guardianName}
              onChange={handleChange}
              placeholder="Guardian's Name"
              style={styles.input}
            />

            {/* Address Information */}
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              style={styles.input}
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              style={styles.input}
            />
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Pin Code"
              style={styles.input}
            />

            {/* Contact Information */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              style={styles.input}
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              style={styles.input}
            />
            <input
              type="text"
              name="otherContact"
              value={formData.otherContact}
              onChange={handleChange}
              placeholder="Other Contact"
              style={styles.input}
            />

            {/* Academic Information */}
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Roll Number"
              style={styles.input}
            />
            <input
              type="text"
              name="session"
              value={formData.session}
              onChange={handleChange}
              placeholder="Session"
              style={styles.input}
            />
            <input
              type="text"
              name="currentOrgDesignation"
              value={formData.currentOrgDesignation}
              onChange={handleChange}
              placeholder="Current Organization & Designation"
              style={styles.input}
            />
            <input
              type="text"
              name="pastOrgDesignation"
              value={formData.pastOrgDesignation}
              onChange={handleChange}
              placeholder="Past Organization & Designation"
              style={styles.input}
            />
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Contact Number"
              style={styles.input}
            />

            {/* Course and Branch Information */}
            <select
              name="course"
              value={formData.course}
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
            {formData.course && (
              <select
                name="branch"
                value={formData.branch}
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
            )}
          </div>

          <button
          
          className='my-3  '
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
  fieldset: {
    border: 'none',
    padding: '10px 0',
  },
  legend: {
    marginBottom: '10px',
    color: 'white',
    fontSize: '1.2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '25px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.7)',
    color: 'black',
    outline: 'none',
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
    width:'100%'
    
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
