import React from 'react'

const AdmissionProcedure = () => {
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
  const listStyle = {
    marginTop: "20px",
    paddingLeft: "20px"
  };

  const sectionStyle = {
    marginBottom: "15px",
  };

  const boldStyle = {
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Admission Procedure </h2>

      <div style={sectionStyle}>
        <p>
        Prospectus and application forms of CBS Group of Institutions can be obtained from our offices on payment of Rs. 500/- in Cash or Demand Draft.
         Applicants can also download Application Forms from our website www.cbsdelhi.com. The downloaded CBS College Application 
        Form must be supported by a Demand Draft of Rs. 500/- The Demand Draft should be drawn in favor of CBS Group of Institutions payable at Delhi.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>B.Tech (LEET Admission)</h3>
        <p>
        The admissions via LEET in CBS Group of Institutions will be made on the basis of the merit of the last qualifying examination.
        </p>
        <ul style={listStyle}>
        <li>Admission to 75% seats of B.Tech LEET. will be made by HSCS through NIC (Policy as enunciated by State Govt).</li>
        <li>Admission to 25% seats are made by Institutional Level Management Committee.</li>
      </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>B.Tech </h3>
        <p>
        The admissions in Undergraduate Engineering Programs at CBS Group of Institutions will be made on the basis of the rank obtained in the AIEEE 
        Test conducted by CBSE, New Delhi through On-Line Off-Campus counseling by NIC & Institutional level Admission/Counseling as per guidelines of State Admission Committee.
        </p>
        <ul style={listStyle}>
        <li>Admission to 75% seats of B.Tech will be made by HSCS through NIC (Policy as enunciated by State Govt).</li>
        <li>Admission to 25% seats are made by Institutional Level Management Committee.</li>
      </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>BBA</h3>
        <p>
        BBA Admissions at CBS Group of Colleges will be made on the basis of performance in the Interview 
        conducted by Institutional level Management committee
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>BCA</h3>
        <p>
        Admission will be made on the basis of performance in the Interview conducted by Institutional level Management committee.
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>M.Tech</h3>
        <p>
        CBS Group of Institutions also offers Post Graduate courses in Engineering. The admissions shall be made on the basis of the merit 
        of highest composite score obtained by a candidate in GATE Exams.
        </p>
        <ul style={listStyle}>
        <li>Admission to 100% seats are made by Institutional Level Management Committee.</li>
      </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>MBA</h3>
        <p>
        
        The MBA admissions in CBS College shall be made through On-Line Off-Campus counseling for CBS Group of Colleges on the basis of the merit of highest composite score obtained by a 
        candidate in any of the four valid MAT conducted by AIMA & Institutional level Admission/Counseling as per guidelines of State Admission Committee
        </p>
        <ul style={listStyle}>
        <li>Admission to 75% seats of MBA will be made by HSCS through NIC (Policy as enunciated by State Govt)</li>
        <li>Admission to 25% seats are made by Institutional Level Management Committee.</li>
      </ul>
      </div>
      
      <div style={sectionStyle}>
        <h3 style={boldStyle}>MCA</h3>
        <p>
        CBS Group of Institutions will conduct MCA Admissions on the basis of the merit of OLET (MCA) conducted by HSCS through NIC.
        </p>
        <ul style={listStyle}>
        <li>Admission to 75% seats of MCA will be made by HSCS through NIC (Policy as enunciated by State Govt)..</li>
        <li>Admission to 25% seats are made by Institutional Level Management Committee.</li>
      </ul>
      </div>

      <div style={sectionStyle}>
        <h3 style={boldStyle}>Diploma</h3>
        <p>
        Admission in Diploma course at CBSPolytechnic will be made on the basis of DET-2014 Rank based in inter-se merit of DET 2014.
        </p>
        <ul style={listStyle}>
        <li> 75% seat will be filled by HSTES.</li>
        <li>25% seat will be filled by institute on the basis of merit of DET 2014.</li>
      </ul>
      </div>
    </div>
  );
};

export default AdmissionProcedure;