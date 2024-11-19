import React, { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    phoneNumber: "",
    email: "",
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

  const handleRatingChange = (e, group) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      ratings: { ...formData.ratings, [group]: value },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.fatherName) {
      alert("Student Name and Father's Name are required.");
      return;
    }
    console.log("Submitted Feedback:", formData);
    // Add your submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Feedback Form</h2>

      <label style={styles.label}>
        Student Name <span style={styles.required}>*</span>
      </label>
      <input
        type="text"
        name="studentName"
        value={formData.studentName}
        onChange={handleChange}
        placeholder="Student Name"
        style={styles.input}
        required
      />

      <label style={styles.label}>
        Father's Name <span style={styles.required}>*</span>
      </label>
      <input
        type="text"
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
        placeholder="Father's Name"
        style={styles.input}
        required
      />

      <label style={styles.label}>
        Phone Number
      </label>
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        style={styles.input}
      />

      <label style={styles.label}>
        Email
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        style={styles.input}
      />

      <div>
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
                { text: "I feel proud to be a student of CBS GROUP OF INSTITUTIONS", name: "q1" },
                { text: "How do you rate the learning experience in terms of relevance?", name: "q2" },
                { text: "The developments in the College in recent years are appreciable", name: "q3" },
                { text: "CBS GROUP OF INSTITUTIONS involves alumni in its activities", name: "q4" },
                { text: "The alumni have a role in academically strengthening the College", name: "q5" },
                { text: "On/Off-campus Training & Placement opportunities", name: "q6" },
                { text: "The alumni have a role in financially strengthening the College", name: "q7" },
                { text: "Formation of department-wise alumni associations", name: "q8" },
                { text: "Initiative to enroll and strengthen the alumni association", name: "q9" },
              ].map((item, index) => (
                <tr key={item.name}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{item.text}</td>
                  {["Excellent", "Very Good", "Good", "Average", "Poor"].map((option) => (
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
                { text: "Teaching, Learning & Evaluation Process", name: "a2" },
                { text: "Faculty", name: "a3" },
                { text: "Quality of support material", name: "a4" },
                { text: "Co-curricular & extra-curricular activities", name: "a5" },
                { text: "Training & Placement", name: "a6" },
                { text: "Library", name: "a7" },
                { text: "Project Guidance", name: "a8" },
                { text: "Overall Rating of the College", name: "a9" },
              ].map((item, index) => (
                <tr key={item.name}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{item.text}</td>
                  {["Excellent", "Very Good", "Good", "Average", "Poor"].map((option) => (
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
      </div>

      <label style={styles.label}>Suggestions for further improvement</label>
      <textarea
        name="suggestions"
        value={formData.suggestions}
        onChange={handleChange}
        placeholder="Suggestions for further improvement"
        style={styles.textarea}
      />

      <button type="submit" style={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  label: {
    fontWeight: "bold",
    display: "block",
    margin: "8px 0 4px",
  },
  required: {
    color: "red",
    marginLeft: "2px",
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
  tableContainer: {
    overflowX: "auto",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  td: {
    border: "1px solid #7b7b7b",
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
  submitButton: {
    padding: "8px 16px",
    margin: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    background: '#054377',
    color: '#fff',
    border: '0',
  },
};

export default Feedback;
