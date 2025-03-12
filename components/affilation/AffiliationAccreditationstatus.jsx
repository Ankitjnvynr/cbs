import React from 'react';

function AffiliationAccreditationStatus() {
  const data = [
    { id: 1, name: "Affiliation", link: "/documents/affiliation.pdf", logo: "/documents/mdu.png" },
    { id: 2, name: "AICTE Approval", link: "/documents/AICTE Approval.pdf", logo: "/documents/HD-AICTE.png" },
  ];

  return (
    <div style={outerContainerStyle}>
      <div style={containerStyle}>
        {data.map((item) => (
          <div key={item.id} style={cardStyle}>
            <div style={contentStyle}>
              <img src={item.logo} alt={item.name} style={logoStyle} />
              <h3 style={titleStyle}>{item.name}</h3>
              <a href={item.link} style={linkStyle} download>
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const outerContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "350px",
  backgroundColor: "#f0f0f0",
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "220px",
  backgroundColor: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  padding: "15px",

};

const logoStyle = {
  width: "120px",
  height: "120px",
  marginBottom: "10px",
};

const contentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyle = {
  margin: "0 0 5px 0",
  fontSize: "18px",
  textAlign: "center",
};

const linkStyle = {
  color: "#007BFF",
  textDecoration: "none",
  fontWeight: "bold",
  textAlign: "center",
};

export default AffiliationAccreditationStatus;