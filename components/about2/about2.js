import React from 'react'
import Ab from "/public/images/about/img-2.jpg"
import Ab2 from "/public/images/about/img-3.jpg"
import Ab3 from "/public/images/about/signeture.png"
import Image from 'next/image'

const About2 = () => {
    return (
        <section className="about-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-12">
                        <div className="about-left-content">
                            <div className="image-1">
                                <Image src={Ab} alt="" />
                            </div>
                            <div className="image-2">
                                <Image src={Ab2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <div className="about-right-content">
                            <h2 className="title">ABOUT COMPANY</h2>
                            <h3 className="sub-title">We Are Solving All of Your Business Problem</h3>
                            <p className="text">Our industry's business policy encompasses the strategies, guidelines, and
                                practices that technology companies use to achieve their goals and objectives. The
                                policies may vary depending on the company's size, market position, and competitive
                                landscape.
                            </p>
                            <div className="ceo-content">
                                <h2>Robert Willum</h2>
                                <span>CEO & Founder of Manit</span>
                                <div className="signeture">
                                    <Image src={Ab3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;