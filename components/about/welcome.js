import React from 'react'
import abImg1 from '/public/images/about/frontcbs.jpg'
import abImg2 from '/public/images/about/award-icon-2.svg'
import Signeture from '/public/images/about/signeture.png'
import Image from 'next/image'



const Welcome = (props) => {

    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 className="title">WELCOME</h2>
                            <h3 className="sub-title">WELCOME</h3>
                            <p className="text">CBS Group of Institutions has been established with an aim to give new direction to Engineering & professional education and has been approved by AICTE, Ministry of Human Resource Development, Govt. of India and affiliated to Maharshi Dayanand University, approved by UGC for conducting the 4 year full time B.Tech program in ME, CE, ECE, CSE, & EE, 3 year Full time programme in BBA, BCA, MCA and 2 year full time programme in M.Tech in ME, ECE, CSE, MBA and PGDM. It has been 3 glorious years since the inception of CBS Group of Institutions.
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
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <div className="image">
                                <Image src={abImg1} alt="" style={{ width: "700px", height: "450px",borderRadius:"15px"}}/>
                            </div>
                            {/* <div className="award-content">
                                <div className="icon">
                                    <Image src={abImg2} alt="" />
                                </div>
                                <h2>Success-oriented</h2>
                                <p>"Success isn't just a goal; it's a mindset. 
                                    Stay focused, stay hungry, and keep moving forward."</p>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 className="title">Welcome</h2>
                            <h3 className="sub-title">Welcome</h3>
                            <p className="text">CBS Group of Institutions has been established with an aim to give new direction to Engineering & professional education and has been approved by AICTE, Ministry of Human Resource Development, Govt. of India and affiliated to Maharshi Dayanand University, approved by UGC for conducting the 4 year full time B.Tech program in ME, CE, ECE, CSE, & EE, 3 year Full time programme in BBA, BCA, MCA and 2 year full time programme in M.Tech in ME, ECE, CSE, MBA and PGDM. It has been 3 glorious years since the inception of CBS Group of Institutions.
                            </p>
                            <div className="ceo-content">
                                <h2>Dr. Rajiv Yadav</h2>
                                <span>Director</span>
                                <div className="signeture">
                                    <Image src={Signeture} alt="" />
                                </div>
                            </div>
                        </div>
                    </div> */}
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

export default Welcome;



