import React from "react";

const EligibilityCriteria = () => {
  // Inline CSS Styles
  const containerStyle = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    lineHeight: "1.6",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
  };

  const sectionStyle = {
    marginBottom: "15px",
  };

  const boldStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Eligibility Criteria & Course Duration</h2>

      <div style={sectionStyle}>
        <h4 style={boldStyle}>B.Tech. Programme</h4>
        <p>
          Candidates must have passed 10+2 with Physics and Mathematics as compulsory subjects along with one of the following: Chemistry, Bio-Technology, Computer Science, or Biology. 
          A minimum of 45% marks (40% for SC category) is required.
        </p>
        <p><strong>Duration:</strong> 4 years</p>
      </div>

      <div style={sectionStyle}>
        <h4 style={boldStyle}>B.Tech 2nd Year (LEET Admission)</h4>
        <p>
          Candidates must have a 3-year Diploma in Engineering/Technology with at least 45% marks (40% for SC category) OR a BSc. Degree with Mathematics and 50% marks (45% for SC category).
        </p>
        <p><strong>Duration:</strong> 3 years</p>
      </div>

      <div style={sectionStyle}>
        <h4 style={boldStyle}>BBA Programme</h4>
        <p>Candidates should have completed 10+2 or its equivalent with at least 45% marks.</p>
        <p><strong>Duration:</strong> 3 years</p>
      </div>

      <div style={sectionStyle}>
        <h4 style={boldStyle}>BCA Programme</h4>
        <p>Any candidate who has passed 10+2 with a minimum of 45% marks is eligible.</p>
        <p><strong>Duration:</strong> 3 years</p>
      </div>

      <div style={sectionStyle}>
        <h4 style={boldStyle}>M.Tech Programme</h4>
        <p>
          Candidates must have at least 50% marks (45% for SC category) in B.Tech/B.E. in the relevant field along with a valid GATE score.
        </p>
        <p><strong>Duration:</strong> 2 years</p>
      </div>

      <div style={sectionStyle}>
        <h4 style={boldStyle}>MBA Programme</h4>
        <p>
          Candidates should have a Bachelor’s Degree (3 years) or equivalent in any discipline with at least 50% marks (45% for SC category).
        </p>
        <p><strong>Duration:</strong> 2 years</p>
      </div>
      <div style={sectionStyle}>
        <h4 style={boldStyle}>MCA Programme</h4>
        <p>
          Candidates must have at least 50% marks in a recognized Bachelor’s Degree (3 years) with Mathematics at 10+2 level OR  
          50% marks in a Bachelor’s Degree (3 years) with Mathematics as one of the subjects OR  
          50% marks in a BCA degree (3 years). (45% for SC category)
        </p>
        <p><strong>Duration:</strong> 3 years</p>
      </div>
    </div>
  );
};

export default EligibilityCriteria;
