import React from 'react';

function Approval() {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
            <img
             src="documents/HD-AICTE.png"
            alt="Dr. Rajiv Yadav"
            style={imageStyle}
          />
                <h3 style={styles.cardTitle}>AICTE Certification</h3>
                <p style={styles.cardDescription}>
                    Download the official AICTE certification document to verify our accreditation.
                </p>
                <a 
                 href="documents/AICTE Approval.pdf" 
                    style={styles.downloadButton} 
                    download
                >
                    Download AICTE Certification
                </a>
            </div>

            <div style={styles.card}>
            <img
            src="documents/mdu.png"
            alt="Dr. Rajiv Yadav"
            style={imageStyle}
          />
                <h3 style={styles.cardTitle}>Affiliation Certification</h3>
                <p style={styles.cardDescription}>
                    Download the affiliation certification document for our institution.
                </p>
                <a 
                    href="documents/affiliation.pdf" 
                    style={styles.downloadButton} 
                    download
                >
                    Download Affiliation Certification
                </a>
            </div>
        </div>
    );
}

export default Approval;

const styles = {
    
    container: {
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        justifyContent:'center',
        paddingTop:'5rem',
        flexWrap:'wrap',
    },
    card: {
        backgroundColor: 'white',
        color: 'black',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
        width: '300px',
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    cardDescription: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    downloadButton: {
        display: 'inline-block',
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#064d83',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '16px',
    }
    
};
const imageStyle = {
    width: '170px',
    height: '170px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
  };

