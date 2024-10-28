import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component

const Hostel = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
    imageWrapper: {
      width: '100%',
      maxWidth: '800px',
      height: '400px',
      position: 'relative',
      marginBottom: '20px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    paragraph: {
      maxWidth: '800px',
      marginBottom: '16px',
      lineHeight: '1.6',
      textAlign: 'justify',
    },
    list: {
      maxWidth: '800px',
      marginBottom: '16px',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
    finalText: {
      marginTop: '20px',
      fontWeight: '600',
      fontSize: '18px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hostel Facilities at CBS Group of Institutions</h1>
      
      {/* Image Section */}
      <div style={styles.imageWrapper}>
        <Image
          src="/images/hostel_(1).jpg" // Replace with the correct image path
          alt="Hostel Facilities at CBS Group"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Section */}
      <p style={styles.paragraph}>
        CBS Group of Institutions offers separate apartment-style hostels for boys and girls, 
        situated on the campus itself. This proximity ensures easy access between the institute 
        and students, making it convenient for them to attend classes and participate in campus activities.
      </p>
      <p style={styles.paragraph}>
        Students have the option to select air-conditioned (A/C) rooms, providing comfort during all seasons. 
        The hostel can accommodate around 250 students, offering a perfect blend of comfort, safety, and community life.
      </p>
      <p style={styles.paragraph}>
        The hostels at CBS Group of Institutions are more than just places to stay—they foster a nurturing 
        environment that feels like an extended home. Students are provided with home-like comforts, ensuring 
        they feel at ease while living away from their families.
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Separate hostels for boys and girls</li>
        <li style={styles.listItem}>Air-conditioned (A/C) rooms available</li>
        <li style={styles.listItem}>Capacity to accommodate 250 students</li>
        <li style={styles.listItem}>
          Warm, caring environment designed to foster emotional and social well-being
        </li>
      </ul>
      <p style={styles.paragraph}>
        The hostels provide both structure and freedom, balancing students' personal growth with academic success. 
        Through conscientious efforts, the atmosphere encourages students to grow emotionally, mentally, spiritually, 
        physically, and socially, making them feel at home away from home.
      </p>
      <div style={styles.finalText}>
        Join us and experience a home-like atmosphere while pursuing your academic goals!
      </div>
    </div>
  );
};

export default Hostel;
