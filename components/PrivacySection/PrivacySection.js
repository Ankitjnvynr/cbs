
import P1 from "/public/images/terms/privacy-img.jpeg"
import P2 from "/public/images/terms/third-party.jpg"
import P3 from "/public/images/terms/children-privacy.jpeg"
import Accordion from "./accordion"
import Image from "next/image"

const PrivacySection = () => {

    return(
        <section className="pf-terms-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                    {/* <h2 style={{fontSize:"3rem",textAlign:"center",marginBottom:"2rem"}}> Privacy & Policy</h2> */}
                        <div className="pf-terms-wrap">
                            <div className="pf-terms-img">
                                <Image src={P1} alt="privacy-policy-image" style={{borderRadius:"0.5rem",boxShadow:" 10px 10px 20px rgba(0, 0, 0, 0.5)"}}/>
                            </div>
                            <div className="pf-terms-text">
                                
                                <p>
                                At CBS Group of Institutions, we respect and prioritize the privacy 
                                of our website visitors, students, faculty, and stakeholders.
                                 This Privacy Policy outlines how we collect, use, protect,
                                  and share your information when you access our website.</p>
                               
                                 <h3> Information We Collect</h3>
                                <ul>
                                    <li><span style={{fontSize:"1.1rem",fontWeight:"bold"}}>Personal Data:</span> Your name, email address, phone number, mail, student or employee ID, and other identifying details provided voluntarily.</li>
                                    <li><span style={{fontSize:"1.1rem",fontWeight:"bold"}}>Technical Data: </span>Your browser type, IP address, device information, and pages accessed on our website.</li>
                                    <li><span style={{fontSize:"1.1rem",fontWeight:"bold"}}>Educational Data:</span> Enrollment details, course preferences, and related academic records.</li>
                                </ul>

                                <h3> How We Use Your Information</h3>
                                <ul>
                                    <li>Offer academic and administrative support.</li>
                                    <li>Enhance website performance and improve user experience.</li>
                                    <li>Respond to inquiries and provide requested information.</li>
                                    <li>Process admissions, registrations, and applications.</li>
                                    <li>Maintain security and prevent unauthorized access.</li>
                                    <li>Fulfill legal and institutional responsibilities.</li>
                                </ul>
                                <div className="row t-sub">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="pf-p-details-img">
                                            <Image src={P3} alt="children-privacy-image" style={{borderRadius:"20px",width:"30rem",height:"28rem",boxShadow:" 10px 10px 20px rgba(0, 0, 0, 0.5)"}}/>
                                        </div>
                                        <div style={{textAlign:"left",width:"30rem"}}>
                                        <h3> Children's Privacy:</h3>
                                        <p style={{marginBottom:"1.6rem"}}>We do not intentionally collect personal information from children under the age of 13 without verified parental consent.</p>
                           
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="pf-p-details-img"  >
                                            <Image src={P2} alt="privacy-policy-image" style={{borderRadius:"20px",width:"30rem",height:"28rem",boxShadow:" 10px 10px 20px rgba(0, 0, 0, 0.5)"}} />
                                        </div>
                                        <div style={{textAlign:"left",width:"30rem"}}>
                                        <h3>Third-Party Links:</h3>
                                        <p style={{marginBottom:"1.6rem"}}>Our website may include links to external sites. We are not responsible for their privacy practices and encourage users to review the privacy policies of third-party websites before providing any personal information.</p>
                                        </div>
                                    </div>
                                </div>
                                <h3> How We Use Your Information</h3>
                                <p >We do not sell or trade personal data. However, we may share information with:</p>
                                <ul>
                                    <li>Relevant college departments and staff for administrative and academic purposes.</li>
                                    <li>Third-party service providers who assist in website maintenance, IT support, or data analysis.</li>
                                    <li>Legal or governmental authorities when required by law.</li>
                                </ul>

                                <h3> Cookies and Tracking Technologies:</h3>
                                <p style={{marginBottom:"1.6rem"}}>Our website may use cookies to optimize user experience. You have the option to manage cookie settings through your browser. Disabling cookies may impact certain functionalities of the site.</p>

                               
                               
                                <h3>Data Protection Measures:</h3>
                                <p style={{marginBottom:"1.6rem"}}>We implement strict security protocols to protect your data from unauthorized access or misuse. However, since no online system is completely secure, we encourage users to take necessary precautions.</p>
                            
                                <h3> Policy Updates:</h3>
                                <p style={{marginBottom:"1.6rem"}}>We may revise this Privacy Policy periodically. Any changes will be reflected on this page with an updated effective date.</p>  

                                <h3>Contact Information:</h3>
                                <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
                                <ul>
                                    <li>CBS Group of Institutions</li>
                                    <li>8 KM. Mile Stone, Jhajjar-Kosli Road,
                                    Fatehpuri , Jhajjar Delhi-NCR (Haryana)</li>
                                    <li>director@cbscolleges.com</li>
                                    <li>+91-8053111444</li>
                                    <li>+91-8053111333</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PrivacySection;