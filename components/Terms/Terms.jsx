import React from 'react';
import P2 from "/public/images/about/student.jpg";
import P3 from "/public/images/about/clgimg.JPG";
import Image from "next/image";

const Terms = () => {
  const sectionStyle = {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    color: '#0056b3',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    lineHeight: '1.8',
    marginBottom: '20px'
  };

  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px'
  };

  const imageStyle = {
    width: '100%',
    maxHeight: '550px',
    borderRadius: '10px',
    objectFit: 'cover'
  };

  const contentBoxStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        
        <div style={contentBoxStyle}>
          <h2 style={headingStyle}>Terms and Conditions</h2>
          <p style={paragraphStyle}>Welcome to the CBS Group of Institutions website. By accessing and using this website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our website. The content on this website is provided for informational and educational purposes only. Unauthorized use of the website, including any attempt to damage, disable, or impair its functionality, may result in legal action. Users are responsible for ensuring their compliance with all applicable laws and regulations while using the website.</p>
          <p style={paragraphStyle}>All materials on this website, including but not limited to text, images, logos, and graphics, are the exclusive property of CBS Group of Institutions or its licensors. Any reproduction, distribution, or modification of content without prior written consent is strictly prohibited.</p>
          <p style={paragraphStyle}>While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of the website’s content. CBS Group of Institutions shall not be held liable for any losses or damages arising from the use of this website.</p>
          <p style={paragraphStyle}>These terms and conditions are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts located in Haryana. We reserve the right to update or modify these terms and conditions at any time without prior notice. Please review this page periodically to stay informed of any changes. Your continued use of the website constitutes your acceptance of any updates or modifications to these terms.</p>
          
          <h3 style={headingStyle}>Acceptance of Terms</h3>
          <p style={paragraphStyle}>By accessing this website, you confirm your acceptance of these terms and conditions. Alongside this, you are also bound by our Privacy Policy.</p>

          <h3 style={headingStyle}>Website Usage</h3>
          <p style={paragraphStyle}>The content provided on this website is for informational and educational purposes only. Unauthorized use of the website may result in legal action. Users are responsible for ensuring compliance with applicable laws when accessing the website.</p>

          <h3 style={headingStyle}>Intellectual Property Rights</h3>
          <p style={paragraphStyle}>All materials on this website, including text, images, logos, and graphics, are the exclusive property of CBS Group of Institutions or its licensors. Reproduction or distribution of any content without prior written consent is strictly prohibited.</p>

          <h3 style={headingStyle}>User Responsibilities</h3>
          <p style={paragraphStyle}>While using this website, you agree not to conduct unlawful or harmful activities, attempt to breach the security of the website, or misrepresent your identity or provide false information.</p>

          <h3 style={headingStyle}>Disclaimer</h3>
          <p style={paragraphStyle}>While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of the website's content. CBS Group of Institutions shall not be held liable for any losses or damages arising from the use of this website.</p>

          <h3 style={headingStyle}>Governing Law</h3>
          <p style={paragraphStyle}>These terms and conditions shall be governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts located in Haryana.</p>

          <h3 style={headingStyle}>Amendments</h3>
          <p style={paragraphStyle}>We reserve the right to update or change these terms and conditions at any time. It is advisable to review this page periodically.</p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
  <div style={{ marginRight: '20px' }}>
    <Image src={P2} alt="Students" style={{ width: '500px', height: 'auto', borderRadius: '8px' }} />
  </div>
  <div>
    <Image src={P3} alt="Campus" style={{ width: '500px', height: 'auto', borderRadius: '8px' }} />
  </div>
</div>
<h2 style={{ textAlign: 'center', color: '#0056b3', marginTop: '20px', fontWeight: '600' }}>
  Because Every Click Comes with Responsibility.
</h2>

        </div>
      </div>
    </section>
  );
};

export default Terms;