'use client';
import { useState } from 'react';

const AlumniRegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    nationality: '',
    fatherName: '',
    dateOfBirth: '',
    gender: '',
    degree: '',
    branch: '',
    yearOfPassing: '',
    yearOfJoining: '',
    batch: '',
    maritalStatus: '',
    telephone: '',
    mobile: '',
    email: '',
    currentAddress: '',
    permanentAddress: '',
    higherEducation: '',
    exams: '',
    scoreCard: '',
    companyName: '',
    designation: '',
    currentLocation: '',
    salaryPackage: '',
    offerLetter: '',
    experience: '',
    achievements: '',
  });

  const [errors, setErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) validateField(name, value);
  };

  const validateField = (name, value) => {
    const error = value ? '' : `${name} is required`;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== 'achievements' && key !== 'offerLetter' && key !== 'experience') {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1').trim()} is required`;
      }
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          studentName: '',
          nationality: '',
          fatherName: '',
          dateOfBirth: '',
          gender: '',
          degree: '',
          branch: '',
          yearOfPassing: '',
          yearOfJoining: '',
          batch: '',
          maritalStatus: '',
          telephone: '',
          mobile: '',
          email: '',
          currentAddress: '',
          permanentAddress: '',
          higherEducation: '',
          exams: '',
          scoreCard: '',
          companyName: '',
          designation: '',
          currentLocation: '',
          salaryPackage: '',
          offerLetter: '',
          experience: '',
          achievements: '',
        });
        setErrors({});
        setCurrentPage(1);
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

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student Name"
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
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's Name"
              style={styles.input}
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="Date of Birth"
              style={styles.input}
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </>
        );
      case 2:
        return (
          <>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="Degree"
              style={styles.input}
            />
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Branch"
              style={styles.input}
            />
            <input
              type="text"
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
              placeholder="Year of Passing"
              style={styles.input}
            />
            <input
              type="text"
              name="yearOfJoining"
              value={formData.yearOfJoining}
              onChange={handleChange}
              placeholder="Year of Joining"
              style={styles.input}
            />
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleChange}
              placeholder="Batch"
              style={styles.input}
            />
          </>
        );
      case 3:
        return (
          <>
            <input
              type="text"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              placeholder="Current Address"
              style={styles.input}
            />
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              placeholder="Permanent Address"
              style={styles.input}
            />
            <input
              type="text"
              name="higherEducation"
              value={formData.higherEducation}
              onChange={handleChange}
              placeholder="Higher Education"
              style={styles.input}
            />
            <input
              type="text"
              name="exams"
              value={formData.exams}
              onChange={handleChange}
              placeholder="Exams"
              style={styles.input}
            />
            <input
              type="text"
              name="scoreCard"
              value={formData.scoreCard}
              onChange={handleChange}
              placeholder="Score Card"
              style={styles.input}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.title}>Alumni Registration Form</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          {renderPageContent()}
          <div style={styles.buttonContainer}>
            {currentPage > 1 && (
              <button type="button" onClick={prevPage} style={styles.button}>
                Previous
              </button>
            )}
            {currentPage < 3 ? (
              <button type="button" onClick={nextPage} style={styles.button}>
                Next
              </button>
            ) : (
              <button type="submit" style={styles.button}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
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
  input: {
    padding: '10px',
    borderRadius: '8px',
    width: '100%',
    border: '1px solid gray',
    marginBottom: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px',
    borderRadius: '8px',
    background: '#08124d',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    width: '100px',
  },
};

export default AlumniRegistrationForm;
