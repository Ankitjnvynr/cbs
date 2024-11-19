import React from 'react';

function Govern() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundImage: 'url("/images/about/frontcbs.jpg")',
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
        maxWidth: '1000px',
        overflowX: 'auto' // Enable horizontal scrolling for smaller screens
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#ffffffcc',
          fontSize: '1.5em'
        }}>Governance Board</h2>
        <div style={{
          overflowX: 'auto', // Allows table to scroll on smaller screens
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            color: '#ffffffcc',
            minWidth: '600px' // Minimum width to maintain structure on smaller screens
          }}>
            <thead>
              <tr>
                {['Designation', 'Name', 'Mobile No.', 'E-mail ID', 'Address'].map((heading, index) => (
                  <th key={index} style={{
                    padding: '10px',
                    fontWeight: 'bold',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    fontSize: '0.9em'
                  }}>{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { designation: 'Chairman', name: 'Mr. Hansraj Dhankar', mobile: '9873308899', email: 'director@cbscolleges.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
                { designation: 'President', name: 'Smt. Kamla Choudhary', mobile: '8053111666', email: 'director@cbscolleges.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
                { designation: 'Vice-President', name: 'Sh. Avtar Singh', mobile: '9873003350', email: 'director@cbscolleges.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
                { designation: 'General Secretary', name: 'Mr. Vivek Singh Choudhary', mobile: '9711275333', email: 'Choudhary.v@gmail.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
                { designation: 'Treasurer', name: 'Smt. Krishna Choudhary', mobile: '8053111666', email: 'director@cbscolleges.com', address: 'H.No. 37, Ashok Vihar, Phase-I, Delhi-52' },
                { designation: 'Ex-Offico Member Secretary (Director-General)', name: 'Dr. Narendra Dhansoia', mobile: '8053111444', email: 'ceo@cbscolleges.com', address: 'Director Residence, CBS Collleges' },
                { designation: 'Teaching Representatives', name: 'Manoj', mobile: '9996644117', email: 'manojchsmkt@gmail.com', address: 'VPO-Pauli, Lakhan Majra, Jind' },
                { designation: 'Teaching Representatives', name: 'Mr. Abhishek Sharma', mobile: '9416766099', email: 'Happysharma007@gmail.com', address: '149/24, Jagdish Colony, Rohtak' },
                { designation: 'M.D. University Nominee', name: '-', mobile: '-', email: '-', address: '-' },
                { designation: 'DTE Nominee (Ex-officio)', name: 'Requested', mobile: '-', email: '-', address: '-' },
                { designation: 'Industrialist Nominee (Sony Ericsson Pvt. Ltd.)', name: 'Mr. Vipin Yadav', mobile: '9582947250', email: 'vipinraju@gmail.com', address: 'A51, Amber Block, Golf Course Extension, Gurgaon' },
                { designation: 'Nominee of AICTE-RO (Ex-officio)', name: 'Requested', mobile: '-', email: '-', address: '-' },
              ]
                .map((item, index) => (
                  <tr key={index} style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <td style={{ padding: '10px', fontSize: '0.85em' }}>{item.designation}</td>
                    <td style={{ padding: '10px', fontSize: '0.85em' }}>{item.name}</td>
                    <td style={{ padding: '10px', fontSize: '0.85em' }}>{item.mobile}</td>
                    <td style={{ padding: '10px', fontSize: '0.85em' }}>{item.email}</td>
                    <td style={{ padding: '10px', fontSize: '0.85em' }}>{item.address}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Govern;
