import React from 'react'
import abImg1 from '/public/images/about/student.jpg'
import abImg2 from '/public/images/bgdash.jpg'
import abImg3 from '/public/images/photo.jpg'
import Image from 'next/image'



const About1 = (props) => {

    return (
        <section className="about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-12">
                        <div className="about-left-content">
                            <div className="image">
                                <Image src={abImg1} alt="" style={{ width: "3300px", height: "500px" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 className="title">ABOUT COLLEGE</h2>
                            <h3 className="sub-title">Welcome to CBS College of Institutions</h3>
                            <p className="text"> <span>CBS Group of Institutions is all set to unleash a new era in the education sector of India by offering a much needed distinctive education platform to thousands of students to launch their successful careers.</span>

                            <span>CBS Group of Institutions has been established with an aim to give new direction to Engineering & professional education and has been approved by AICTE, Ministry of Human Resource Development, Govt. of India and affiliated to Maharshi Dayanand University, approved by UGC for conducting the 4 year full time B.Tech program in ME, CE, ECE, CSE, & EE, 3 year Full time programme in BBA, BCA, MCA and 2 year full time programme in M.Tech in ME, ECE, CSE, MBA and PGDM. It has been 3 glorious years since the inception of CBS Group of Institutions. It has established all the Labs necessary for conducting the practical as per AICTE norms & University curriculum. All the labs & workshop have been equipped with state-of-art equipments and accessories. </span>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <p className="text"> <span>World class infrastructure has been provided with the complete facilities like lecture rooms, well stocked library with latest journals, separate hostel facility for boys and girls, sports & recreation zone and cafeteria etc. are in place so as to conduct the curriculum and all other extra and co-curricular activities smoothly.
                                </span>  <span>CBS Group of Colleges offers an integrated curriculum that is designed towards delivering quality tertiary education in Engineering & Technology, Management & Business Studies and Computer Sciences. This, coupled with the highest standards of instruction would equip students with the requisite knowledge and skills to perform effectively in a dynamic industry environment.</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <div className="image">
                                <Image src={abImg2} alt="" style={{ width: "2000px", height: "400px",borderRadius:"20px" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-left-content">
                            <div className="image">
                                <Image src={abImg3} alt="" style={{ width: "3300px", height: "450px" }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <p className="text"><span>CBS Group of Institutions aspires to provide wings to hundreds of students’ dreams to carve niches for themselves. Backed by a team of well-trained and highly qualified academicians, the institute is committed to create a new crop of talented young professionals every year and its popularity among the aspirant professionals is sure to multiply with the passage of time. For the students of CBS Group of Institutions, only sky will be the limit and they will be aiming higher and higher to show their mettle’s. Students step into educational institutions with a goal and we are determined to help them turn their dreams into reality. A student-friendly environment will make the institute one of the most sought after institutes for the students. Students from every nook and corner of the country will come here for higher education.</span>

                            <span>CBS Group of Institutions wishes to emerge as a brand co-terminus with quality education and excellence.</span>
                            </p>
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

export default About1;



