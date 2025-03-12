import React from 'react'

const Bba = () => {
    const containerStyle = {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundImage: "url('https://source.unsplash.com/random/?education,building')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const  heading = {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'left',
    };
  
    const cardStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      borderRadius: '1.5rem',
      padding: '2rem',
      width: '100%',
      maxWidth: '900px',
      fontFamily: 'Arial, sans-serif',
      color: '#000000', // Black font color for contrast
    };
  
    const headingStyle = {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#000000', // Black font color for heading
      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
    };
  
    const paragraphStyle = {
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '1rem',
      color: '#000000', // Black font color for paragraphs
    };

    const imageWrapper = {
      width: '100%',
    };
  
    const listStyle = {
      listStyleType: 'disc',
      paddingLeft: '1rem',
      marginBottom: '1rem',
      lineHeight: '1.75',
    };

    const image = {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    };
  
    const listItemStyle = {
      marginBottom: '0.75rem',
      color: '#000000', // Black font color for list items
    };
  
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>

        <div style={imageWrapper}>
          <img
            src="/images/bba.jpg" // Replace with the correct image path
            alt="CivilEngineering-CBSGroup"
            style={image}
          />
          
        </div>
          <br />
          
          <p style={paragraphStyle}>
          BBA or Bachelor of Business Administration refers to the bachelor’s degree course in
           business management studies. This degree has achieved worldwide recognition and
            universities worldwide have begun offering BBA programme The BBA program at CBS 
            Group of Institutions is directed at preparing students for the challenges of supervisory
             and middle-level management positions in the public or private sector. 
             The BBA programme at CBS blends the three core disciplines of management,
              communication and information system into a balanced program providing 
              the contemporary manager with effective skills. In addition, the program 
              offers general business courses to broaden the prospective manager’s knowledge base.

          </p>

          <p style={paragraphStyle}>
          Management education can play a crucial role in turning the wheel of success in the present market. 
          Globalization and international inter-dependence have brought forth challenges and opportunities 
          before the Indian Economy and this is where management studies prove to be the most significant driver. 
          In this rapidly changing society, there are a lot more opportunities for students who have gained 
          the competence to apply their knowledge and skill to business strategy. 
          </p>

          <h1 style={heading}>Objectives</h1>
          <h1 style={heading}>We at CBS Group of Institutions aim at realizing the following objectives </h1>
          <ul style={listStyle}>
            <li style={listItemStyle}>
            To communicate effectively through writing and in interpersonal communication.
            </li>
            <li style={listItemStyle}>
            To use information and communication technology effectively.
            </li>
            <li style={listItemStyle}>
            To make informed decisions in the selection, utilization and evaluation of information technology.
            </li>
            <li style={listItemStyle}>
            To interate and manage administrative systems.
            </li>
            <li style={listItemStyle}>
            To apply contemporary theories of organizational behavior.
            </li>
            <li style={listItemStyle}>
            To manage administrative function with respect to planning, organizing, staffing and controlling.
            </li>
            {/* <li style={listItemStyle}>
            After the results of various examinations received from the University, distribution of marks sheets to Students.
            </li>
            <li style={listItemStyle}>
            The Exam cell analyzes all examination results and in consultation with the Director-Principal, 
            prepares the report thereof for submission to appropriate authorities for follow up action.
            </li>
            <li style={listItemStyle}>
            The University Degree Certificates received from the University by the institute are sent to the students concerned by the Exam cell.
            </li>
            <li style={listItemStyle}>
            Exam Cell compiles all inputs for preparation and organizing the Convocation.

            </li> */}
            {/* <li style={listItemStyle}>
              Exemplary behavior, discipline, and good conduct are expected at all
              times. CBS is not responsible for misconduct or mishaps outside the
              premises.
            </li>
            <li style={listItemStyle}>
              Ragging is strictly prohibited. In accordance with the Supreme Court
              of India, any student involved in ragging will be given a chance to
              explain. If unsatisfactory, the student will be expelled.
            </li> */}
          </ul>

         
  
          
        </div>
      </div>
    );
  };

export default Bba
