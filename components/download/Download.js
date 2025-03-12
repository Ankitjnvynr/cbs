import React from 'react'

const Download = () => {
    const data = [
        { id: 1, name: "Application Form", link: "/documents/ApplicationForm.pdf" },
        { id: 2, name: "Application Form for Non-Teaching Positions", link: "/documents/ApplicationFormforNonTeachingPositions.pdf" },
        { id: 3, name: "Application Form for Teaching Positions", link: "/documents/ApplicationFormforTeachingPositions.pdf" },
        { id: 4, name: "CE 6 month Industrial training evaluation form CBS", link: "/documents/n632433b814a02 (1).docx" },
        { id: 5, name: "ECE and EE Candidate Declaration", link: "/documents/n632433bd4d68b (1).docx" },
        { id: 6, name: "ECE and EE Certificate", link: "/documents/n632433c5927f1 (1).docx" },
        { id: 7, name: "ECE and EE Important Instructions for Industrial Training", link: "/documents/n632433cb58b50 (1).docx" },
        { id: 8, name: "ECE and EE Report Format", link: "/documents/n632433d249ea8 (1).doc" },
        { id: 9, name: "EE 6 month Industrial training evaluation form CBS", link: "/documents/n632433d9bbc42 (1).docx" },
        { id: 10, name: "Extension of approval for the academic year 2021-22", link: "/documents/Extensionof approvalfoheacademicyear2021-22.pdf" },
        { id: 11, name: "Student Feedback Form", link: "/documents/n6324603516735 (1).pdf" },
        { id: 12, name: "Staff Feedback Form", link: "/documents/hn6324603e9a687 (1).pdf" },
      ];
    
      return (
        <div style={{ padding: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#ddd" }}>
                <th style={tableHeaderStyle}>Sr. No.</th>
                <th style={tableHeaderStyle}>Name</th>
                <th style={tableHeaderStyle}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} style={index % 2 === 0 ? rowEven : rowOdd}>
                  <td style={tableCellStyle}>{item.id}</td>
                  <td style={tableCellStyle}>{item.name}</td>
                  <td style={tableCellStyle}>
                    <a
                      href={item.link}
                      style={{ color: "blue", textDecoration: "none" }}
                      download
                    >
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
const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
  fontWeight: "bold",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

const rowEven = {
  backgroundColor: "#fff",
};

const rowOdd = {
  backgroundColor: "#f7f7f7",
};


export default Download;