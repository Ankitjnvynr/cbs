import React from "react";
import Link from 'next/link'
import hero1 from '/public/images/slider/slide-1.jpg'
import hero2 from '/public/images/slider/like.svg'
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";

const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero-slide">
            <div className="hero-slider-section">
                <div className="hero-bg">
                    <Image src={hero1} alt="" />
                </div>
                <div className="container-fluid">
                    <div className="content">
                        <div className="title " >
                            <div className="icon">
                                <Image src={hero2} alt="" />
                            </div>
                            <span>Create Your Dream Project With Us</span>
                        </div>
                        <div className="sub-title " >
                            <h2>Best <span>CBS COLLEGE</span> For
                                Education</h2>
                        </div>
                        <p >Your success is our success. We prioritize
                            understanding your unique business requirements,
                            tailoring solutions that not only meet your needs but also exceed your expectations.</p>
                        <div className="hero-btn">
                            <Link href="/about" className="theme-btn">Get Started<i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="video" >
                    <VideoModal />
                </div>
            </div>
        </section>

    )
}

export default Hero3;



