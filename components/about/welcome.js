import React from 'react';
import Image from 'next/image';
import abImg1 from '/public/images/about/frontcbs.jpg';
import abImg2 from  '/public/images/CBSJHL-3228.JPG' ;


const Welcome = () => {
  return (
    <section className="about-section section-padding">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#2563eb' }}>
    A Hub of Excellence in Engineering & Professional Education
  </h2>
  </div>
      <div className="container">
        <div className="row align-items-center">
          {/* First Section - Text Left, Image Right */}
          <div className="col-xl-6 col-12">
            <div className="about-right-content">
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
                CBS Group of Institutions is committed to redefining engineering and professional education, shaping future leaders, and driving innovation. Approved by AICTE and the Ministry of Human Resource Development, our institution is affiliated with Maharshi Dayanand University and recognized by UGC for offering world-class academic programs.
              </p>
              <div style={{ background: '#f3f4f6', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '20px' }}>Programs We Offer</h2>
                  
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937' }}>✅ Undergraduate Programs:</h3>
                  <ul style={{ listStyle: 'none', padding: '0', fontSize: '18px', color: '#4b5563' }}>
                    <li>• B.Tech (4-Year Full-Time) – Specializations in ME, CE, ECE, CSE, EE</li>
                    <li>• BBA – Develop leadership and management skills</li>
                    <li>• BCA – Build a strong foundation in IT & software development</li>
                  </ul>

                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginTop: '20px' }}>✅ Postgraduate Programs:</h3>
                  <ul style={{ listStyle: 'none', padding: '0', fontSize: '18px', color: '#4b5563' }}>
                    <li>• M.Tech (2-Year Full-Time) – Specializations in ME, CE, ECE, EE, CSE</li>
                    <li>• MBA – Advance your career in business and management</li>
                    <li>• MCA – A specialized course in advanced computing and IT</li>
                  </ul>
                </div>
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="about-right-content">
              <Image src={abImg1} alt="CBS College" style={{ width: "100%", height: "500px", borderRadius: "15px" }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Section - Image Left, Text Right */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-xl-6 col-12">
            <div className="about-right-content">
              <Image src={abImg2} alt="CBS Campus" style={{ width: "100%", height: "500px", borderRadius: "15px" }} />
            </div>
          </div>
          <div className="col-xl-6 col-12">
            <div className="about-right-content">
              <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
                Since its inception 15 years ago, CBS Group of Institutions has been dedicated to academic excellence, hands-on learning, and career-oriented education. Our state-of-the-art infrastructure, industry collaborations, and expert faculty ensure that students gain real-world skills and are prepared for high-demand careers in engineering, business, and technology.
              </p>
              <div style={{ width: '100%', background: '#f3f4f6', padding: '20px 20px', marginTop: '10px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
          Why Choose CBS Group of Institutions?
        </h2>
        <ul style={{ listStyle: 'none', padding: '0', fontSize: '18px', color: '#4b5563',textAlign:'left' }}>
  <li style={{ marginBottom: '10px' }}>• AICTE & UGC Approved Programs – Ensuring quality education and industry relevance.</li>
  <li style={{ marginBottom: '10px' }}>• Strong Industry Tie-Ups – Internships, placements, and corporate training</li>
  <li style={{ marginBottom: '10px' }}>• Experienced Faculty & Mentorship – Learn from industry experts.</li>
  <li style={{ marginBottom: '10px' }}>• Career-Focused Curriculum – Bridging the gap between education and employment.</li>
</ul>
      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
