import React from "react";

const CoursesTable = () => {
  const tableData = [
    {
      Level: "UNDER GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "CIVIL ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
    {
      Level: "UNDER GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "COMPUTER SCIENCE AND ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
    {
      Level: "UNDER GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "ELECTRICAL ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 30,
    },
    {
      Level: "UNDER GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "ELECTRONICS AND COMMUNICATIONS ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 30,
    },
    {
      Level: "UNDER GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "MECHANICAL ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "ELECTRICAL ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 18,
    },
    {
      Level: "POST GRADUATE",
      Program: "COMPUTER APPLICATIONS",
      Course: "MASTERS IN COMPUTER APPLICATIONS",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
    {
      Level: "POST GRADUATE",
      Program: "MANAGEMENT",
      Course: "MBA",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "MANUFACTURING AND AUTOMATION",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 18,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "ELECTRONICS AND COMMUNICATION ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 18,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "COMPUTER SCIENCE AND ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 18,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "CIVIL ENGINEERING - STRUCTURAL ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 24,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "MACHINE DESIGN",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 18,
    },
    {
      Level: "POST GRADUATE",
      Program: "ENGINEERING AND TECHNOLOGY",
      Course: "CIVIL ENGINEERING - TRANSPORTATION ENGINEERING",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 24,
    },
    {
      Level: "UNDER GRADUATE",
      Program: "MANAGEMENT",
      Course: "BBA",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
    {
      Level: "UNDER GRADUATE",
      Program: "COMPUTER APPLICATIONS",
      Course: "BCA",
      AffiliatingBody: "Maharshi Dayanand University, Rohtak",
      Intake2023_24: 60,
    },
  ];

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    background: "linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)",
  };

  return (
    <div style={containerStyle}>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.headerCell}>Level</th>
              <th style={styles.headerCell}>Program</th>
              <th style={styles.headerCell}>Course</th>
              <th style={styles.headerCell}>Affiliating Body (University / Body)</th>
              <th style={styles.headerCell}>Intake Approved </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
              >
                <td style={styles.cell}>{row.Level}</td>
                <td style={styles.cell}>{row.Program}</td>
                <td style={styles.cell}>{row.Course}</td>
                <td style={styles.cell}>{row.AffiliatingBody}</td>
                <td style={styles.cell}>{row.Intake2023_24}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesTable;

const styles = {
  tableWrapper: {
    overflowX: "auto",
    // maxWidth: "100%",
    // border:'1px solid red',
    // width:'90%'
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    minWidth: "800px",
    fontSize: "12px",
    textAlign:'center',
  },
  headerCell: {
    backgroundColor: "#f4f4f4",
    color: "#333",
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    borderBottom: "2px solid #ddd",
    textAlign:'center',
  },
  cell: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
    textAlign:'center',
  },
  evenRow: {
    backgroundColor: "#fff",
  },
  oddRow: {
    backgroundColor: "#f9f9f9",
  },
};
