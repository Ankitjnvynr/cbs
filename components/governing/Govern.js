import React from 'react';

function Govern() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundImage: 'url("/images/about/frontcbs.jpg")', // Set your background image URL here
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '15px',
        padding: '20px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        color: '#fff',
        width: '90%',
        maxWidth: '1000px'
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#ffffffcc',
          fontSize: '1.5em'
        }}>Governance Board</h2>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          color: '#ffffffcc'
        }}>
          <thead>
            <tr>
              {['Designation', 'Name', 'Mobile No.', 'E-mail ID', 'Address'].map((heading, index) => (
                <th key={index} style={{
                  padding: '10px',
                  fontWeight: 'bold',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                }}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { designation: 'Chairman', name: 'Mr. Hansraj Dhankar', mobile: '9873308899', email: 'director@cbsgroup.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
              { designation: 'President', name: 'Smt. Kamla Choudhary', mobile: '8053111666', email: 'director@cbsgroup.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
              { designation: 'Vice-President', name: 'Sh. Avtar Singh', mobile: '9873003350', email: 'director@cbsgroup.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
              { designation: 'General Secretary', name: 'Mr. Vivek Choudhary', mobile: '9711275333', email: 'Choudhary.v@gmail.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
              { designation: 'Treasurer', name: 'Smt. Krishna Choudhary', mobile: '8053111666', email: 'director@cbsgroup.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
              { designation: 'Ex-Officio Member Secretary', name: 'Dr. Narendra Dhankhar', mobile: '8053111222', email: 'director@cbsgroup.com', address: 'I.F.C.I. Appartment, Flat No. 4003, Sec-23, Dwarka, Delhi-75' },
              { designation: 'Teaching Representatives', name: 'Manoj', mobile: '9996644117', email: 'manojchsmkt@gmail.com', address: 'VPO-Pauli, Lakhan Majra, Rohtak' },
              { designation: 'Teaching Representatives', name: 'Mr. Abhishek Sharma', mobile: '9416766099', email: 'Happysharma007@gmail.com', address: '149/24, Jagdish Colony, Rohtak' },
              { designation: 'M.D. University Nominee', name: 'Requested', mobile: '-', email: '-', address: '-' },
              { designation: 'DTE Nominee (Ex-officio)', name: 'Requested', mobile: '-', email: '-', address: '-' },
              { designation: 'Industrialist Nominee (Sony Ericsson Pvt. Ltd.)', name: 'Mr. Vipin Yadav', mobile: '9582947250', email: 'vipinyraju@gmail.com', address: 'A51, Amber Block, Golf Course Extension, Gurgaon' },
              { designation: 'Nominee of AICTE-RO (Ex-officio)', name: 'Requested', mobile: '-', email: '-', address: '-' },
            ].map((item, index) => (
              <tr key={index} style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <td style={{ padding: '10px' }}>{item.designation}</td>
                <td style={{ padding: '10px' }}>{item.name}</td>
                <td style={{ padding: '10px' }}>{item.mobile}</td>
                <td style={{ padding: '10px' }}>{item.email}</td>
                <td style={{ padding: '10px' }}>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Govern;
