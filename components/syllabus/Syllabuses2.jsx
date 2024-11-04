// Syllabuses.js
import React from 'react';
import SyllabusCard from './SyllabusCard';

export default function Syllabuses() {
  const btechSyllabuses = [
    {
      courseName: 'B.Tech CSE',
      type: 'G Scheme',
      rating: '4.9',
      size: '12 MB',
      downloads: '3.2k',
      icon: 'https://img.icons8.com/color/48/000000/laptop-coding.png',
      downloadLink: 'https://example.com/btech-cse-syllabus.pdf',
    },
    {
      courseName: 'B.Tech ECE',
      type: 'G Scheme',
      rating: '4.7',
      size: '10 MB',
      downloads: '1.5k',
      icon: 'https://img.icons8.com/color/48/000000/electronics.png',
      downloadLink: 'https://example.com/btech-ece-syllabus.pdf',
    },
  ];

  const bcaSyllabuses = [
    {
      courseName: 'BCA',
      type: 'All Semesters',
      rating: '4.8',
      size: '15 MB',
      downloads: '980',
      icon: 'https://img.icons8.com/color/48/000000/computer.png',
      downloadLink: 'https://example.com/bca-syllabus.pdf',
    },
  ];

  const mbaSyllabuses = [
    {
      courseName: 'MBA',
      type: 'Semester 1',
      rating: '4.8',
      size: '12 MB',
      downloads: '2.3k',
      icon: 'https://img.icons8.com/color/48/000000/business.png',
      downloadLink: 'https://example.com/mba-syllabus.pdf',
    },
  ];

  return (
    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', minHeight: '100vh' }}>
      <h2 style={sectionHeaderStyle}>B.Tech Syllabuses</h2>
      <div style={syllabusContainerStyle}>
        {btechSyllabuses.map((card, index) => (
          <SyllabusCard key={index} {...card} />
        ))}
      </div>

      <hr style={dividerStyle} />

      <h2 style={sectionHeaderStyle}>BCA Syllabus</h2>
      <div style={syllabusContainerStyle}>
        {bcaSyllabuses.map((card, index) => (
          <SyllabusCard key={index} {...card} />
        ))}
      </div>

      <hr style={dividerStyle} />

      <h2 style={sectionHeaderStyle}>MBA Syllabus</h2>
      <div style={syllabusContainerStyle}>
        {mbaSyllabuses.map((card, index) => (
          <SyllabusCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

const syllabusContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  padding: '10px 0',
};

const sectionHeaderStyle = {
  textAlign: 'center',
  margin: '20px 0',
  fontSize: '24px',
  fontWeight: 'bold',
};

const dividerStyle = {
  margin: '20px 0',
  borderTop: '2px solid #ddd',
};
