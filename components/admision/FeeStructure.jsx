import React from "react";

const FeeStructure = () => {
  // Course Data
  const courses = [
    { name: "M.TECH. Electrical Engineering", duration: "2 years", seats: 24, fees: "60,000/- p.a." },
    { name: "M.TECH. Mechanical Engineering (ME)", duration: "2 years", seats: 42, fees: "60,000/- p.a." },
    { name: "M.TECH. Computer Science Engineering (CSE)", duration: "2 years", seats: 42, fees: "60,000/- p.a." },
    { name: "M.TECH. Civil Engineering (CE)", duration: "2 years", seats: 48, fees: "60,000/- p.a." },
    { name: "M.TECH. Electronics & Communication Engineering (ECE)", duration: "2 years", seats: 36, fees: "60,000/- p.a." },
    { name: "B.TECH. Mechanical Engineering (ME)", duration: "4 years", seats: 180, fees: "60,000/- p.a." },
    { name: "B.TECH. Civil Engineering (CE)", duration: "4 years", seats: 120, fees: "60,000/- p.a." },
    { name: "B.TECH. Electronics & Communication Engineering (ECE)", duration: "4 years", seats: 120, fees: "60,000/- p.a." },
    { name: "B.TECH. Computer Science Engineering (CSE)", duration: "4 years", seats: 60, fees: "60,000/- p.a." },
    { name: "B.TECH. Electrical Engineering (EE)", duration: "4 years", seats: 60, fees: "60,000/- p.a." },
    { name: "BBA", duration: "3 years", seats: 60, fees: "40,000/- p.a." },
    { name: "BCA", duration: "3 years", seats: 60, fees: "40,000/- p.a." },
    { name: "MBA", duration: "2 years", seats: 120, fees: "70,000/- p.a." },
    { name: "PGDM", duration: "2 years", seats: 60, fees: "1,62,500/- p.a." },
    { name: "MCA", duration: "3 years", seats: 120, fees: "50,000/- p.a." }
  ];

  // Inline CSS Styles
  const containerStyle = {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9"
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "white"
  };

  const thTdStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left"
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#007bff",
    color: "white"
  };

  const evenRowStyle = {
    backgroundColor: "#f2f2f2"
  };

  const listStyle = {
    marginTop: "20px",
    paddingLeft: "20px"
  };

  return (
    <div style={containerStyle}>
      {/* <h2 style={headingStyle}>Course Details & Fee Structure</h2> */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name of the Course</th>
            <th style={thStyle}>Duration</th>
            <th style={thStyle}>No. of Seats Available</th>
            <th style={thStyle}>Fees Structure</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index} style={index % 2 === 0 ? evenRowStyle : {}}>
              <td style={thTdStyle}>{course.name}</td>
              <td style={thTdStyle}>{course.duration}</td>
              <td style={thTdStyle}>{course.seats}</td>
              <td style={thTdStyle}>{course.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={headingStyle}>To be charged separately from the students in addition to the above mentioned fees</h3>
      <ul style={listStyle}>
        <li><strong>University Fees:</strong> Approx. Rs. 5,000/- per annum</li>
        <li><strong>Prospectus Charges:</strong> Rs. 500/- (One-time, at admission)</li>
        <li><strong>Caution Money (Refundable):</strong> Rs. 2,000/- (One-time, at admission)</li>
        <li><strong>Other Charges:</strong> Rs. 2,300/- (Applicable for M.TECH & B.TECH only)</li>
        <li><strong>Hostel Charges:</strong> As per college norms (Including boarding & lodging)</li>
      </ul>
    </div>
  );
};

export default FeeStructure;
