import React from "react";

const CoursesTable = () => {
  // const tableData = [
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "CIVIL ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "COMPUTER SCIENCE AND ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "ELECTRICAL ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 30,
  //   },
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "ELECTRONICS AND COMMUNICATIONS ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 30,
  //   },
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "MECHANICAL ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "ELECTRICAL ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 18,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "COMPUTER APPLICATIONS",
  //     Course: "MASTERS IN COMPUTER APPLICATIONS",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "MANAGEMENT",
  //     Course: "MBA",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "MANUFACTURING AND AUTOMATION",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 18,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "ELECTRONICS AND COMMUNICATION ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 18,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "COMPUTER SCIENCE AND ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 18,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "CIVIL ENGINEERING - STRUCTURAL ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 24,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "MACHINE DESIGN",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 18,
  //   },
  //   {
  //     Level: "POST GRADUATE",
  //     Program: "ENGINEERING AND TECHNOLOGY",
  //     Course: "CIVIL ENGINEERING - TRANSPORTATION ENGINEERING",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 24,
  //   },
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "MANAGEMENT",
  //     Course: "BBA",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  //   {
  //     Level: "UNDER GRADUATE",
  //     Program: "COMPUTER APPLICATIONS",
  //     Course: "BCA",
  //     AffiliatingBody: "Maharshi Dayanand University, Rohtak",
  //     Intake2023_24: 60,
  //   },
  // ];

  // const containerStyle = {
  //   minHeight: "100vh",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: "2rem",
  //   background: "linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)",
  // };
  const courses = [
    {
      category: "M.TECH.",
      programs: [
        { name: "Electrical Engineering", duration: "2 years", seats: 18,   AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
        { name: "Mechanical Engineering (ME)", duration: "2 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
        { name: "Computer Science Engineering (CSE)", duration: "2 years", seats: 18,  AffiliatingBody: "Maharshi Dayanand University, Rohtak"},
        { name: "Civil Engineering (CE)", duration: "2 years", seats: 24,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
        { name: "Electronics & Communication Engineering (ECE)", duration: "2 years", seats: 18,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
      ],
    },
    {
      category: "B.TECH.",
      programs: [
        { name: "Mechanical Engineering (ME)", duration: "4 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
        { name: "Civil Engineering (CE)", duration: "4 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak"},
        { name: "Electronics & Communication Engineering (ECE)", duration: "4 years", seats: 30, AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
        { name: "Computer Science Engineering (CSE)", duration: "4 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak"},
        { name: "Electrical Engineering (EE)", duration: "4 years", seats: 30,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" },
      ],
    },
    {
      category: "BBA",
      programs: [{ name: "BBA", duration: "3 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" }],
    },
    {
      category: "BCA",
      programs: [{ name: "BCA", duration: "3 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" }],
    },
    {
      category: "MBA",
      programs: [{ name: "MBA", duration: "2 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" }],
    },
    // {
    //   category: "PGDM",
    //   programs: [{ name: "PGDM", duration: "2 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak"}],
    // },
    {
      category: "MCA",
      programs: [{ name: "MCA", duration: "3 years", seats: 60,  AffiliatingBody: "Maharshi Dayanand University, Rohtak" }],
    },
  ];

  return (
    // <div style={containerStyle}>
    //   <div style={styles.tableWrapper}>
    //     <table style={styles.table}>
    //       <thead>
    //         <tr>
    //           <th style={styles.headerCell}>Level</th>
    //           <th style={styles.headerCell}>Program</th>
    //           <th style={styles.headerCell}>Course</th>
    //           <th style={styles.headerCell}>Affiliating Body (University / Body)</th>
    //           <th style={styles.headerCell}>Intake Approved </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {tableData.map((row, index) => (
    //           <tr
    //             key={index}
    //             style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
    //           >
    //             <td style={styles.cell}>{row.Level}</td>
    //             <td style={styles.cell}>{row.Program}</td>
    //             <td style={styles.cell}>{row.Course}</td>
    //             <td style={styles.cell}>{row.AffiliatingBody}</td>
    //             <td style={styles.cell}>{row.Intake2023_24}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" ,display: "flex", justifyContent: "center"}}>
      <table style={{ width: "50%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
        <thead>
          <tr style={{ backgroundColor: "#ddd" }}>
            <th style={tableHeaderStyle}>Name of the Course</th>
            <th style={tableHeaderStyle}>Duration</th>
            <th style={tableHeaderStyle}>No. of Seats Available</th>
            <th style={tableHeaderStyle}>Affiliating Body</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((category, index) => (
            <React.Fragment key={index}>
              <tr>
                <td colSpan="4" style={categoryHeaderStyle}>
                  {category.category}
                </td>
              </tr>
              {category.programs.map((program, idx) => (
                <tr key={idx} style={idx % 2 === 0 ? rowEven : rowOdd}>
                  <td style={tableCellStyle}>{program.name}</td>
                  <td style={tableCellStyle}>{program.duration}</td>
                  <td style={tableCellStyle}>{program.seats}</td>
                  <td style={tableCellStyle}>{program.AffiliatingBody}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Additional Notes */}
      {/* <div style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        <ul>
          <li>University Fees as applicable approx. Rs.5,000/- per annum.</li>
          <li>Prospectus Charges Rs.500/- at the time of admission only. (ONE TIME)</li>
        </ul>
      </div> */}
    </div>
  );
};

export default CoursesTable;

// const styles = {
//   tableWrapper: {
//     overflowX: "auto",
//     // maxWidth: "100%",
//     // border:'1px solid red',
//     // width:'90%'
//   },
//   table: {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: "0",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     minWidth: "800px",
//     fontSize: "12px",
//     textAlign:'center',
//   },
//   headerCell: {
//     backgroundColor: "#f4f4f4",
//     color: "#333",
//     fontWeight: "bold",
//     textAlign: "left",
//     padding: "10px",
//     borderBottom: "2px solid #ddd",
//     textAlign:'center',
//   },
//   cell: {
//     padding: "10px",
//     textAlign: "left",
//     borderBottom: "1px solid #ddd",
//     textAlign:'center',
//   },
//   evenRow: {
//     backgroundColor: "#fff",
//   },
//   oddRow: {
//     backgroundColor: "#f9f9f9",
//   },
// };
const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
  fontWeight: "bold",
  backgroundColor: "#f4f4f4",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const categoryHeaderStyle = {
  fontWeight: "bold",
  backgroundColor: "#e0e0e0",
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const rowEven = {
  backgroundColor: "#fff",
};

const rowOdd = {
  backgroundColor: "#f7f7f7",
};
