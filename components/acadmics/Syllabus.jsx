import React from "react";

function Syllabus() {
    const data = [
        { id: 1, name: "M.Tech (Manufacturing and Automation)", link: "/syllabus/m.techma.pdf" },
        { id: 2, name: "M.Tech. (ECE)", link: "/syllabus/m.techece.pdf" },
        { id: 3, name: "M.Tech. (CSE)", link: "/syllabus/m.techcse.pdf" },
        { id: 4, name: "B.Tech. (CSE) 3rd and 4th Sem", link: "/syllabus/b.techcseg.pdf" },
        { id: 5, name: "B.Tech. (EE) 3rd and 4th Sem", link: "/syllabus/b.techeeg.pdf" },
        { id: 6, name: "B.Tech. (ECE) 3rd and 4th Sem", link: "/syllabus/b.techeceg.pdf" },
        { id: 7, name: "B.Tech. (CE) 3rd and 4th Sem", link: "/syllabus/b.techceg.pdf" },
        { id: 8, name: "B.Tech. (ME) 3rd and 8th Sem", link: "/syllabus/b.techmeg.pdf" },
        { id: 9, name: "Bachelor of Engineering (CSE) 3rd to 8th Sem", link: "/syllabus/b.techftsg.pdf" },
        { id: 10, name: "BBA (Session 2011-2012)", link: "/syllabus/bba.pdf" },
        { id: 11, name: "MBA (2 Year Session 2011-12)", link: "/syllabus/mba4.pdf" },
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

export default Syllabus;
