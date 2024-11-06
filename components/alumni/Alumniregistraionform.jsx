import React, { useState } from 'react';

const AlumniRegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    mobile: '',
    email: '',
    degree: '',
    branch: '',
    yearOfJoining: '',
    yearOfPassing: '',
    batch: '',
    maritalStatus: '',
    telephone: '',
    currentAddress: '',
    permanentAddress: '',
    higherEducation: '',
    exams: '',
    scoreCard: '',
    companyName: '',
    designation: '',
    currentLocation: '',
    salaryPackage: '',
    offerLetter: null, // file upload
    experience: '',
    achievements: '',
    percentageOfPassing: '',
    companyAddress: '',
    salaryOffered: '',
    gotJob: false, // to conditionally show job-related fields
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
    const error = value ? '' : `${name} `;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== 'achievements' && key !== 'offerLetter' && key !== 'experience') {
        newErrors[key] = `${key.replace(/([A-Z])/g, ' $1').trim()} `;
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
          fatherName: '',
          dateOfBirth: '',
          gender: '',
          nationality: '',
          mobile: '',
          email: '',
          degree: '',
          branch: '',
          yearOfJoining: '',
          yearOfPassing: '',
          batch: '',
          maritalStatus: '',
          telephone: '',
          currentAddress: '',
          permanentAddress: '',
          higherEducation: '',
          exams: '',
          scoreCard: '',
          companyName: '',
          designation: '',
          currentLocation: '',
          salaryPackage: '',
          offerLetter: null, // file upload
          experience: '',
          achievements: '',
          percentageOfPassing: '',
          companyAddress: '',
          salaryOffered: '',
          gotJob: false, // to conditionally show job-related fields
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
              placeholder="Name"
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
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              style={styles.input}
            />
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
              placeholder="Degree of Joining"
              style={styles.input}
            />
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Branch</option>
              <option value="BTech (CSE)">BTech (CSE)</option>
              <option value="BTech (ECE)">BTech (ECE)</option>
              <option value="BTech (EE)">BTech (EE)</option>
              <option value="BTech (ME)">BTech (ME)</option>
              <option value="MTech (CSE)">MTech (CSE)</option>
              <option value="MTech (ECE)">MTech (ECE)</option>
              <option value="MTech (EE)">MTech (EE)</option>
              <option value="MTech (MA)">MTech (MA)</option>
              <option value="MTech (CE)">MTech (CE)</option>
              <option value="MTech (EET)">MTech (EET)</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
            </select>
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
              name="yearOfPassing"
              value={formData.yearOfPassing}
              onChange={handleChange}
              placeholder="Year of Passing"
              style={styles.input}
            />
            <input
              type="text"
              name="percentageOfPassing"
              value={formData.percentageOfPassing}
              onChange={handleChange}
              placeholder="Percentage of Passing"
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
                name="educationDetails"
                value={formData.educationDetails}
                onChange={handleChange}
                placeholder="Any Other Education/Course Details"
                style={styles.input}
              />
              <input
                type="text"
                name="yearOfAdmission"
                value={formData.yearOfAdmission}
                onChange={handleChange}
                placeholder="Year of Admission"
                style={styles.input}
              />
              <input
                type="text"
                name="percentage"
                value={formData.percentage}
                onChange={handleChange}
                placeholder="Percentage"
                style={styles.input}
              />
              <select
                name="examGiven"
                value={formData.examGiven}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="">Any Exam Given</option>
                <option value="IIT-JAM">IIT-JAM</option>
                <option value="CLAT">CLAT</option>
                <option value="NET">NET</option>
                <option value="SLET">SLET</option>
                <option value="GATE">GATE</option>
                <option value="GMAT">GMAT</option>
                <option value="CAT">CAT</option>
                <option value="GRE">GRE</option>
                <option value="TOEFL">TOEFL</option>
                <option value="Civil Services">Civil Services</option>
                <option value="State Gov. Examination">State Gov. Examination</option>
                <option value="Other">Other</option>
              </select>
              <input
                type="text"
                name="yearOfExamGiven"
                value={formData.yearOfExamGiven}
                onChange={handleChange}
                placeholder="Year of Exam Given"
                style={styles.input}
              />
              <input
                type="text"
                name="examPercentage"
                value={formData.examPercentage}
                onChange={handleChange}
                placeholder="Percentage in Exam"
                style={styles.input}
              />
              <input
                type="file"
                name="scoreCard"
                onChange={(e) => handleChange({ target: { name: 'scoreCard', value: e.target.files[0] } })}
                placeholder="Upload Score Card"
                style={styles.input}
              />
              <textarea
                name="admissionDetails"
                value={formData.admissionDetails}
                onChange={handleChange}
                placeholder="Admission on this Exam Details"
                style={styles.textarea}
              />
            </>
          );
        
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
              placeholder="Exams Cleared"
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
        case 4:
          return (
            <>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="gotJob"
                  checked={formData.gotJob}
                  onChange={(e) => setFormData({ ...formData, gotJob: e.target.checked })}
                  style={styles.checkbox}
                />
                If got any job
              </label>
        
              {formData.gotJob && (
                <>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation"
                    style={styles.input}
                  />
                  <input
                    type="file"
                    name="offerLetter"
                    onChange={(e) => handleChange({ target: { name: 'offerLetter', value: e.target.files[0] } })}
                    placeholder="Upload Offer Letter"
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="salaryOffered"
                    value={formData.salaryOffered}
                    onChange={handleChange}
                    placeholder="Salary Offered"
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    style={styles.input}
                  />
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Company Address"
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
                </>
              )}
            </>
          );
      
  return (
    <>
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        style={styles.input}
      />
      <input
        type="text"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        placeholder="Designation"
        style={styles.input}
      />
      <input
        type="text"
        name="companyAddress"
        value={formData.companyAddress}
        onChange={handleChange}
        placeholder="Company Address"
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
        name="salaryOffered"
        value={formData.salaryOffered}
        onChange={handleChange}
        placeholder="Salary Offered"
        style={styles.input}
      />
      <input
        type="file"
        name="offerLetter"
        onChange={(e) => handleChange({ target: { name: 'offerLetter', value: e.target.files[0] } })}
        placeholder="Upload Offer Letter"
        style={styles.input}
      />
      <input
        type="text"
        name="currentLocation"
        value={formData.currentLocation}
        onChange={handleChange}
        placeholder="Current Location"
        style={styles.input}
      />
      <input
        type="text"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Experience"
        style={styles.input}
      />
      <textarea
        name="achievements"
        value={formData.achievements}
        onChange={handleChange}
        placeholder="Achievements"
        style={styles.textarea}
      />
    </>
  );

        return (
          <>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              style={styles.input}
            />
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Designation"
              style={styles.input}
            />
            <input
              type="text"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
              placeholder="Current Location"
              style={styles.input}
            />
            <input
              type="text"
              name="salaryPackage"
              value={formData.salaryPackage}
              onChange={handleChange}
              placeholder="Salary Package"
              style={styles.input}
            />
            <input
              type="file"
              name="offerLetter"
              onChange={(e) => handleChange({ target: { name: 'offerLetter', value: e.target.files[0] } })}
              placeholder="Upload Offer Letter"
              style={styles.input}
            />
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
              style={styles.input}
            />
            <textarea
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              placeholder="Achievements"
              style={styles.textarea}
            />
          </>
        );
        case 5:
          return (
            <div>
              <h3>Additional Details</h3>
      
              {/* Achievement in Curriculum */}
              <div>
            
                <textarea 
                  id="achievement" 
                  name="achievement" 
                  style={styles.textarea}
                  placeholder="Describe any achievements in your curriculum" 
                  value={formData.achievement || ""}
                  onChange={handleChange} 
                />
              </div>
      
              {/* Award */}
              <div>
                
                <textarea 
                 style={styles.textarea}
                  id="award" 
                  name="award" 
                  placeholder="Describe any awards received" 
                  value={formData.award || ""}
                  onChange={handleChange} 
                />
              </div>
      
              {/* Research */}
              <div>
              
                <textarea 
                 style={styles.textarea}
                  id="research" 
                  name="research" 
                  placeholder="Describe any research you have conducted" 
                  value={formData.research || ""}
                  onChange={handleChange} 
                />
              </div>
      
              {/* Published Paper */}
              <div>
               
                <textarea 
                 style={styles.textarea}
                  id="publishedPaper" 
                  name="publishedPaper" 
                  placeholder="Provide details of any papers published" 
                  value={formData.publishedPaper || ""}
                  onChange={handleChange} 
                />
              </div>
      
              {/* Job in Another Country */}
              <div>
                
                <select 
style={styles.input}
                  id="jobInAnotherCountry" 
                  name="jobInAnotherCountry" 
                  value={formData.jobInAnotherCountry || ""}
                  onChange={handleChange}
                >
                  <option value="">Job in Another Country ?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          );
                 
          default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Alumni Registration Form</h2>
      {renderPageContent()}
      <div style={styles.navigation}>
        {currentPage > 1 && <button onClick={prevPage} style={styles.button}>Previous</button>}
        {currentPage < 5 && <button onClick={nextPage} style={styles.button}>Next</button>}
        {currentPage === 5 && <button type="submit" style={styles.submitButton}>{isLoading ? 'Submitting...' : 'Submit'}</button>}
      </div>
      {/* <div style={styles.errorContainer}>
        {Object.keys(errors).map((errorKey) => (
          <div key={errorKey} style={styles.errorText}>{errors[errorKey]}</div>
        ))}
      </div> */}
    </form>
  );
};

const styles = {
  form: { maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' },
  input: { width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ddd' },
  textarea: { width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px', border: '1px solid #ddd', height: '100px' },
  button: { padding: '8px 16px', margin: '8px', borderRadius: '4px', cursor: 'pointer' },
  submitButton: { padding: '8px 16px', margin: '8px', borderRadius: '4px', cursor: 'pointer', backgroundColor: 'blue', color: 'white' },
  navigation: { display: 'flex', justifyContent: 'space-between' },
  errorContainer: { color: 'red', marginTop: '10px' },
  errorText: { marginBottom: '5px' }
};

export default AlumniRegistrationForm;
