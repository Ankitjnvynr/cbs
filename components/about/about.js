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
                                <Image src={abImg1} alt="" style={{ width: "3300px", height: "600px" }}/>
                            </div>
                            <div className="award-content">
                                <div className="icon">
                                    <Image src={abImg2} alt="" />
                                </div>
                                <h2>Success-oriented</h2>
                                <p>"Success isn't just a goal; it's a mindset. 
                                    Stay focused, stay hungry, and keep moving forward."</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 className="title">ABOUT COLLEGE</h2>
                            <h3 className="sub-title">College isn’t just about getting degree; it’s about building skills and a mindset for success.</h3>
                            <p className="text">"Welcome to CBS College, where knowledge fuels innovation and ambition shapes the future. 
                                Here, we don’t just teach; we empower minds to lead, create, and transform the world with technology and expertise. With a dynamic learning environment and industry-driven curriculum, we bridge the gap between education and excellence. 
                                Join us to unlock your potential and step into a future of endless possibilities!"
                                <span>"Our mission is simple yet powerful – to deliver innovative and 
                                    tailored IT solutions that perfectly align with your business goals. 
                                    We don’t just meet expectations; we redefine them, ensuring excellence at every step."</span>
                            </p>
                            {/* <div className="ceo-content">
                                <h2>Dr. Rajiv Yadav</h2>
                                <span>Director</span>
                                <div className="signeture">
                                    <Image src={Signeture} alt="" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <svg width="429" height="593" viewBox="0 0 429 593" fill="none">
                    <circle cx="296.5" cy="296.5" r="296.5" fill="url(#cc318_1506)" />
                    <defs>
                        <radialGradient id="cc318_1506" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(296.5 296.5) rotate(90) scale(296.5)">
                            <stop offset="0" stopColor="#CED0FF" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="shape-2">
                <svg width="529" height="529" viewBox="0 0 529 529" fill="none">
                    <circle cx="264.5" cy="264.5" r="264.5" fill="url(#oo1508)" />
                    <defs>
                        <radialGradient id="oo1508" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(264.5 264.5) rotate(90) scale(264.5)">
                            <stop offset="0" stopColor="#FBB132" stopOpacity="0.2" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default About;



