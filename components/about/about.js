import React from 'react'
import abImg1 from '/public/images/about/student.jpg'
import abImg2 from '/public/images/about/award-icon-2.svg'
import Signeture from '/public/images/about/signeture.png'
import Image from 'next/image'

const About = (props) => {
    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-12">
                        <div className="about-left-content">
                            <div className="image">
                                <Image src={abImg1} alt="" style={{ width: "100%", height: "600px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#2563eb', paddingTop:'63px' }}>
                                Welcome to CBS College – Empowering Future Innovators
                            </h2>
                            <h3 style={{ fontSize: '24px', fontWeight: '600', color: '#1f2937', marginBottom: '20px' }}>
                                Where Knowledge Ignites Innovation & Ambition Shapes the Future.
                            </h3>
                            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6' }}>
                                At CBS College, we believe that education is more than just earning a degree—it’s about developing 
                                industry-ready skills, fostering critical thinking, and preparing for a successful future in technology 
                                and business. Our career-focused programs are designed to bridge the gap between academic learning and 
                                real-world expertise.
                            </p>
                        </div>

                        <div style={{ background: '#f3f4f6', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '20px' }}>
                                Why Choose CBS College?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: '0', fontSize: '18px', color: '#4b5563' }}>
  <li style={{ marginBottom: '10px' }}>• Industry-Relevant Courses – Stay ahead with cutting-edge tech and business programs</li>
  <li style={{ marginBottom: '10px' }}>• Hands-On Learning – Gain practical experience with internships, live projects, and workshops</li>
  <li style={{ marginBottom: '10px' }}>• Expert Faculty & Mentorship – Learn from experienced professionals and industry leaders</li>
  <li style={{ marginBottom: '10px' }}>• Career Support & Placement Assistance – Connect with top employers and secure your dream job</li>
</ul>

                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission Section Outside Container */}
            <div style={{ width: "100%", background: "#f9fafb", padding: "50px 20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
    <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#2563eb' }}>
        Our Mission: Excellence Through Innovation
    </h2>
    <p style={{ fontSize: '18px', color: '#374151', lineHeight: '1.6', maxWidth: "1000px", margin: "0 auto",textAlign:'center' }}>
        CBS College is dedicated to delivering innovative, tailored IT solutions that align with evolving business 
        and technology trends. We don’t just meet expectations—we exceed them, ensuring excellence at every step.
    </p>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px', textAlign: 'center' }}>
        <a href="/online-registration-form/">Join</a> CBS College today and step into a future of endless opportunities!
    </h2>
</div>

        </section>
    )
}

export default About;
