// Syllabuses.js
import React from 'react';

export default function Syllabuses() {
    const syllabusData = [
        { 
          program: 'B.Tech (All 1st Year)', 
          syllabus: 'B.TECH 1st Year All G Scheme', 
          link: '/syllabus/b.tech1styearg.pdf' 
        },
        { 
          program: 'B.Tech CSE', 
          syllabus: 'B.TECH CSE G Scheme', 
          link: '/syllabus/b.techcseg.pdf' 
        },
        { 
          program: 'B.Tech ECE', 
          syllabus: 'B.TECH ECE G Scheme', 
          link: '/syllabus/b.techeceg.pdf' 
        },
        { 
          program: 'B.Tech ME', 
          syllabus: 'B.TECH ME G Scheme', 
          link: '/syllabus/b.techmeg.pdf' 
        },
        { 
          program: 'B.Tech Civil', 
          syllabus: 'B.TECH CIVIL G Scheme', 
          link: '/syllabus/b.techcivilg.pdf' 
        },
        // { 
        //   program: 'B.Tech FTS', 
        //   syllabus: 'B.TECH FTS G Scheme', 
        //   link: '/syllabus/b.techftsg.pdf' 
        // },
        { 
          program: 'B.Tech EE', 
          syllabus: 'B.TECH EE G Scheme', 
          link: '/syllabus/b.techeeeg.pdf' 
        },
        { 
          program: 'BCA', 
          syllabus: 'BCA SYLLABUS', 
          link: '/syllabus/bca.pdf' 
        },
        { 
          program: 'BBA', 
          syllabus: 'BBA SYLLABUS', 
          link: '/syllabus/bba.pdf' 
        },
        { 
          program: 'MCA', 
          syllabus: 'MCA SYLLABUS', 
          link: '/syllabus/mca5.pdf' 
        },
        { 
          program: 'MBA', 
          syllabus: 'MBA SYLLABUS', 
          link: '/syllabus/mba4.pdf' 
        },
        { 
          program: 'M.Tech CSE', 
          syllabus: 'M.TECH CSE SYLLABUS', 
          link: '/syllabus/m.techcse.pdf' 
        },
        // { 
        //   program: 'M.Tech CFIS', 
        //   syllabus: 'M.TECH CFIS SYLLABUS', 
        //   link: '/syllabus/m.techcfis.pdf' 
        // },
        { 
          program: 'M.Tech M&A', 
          syllabus: 'M.TECH M&A SYLLABUS', 
          link: '/syllabus/m.techma.pdf' 
        },
        { 
          program: 'M.Tech MD', 
          syllabus: 'M.TECH MD SYLLABUS', 
          link: '/syllabus/m.techmd.pdf' 
        },
        // { 
        //   program: 'M.Tech EPS', 
        //   syllabus: 'M.TECH EPS SYLLABUS', 
        //   link: '/syllabus/m.techeps.pdf' 
        // },
        { 
          program: 'M.Tech ECE', 
          syllabus: 'M.TECH ECE SYLLABUS', 
          link: '/syllabus/m.techece.pdf' 
        },
        { 
          program: 'M.Tech SD', 
          syllabus: 'M.TECH SD SYLLABUS', 
          link: '/syllabus/m.techsd.pdf' 
        },
      ];
      

  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '28px', fontWeight: 'bold' }}>
       
      </h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Program</th>
            <th style={headerStyle}>Syllabus</th>
          </tr>
        </thead>
        <tbody>
          {syllabusData.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? rowEvenStyle : rowOddStyle}>
              <td style={cellStyle}>{item.program}</td>
              <td style={cellStyle}>
                <a href={item.link} style={linkStyle}>
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

const tableStyle = {
  width: '80%',
  margin: '0 auto',
  borderCollapse: 'collapse',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  backgroundColor: '#054a84',
  color: 'white',
  padding: '12px',
  textAlign: 'left',
  fontSize: '18px',
};

const rowEvenStyle = {
  backgroundColor: '#f2f2f2',
};

const rowOddStyle = {
  backgroundColor: 'white',
};

const cellStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  fontSize: '16px',
};

const linkStyle = {
  backgroundColor: '#054a84',
  color: 'white',
  padding: '8px 12px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold',
};
