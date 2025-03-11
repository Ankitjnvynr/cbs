import React from 'react'

const Examination = () => {
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
  
    const listStyle = {
      listStyleType: 'disc',
      paddingLeft: '1rem',
      marginBottom: '1rem',
      lineHeight: '1.75',
    };
  
    const listItemStyle = {
      marginBottom: '0.75rem',
      color: '#000000', // Black font color for list items
    };
  
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>
          About Examination Cell
          </h1>
  
          <p style={paragraphStyle}>
          There is an Examination Cell (Exam Cell) headed by the Controller of Examinations with 
          supporting staff. Conduction of all examinations is the prime responsibilities of the Exam cell. 
          Further, Exam cell coordinates with the University regarding all examination matters.
           The Controller of Examinations supports the Director-Principal in regards to all examination matters.
            Any information either received or required to be sent to the University are being dealt with in the
             Exam cell.
          </p>

          <h1 style={headingStyle}>
          The Responsibilities of the Cell
          </h1>
  
          <ul style={listStyle}>
            <li style={listItemStyle}>
            Any Circular, Guideline, Office Order, Notification received by the institute are processed in the Exam cell, 
            reply thereof prepared and after Director-Principal’s signature dispatched to the University.
            </li>
            <li style={listItemStyle}>
            Examination Notices received from the University are duly served to all concerned
            </li>
            <li style={listItemStyle}>
            The Notices for University indicating details regarding Fee Collection, the last date of fee Collection, 
            modalities of payments of fine etc.
            </li>
            <li style={listItemStyle}>
            Preparation of smooth conduct of Examinations, preparation of Time table, 
            Invigilation duty chart, Seat allotment in the Examination halls etc.
            </li>
            <li style={listItemStyle}>
            During the Examination time, proper staff mobilization, assigning the duty as per the duty chart already prepared.
            </li>
            <li style={listItemStyle}>
            After completion of examination, distribution of Answer books to the concerned teachers and receiving the answer books and award list, 
            and preparing in the desired format to send them to University.
            </li>
            <li style={listItemStyle}>
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

            </li>
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

export default Examination
