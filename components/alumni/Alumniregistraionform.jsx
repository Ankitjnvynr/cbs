import React, { useState } from "react";

const AlumniRegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    mobile: "",
    email: "",
    degree: "",
    branch: "",
    yearOfJoining: "",
    yearOfPassing: "",
    batch: "",
    maritalStatus: "",
    telephone: "",
    currentAddress: "",
    permanentAddress: "",
    higherEducation: "",
    exams: "",
    scoreCard: null,
    companyName: "",
    designation: "",
    currentLocation: "",
    salaryPackage: "",
    offerLetter: null,
    experience: "",
    achievements: "",
    percentageOfPassing: "",
    companyAddress: "",
    salaryOffered: "",
    gotJob: false,
    jobInAnotherCountry: false,
    ratings: {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: "",
      a6: "",
      a7: "",
      a8: "",
      a9: "",
    },
    suggestions: "",
  });

  const [errors, setErrors] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) validateField(name, value);
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
  };

  const validateField = (name, value) => {
    const error = value ? "" : `${name} is required`;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (
        !value &&
        key !== "achievements" &&
        key !== "offerLetter" &&
        key !== "experience" &&
        key !== "idcard"
      ) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1").trim()} is required`;
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
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
      const response = await fetch("/api/alumni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          studentName: "",
          fatherName: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          mobile: "",
          email: "",
          degree: "",
          branch: "",
          yearOfJoining: "",
          yearOfPassing: "",
          batch: "",
          maritalStatus: "",
          telephone: "",
          currentAddress: "",
          permanentAddress: "",
          higherEducation: "",
          exams: "",
          scoreCard: null,
          companyName: "",
          designation: "",
          currentLocation: "",
          salaryPackage: "",
          offerLetter: null,
          experience: "",
          achievements: "",
          percentageOfPassing: "",
          companyAddress: "",
          salaryOffered: "",
          gotJob: false,
          jobInAnotherCountry: false,
          ratings: {
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "",
            q6: "",
            q7: "",
            q8: "",
            q9: "",
            a1: "",
            a2: "",
            a3: "",
            a4: "",
            a5: "",
            a6: "",
            a7: "",
            a8: "",
            a9: "",
          },
          suggestions: "",
        });
        setErrors({});
        setCurrentPage(1);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert("Network error. Please try again later.");
      console.error("Network error:", error);
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
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Father's Name"
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
              name="internshipDetails"
              value={formData.internshipDetails}
              onChange={handleChange}
              placeholder="Internship Details"
              style={styles.input}
            />
            <input
              type="text"
              name="internshipDescription"
              value={formData.internshipDescription}
              onChange={handleChange}
              placeholder="Details about Internship"
              style={styles.input}
            />
            <input
              type="text"
              name="internshipYear"
              value={formData.internshipYear}
              onChange={handleChange}
              placeholder="Year of Internship"
              style={styles.input}
            />
            <label htmlFor="internshipCertificate" style={styles.input}>
              {formData.internshipCertificate
                ? formData.internshipCertificate.name
                : "Upload your internship certificate"}
            </label>
            <input
              type="file"
              id="internshipCertificate"
              name="internshipCertificate"
              onChange={handleFileChange}
              style={styles.hiddenInput}
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
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University"
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
              <option value="State Gov. Examination">
                State Gov. Examination
              </option>
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
            <label htmlFor="scoreCard" style={styles.input}>
              {formData.scoreCard
                ? formData.scoreCard.name
                : "Upload Your Score Card"}
            </label>
            <input
              type="file"
              id="scoreCard"
              name="scoreCard"
              onChange={handleFileChange}
              style={styles.hiddenInput}
            />
            <textarea
              name="admissionDetails"
              value={formData.admissionDetails}
              onChange={handleChange}
              placeholder="Exam Details"
              style={styles.textarea}
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
                onChange={(e) =>
                  setFormData({ ...formData, gotJob: e.target.checked })
                }
                style={styles.checkbox}
              />
              If got any job
            </label>

            {formData.gotJob && (
              <>
                <input
                  type="text"
                  name="Organisation Name"
                  value={formData.OrganisationName}
                  onChange={handleChange}
                  placeholder="Organisation Name"
                  style={styles.input}
                />
                <input
                  type="text"
                  name="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  placeholder="Address"
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
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  style={styles.input}
                />
                <label htmlFor="idcard" style={styles.input}>
                  {formData.idcard ? formData.idcard.name : "Upload your ID card"}
                </label>
                <input
                  type="file"
                  id="idcard"
                  name="idcard"
                  onChange={handleFileChange}
                  style={styles.hiddenInput}
                />
                <label htmlFor="offerLetter" style={styles.input}>
                  {formData.offerLetter
                    ? formData.offerLetter.name
                    : "Upload your offer letter"}
                </label>
                <input
                  type="file"
                  id="offerLetter"
                  name="offerLetter"
                  onChange={handleFileChange}
                  style={styles.hiddenInput}
                />
              </>
            )}
          </>
        );

      case 5:
        return (
          <div>
            <h3>Additional Details</h3>
            <textarea
              id="achievement"
              name="achievement"
              style={styles.textarea}
              placeholder="Any other Achievements or Achievements in curriculum"
              value={formData.achievement || ""}
              onChange={handleChange}
            />
            <textarea
              style={styles.textarea}
              id="award"
              name="award"
              placeholder="Awards received"
              value={formData.award || ""}
              onChange={handleChange}
            />
            <textarea
              style={styles.textarea}
              id="research"
              name="research"
              placeholder="Describe research if you have any conducted"
              value={formData.research || ""}
              onChange={handleChange}
            />
            <textarea
              style={styles.textarea}
              id="publishedPaper"
              name="publishedPaper"
              placeholder="Research paper published if any"
              value={formData.publishedPaper || ""}
              onChange={handleChange}
            />
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
      <div
        style={{
          ...styles.navigation,
          flexDirection: currentPage === 1 ? "row-reverse" : "row",
        }}
      >
        {currentPage > 1 && (
          <button type="button" onClick={prevPage} style={styles.button}>
            Previous
          </button>
        )}
        {currentPage < 5 && (
          <button type="button" onClick={nextPage} style={styles.button}>
            Next
          </button>
        )}
        {currentPage === 5 && (
          <button type="submit" style={styles.submitButton}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  label: {
    cursor: "pointer",
    marginBottom: "8px",
    display: "block",
  },
  row: {
    margin: "8px 0",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    height: "100px",
  },
  fileLabel: {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#ddd",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "8px 0",
    textAlign: "center",
  },
  hiddenInput: {
    display: "none",
  },
  button: {
    padding: "8px 16px",
    margin: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    background: '#054377',
    color: '#fff',
    border: '0',
  },
  submitButton: {
    padding: "8px 16px",
    margin: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    background: '#054377',
    color: '#fff',
    border: '0',
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default AlumniRegistrationForm;
