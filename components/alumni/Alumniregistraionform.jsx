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
  const [showDateOfBirth, setShowDateOfBirth] = useState(false);

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

  const handleRatingChange = (e, group) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      ratings: { ...formData.ratings, [group]: value },
    });
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
        // reset form data
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

  const renderRatingRow = (question, name) => (
    <div style={styles.row}>
      <label>{question}</label>
      {["Excellent", "Very Good", "Good", "Average", "Poor"].map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={formData.ratings[name] === option}
            onChange={(e) => handleRatingChange(e, name)}
          />
          {option}
        </label>
      ))}
    </div>
  );

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="Roll Number"
              style={styles.input}
            />
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
            <label
              htmlFor="dateOfBirth"
              style={styles.input}
              onClick={() => setShowDateOfBirth(true)}
            >
              Date of Birth
            </label>
            {showDateOfBirth && (
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                style={styles.input}
              />
            )}
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
                    : "Upload your internshipCertificate"}
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
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Degree of Joining in CBS"
            style={styles.input}
          />
          <select
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Branch</option>
            <option value="B.Tech (CE)">B.Tech (CE)</option>
            <option value="B.Tech (CSE)">B.Tech (CSE)</option>
            <option value="B.Tech (EE)">B.Tech (EE)</option>
            <option value="B.Tech (ECE)">B.Tech (ECE)</option>
            <option value="B.Tech (ME)">B.Tech (ME)</option>
            <option value="M.Tech (SE)">M.Tech (EE)</option>
            <option value="M.Tech (M&A)">M.Tech (M&A)</option>
            <option value="M.Tech (ECE)">M.Tech (ECE)</option>
            <option value="M.Tech (CSE)">M.Tech (CSE)</option>
            <option value="M.Tech (CE) (Transp. Eng.)">M.Tech (CE) (Transp. Eng.)</option>
            <option value="M.Tech (MD)">M.Tech (MD)</option>
            <option value="M.Tech (CE) (Struct. Eng.)">M.Tech (CE) (Struct. Eng.)</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="MCA">MCA</option>
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
            name="percentageOfPassing"
            value={formData.percentageOfPassing}
            onChange={handleChange}
            placeholder="Percentage in Degree"
            style={styles.input}
          />
          
          {/* Additional fields from the screenshot */}
          <input
            type="text"
            name="passingDegreeInCBS"
            value={formData.passingDegreeInCBS}
            onChange={handleChange}
            placeholder="Passing Degree in CBS"
            style={styles.input}
          />
          <select
            name="branchSelection"
            value={formData.branchSelection}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Select Branch</option>
            {/* Repeat options if needed */}
          </select>
          <input
            type="text"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleChange}
            placeholder="Passing Year"
            style={styles.input}
          />
          <input
            type="text"
            name="passingPercentage"
            value={formData.passingPercentage}
            onChange={handleChange}
            placeholder="Percentage in Passing Degree"
            style={styles.input}
          />
        </>
        );
      case 4:
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
              placeholder="Admission on this Exam Details"
              style={styles.textarea}
            />
          </>
        );
      case 5:
        return (
          <>
            {/* Checkbox for "If got any job" */}
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
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  style={styles.input}
                />

                <label htmlFor="idcard" style={styles.input}>
                  {formData.idcard
                    ? formData.idcard.name
                    : "Upload your ID card"}
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

                {/* Nested Checkbox for "Job in Another Country" */}
                <label style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="jobInAnotherCountry"
                    checked={formData.jobInAnotherCountry}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        jobInAnotherCountry: e.target.checked,
                      })
                    }
                    style={styles.checkbox}
                  />
                  Job in Another Country?
                </label>

                {formData.jobInAnotherCountry && (
                  <>
                    <input
                      type="text"
                      name="countryName"
                      value={formData.countryName || ""}
                      onChange={handleChange}
                      placeholder="Country Name"
                      style={styles.input}
                    />
                    <input
                      type="text"
                      name="visaType"
                      value={formData.visaType || ""}
                      onChange={handleChange}
                      placeholder="Visa Type"
                      style={styles.input}
                    />
                    <input
                      type="text"
                      name="workPermit"
                      value={formData.workPermit || ""}
                      onChange={handleChange}
                      placeholder="Work Permit Details"
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
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Designation"
                      style={styles.input}
                    />

                    <label htmlFor="idcard1" style={styles.input}>
                      {formData.idcard1
                        ? formData.idcard1.name
                        : "Upload your ID card"}
                    </label>
                    <input
                      type="file"
                      id="idcard1"
                      name="idcard1"
                      onChange={handleFileChange}
                      style={styles.hiddenInput}
                    />

                    <label htmlFor="offerLetter1" style={styles.input}>
                      {formData.offerLetter1
                        ? formData.offerLetter1.name
                        : "Upload your offer letter"}
                    </label>
                    <input
                      type="file"
                      id="offerLetter1"
                      name="offerLetter1"
                      onChange={handleFileChange}
                      style={styles.hiddenInput}
                    />
                  </>
                )}
              </>
            )}
          </>
        );

      case 6:
        return (
          <div>
            <h3>Additional Details</h3>
            <textarea
              id="achievement"
              name="achievement"
              style={styles.textarea}
              placeholder="Describe any achievements in your curriculum"
              value={formData.achievement || ""}
              onChange={handleChange}
            />
            <textarea
              style={styles.textarea}
              id="award"
              name="award"
              placeholder="Describe any awards received"
              value={formData.award || ""}
              onChange={handleChange}
            />
            <textarea
              style={styles.textarea}
              id="research"
              name="research"
              placeholder="Describe any research you have conducted"
              value={formData.research || ""}
              onChange={handleChange}
            />
            <textarea
              style={styles.textarea}
              id="publishedPaper"
              name="publishedPaper"
              placeholder="Provide details of any papers published"
              value={formData.publishedPaper || ""}
              onChange={handleChange}
            />
          </div>
        ); // existing cases 1 to 5 for your form fields

      case 7:
        return (
          <>
            <h5>Rate the Following Aspects</h5>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.td}>Sr. No.</th>
                    <th style={styles.td}>Particulars</th>
                    <th style={styles.td}>Excellent</th>
                    <th style={styles.td}>Very Good</th>
                    <th style={styles.td}>Good</th>
                    <th style={styles.td}>Average</th>
                    <th style={styles.td}>Poor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      text: "I feel proud to be a student of CBS GROUP OF INSTITUTIONS",
                      name: "q1",
                    },
                    {
                      text: "How do you rate the learning experience in terms of relevance?",
                      name: "q2",
                    },
                    {
                      text: "The developments in the College in recent years are appreciable",
                      name: "q3",
                    },
                    {
                      text: "CBS GROUP OF INSTITUTIONS involves alumni in its activities",
                      name: "q4",
                    },
                    {
                      text: "The alumni have a role in academically strengthening the College",
                      name: "q5",
                    },
                    {
                      text: "On/Off-campus Training & Placement opportunities",
                      name: "q6",
                    },
                    {
                      text: "The alumni have a role in financially strengthening the College",
                      name: "q7",
                    },
                    {
                      text: "Formation of department-wise alumni associations",
                      name: "q8",
                    },
                    {
                      text: "Initiative to enroll and strengthen the alumni association",
                      name: "q9",
                    },
                  ].map((item, index) => (
                    <tr key={item.name}>
                      <td style={styles.td}>{index + 1}</td>
                      <td style={styles.td}>{item.text}</td>
                      {[
                        "Excellent",
                        "Very Good",
                        "Good",
                        "Average",
                        "Poor",
                      ].map((option) => (
                        <td style={styles.td} key={option}>
                          <input
                            type="radio"
                            name={item.name}
                            value={option}
                            checked={formData.ratings[item.name] === option}
                            onChange={(e) => handleRatingChange(e, item.name)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h5>Rate Other Attributes</h5>
            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.td}>Sr. No.</th>
                    <th style={styles.td}>Attributes</th>
                    <th style={styles.td}>Excellent</th>
                    <th style={styles.td}>Very Good</th>
                    <th style={styles.td}>Good</th>
                    <th style={styles.td}>Average</th>
                    <th style={styles.td}>Poor</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { text: "Environment", name: "a1" },
                    {
                      text: "Teaching, Learning & Evaluation Process",
                      name: "a2",
                    },
                    { text: "Faculty", name: "a3" },
                    { text: "Quality of support material", name: "a4" },
                    {
                      text: "Co-curricular & extra-curricular activities",
                      name: "a5",
                    },
                    { text: "Training & Placement", name: "a6" },
                    { text: "Library", name: "a7" },
                    { text: "Project Guidance", name: "a8" },
                    { text: "Overall Rating of the College", name: "a9" },
                  ].map((item, index) => (
                    <tr key={item.name}>
                      <td style={styles.td}>{index + 1}</td>
                      <td style={styles.td}>{item.text}</td>

                      {[
                        "Excellent",
                        "Very Good",
                        "Good",
                        "Average",
                        "Poor",
                      ].map((option) => (
                        <td style={styles.td} key={option}>
                          <input
                            type="radio"
                            name={item.name}
                            value={option}
                            checked={formData.ratings[item.name] === option}
                            onChange={(e) => handleRatingChange(e, item.name)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <textarea
              name="suggestions"
              value={formData.suggestions}
              onChange={handleChange}
              placeholder="Suggestions for further improvement"
              style={styles.textarea}
            />
          </>
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
        {currentPage < 7 && (
          <button type="button" onClick={nextPage} style={styles.button}>
            Next
          </button>
        )}
        {currentPage === 7 && (
          <button type="submit" style={styles.submitButton}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        )}
      </div>
    </form>
  );
};

const styles = {
  tableContainer: {
    overflowX: "auto", // Allows horizontal scrolling
    marginBottom: "20px",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
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
  },
  submitButton: {
    padding: "8px 16px",
    margin: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "blue",
    color: "white",
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse", // Ensures the borders of cells merge together
    marginBottom: "20px",
  },
  th: {
    border: "1px solid #000", // Adds a border to header cells
    padding: "8px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
  },
  td: {
    border: "1px solid #7b7b7b", // Adds a border to data cells
    padding: "8px",
    textAlign: "center",
    fontSize: "12px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    margin: "8px 0",
    borderRadius: "4px",
    border: "1px solid #ddd",
    height: "100px",
  },
  "@media (max-width: 768px)": {
    form: {
      padding: "10px", // Reduced padding for smaller screens
    },
    input: {
      padding: "6px", // Adjusts padding for smaller screens
      margin: "6px 0",
    },
    textarea: {
      padding: "6px",
      margin: "6px 0",
    },
    table: {
      fontSize: "0.8em", // Smaller font for tables on mobile
    },
    navigation: {
      flexDirection: "column", // Stacks buttons on smaller screens
    },
    button: {
      width: "100%", // Full width for better tap area
    },
    submitButton: {
      width: "100%", // Full width for better tap area
    },
  },
};

export default AlumniRegistrationForm;
