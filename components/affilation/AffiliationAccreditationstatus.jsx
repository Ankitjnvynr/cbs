import React from 'react';

function AffiliationAccreditationstatus() {
  const data = [
    { id: 1, name: "Affiliation", link: "/documents/affiliation.pdf" },
    { id: 2, name: "AICTE Approval", link: "/documents/AICTE Approval.pdf" },
  ];

  return (
    <div style={containerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={tableHeaderStyle}>Sr. No.</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Download</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} style={index % 2 === 0 ? rowEven : rowOdd}>
              <td style={tableCellStyle}>{item.id}</td>
              <td style={tableCellStyle}>{item.name}</td>
              <td style={tableCellStyle}>
                <a href={item.link} style={linkStyle} download>
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh",
  backgroundColor: "#f0f0f0",
};

const tableStyle = {
  borderCollapse: "collapse",
  width: "70%",
  backgroundColor: "white",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const headerRowStyle = {
  backgroundColor: "#007BFF",
  color: "white",
};

const tableHeaderStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const tableCellStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const rowEven = {
  backgroundColor: "#ffffff",
};

const rowOdd = {
  backgroundColor: "#f7f7f7",
};

const linkStyle = {
  color: "#007BFF",
  textDecoration: "none",
  fontWeight: "bold",
};

export default AffiliationAccreditationstatus;