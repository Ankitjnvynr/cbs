import React from "react";
import Link from "next/link";
import hero1 from "/public/images/slider/slider-1abc.jpg";
import hero2 from "/public/images/slider/like.svg";
import VideoModal from "../ModalVideo/VideoModal";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Arrow from "/public/images/slider/award.svg";
import CountUp from "react-countup";

const Hero3 = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="hero-slide">
      <div className="hero-slider-section">
        <div className="hero-bg">
          <Image src={hero1} alt="" />
        </div>
        <div className="container-fluid">
          <div className="content pt-10 ">
            <div className="title ">
              <div className="icon">
                <Image src={hero2} alt="" />
              </div>
              <span>have a great Learning</span>
            </div>
            <div className="sub-title ">
              <h1>
                Best <span>CBS COLLEGE</span> 
              </h1>
            </div>
           <h2>
           <Typewriter
              options={{
                strings: [
                  "For Best Education",
                  "For Best Placement",
                  "For Best Campus",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
              style={{ color: "red" }}
            />
           </h2>
            <p>
              Your success is our success. We prioritize understanding your
              unique business requirements, tailoring solutions that not only
              meet your needs but also exceed your expectations.
            </p>
            <div className="hero-btn">
              <Link href="/about" className="theme-btn">
                Get Started<i className="ti-arrow-right"></i>
              </Link>
              <div style={{
        zIndex:100
      }} className="award">
        <div className="icon">
          <Image src={Arrow} alt="Award Icon" width={50} height={50} />
        </div>
        <div className="text">
          <h3>
            <span>
              <CountUp enableScrollSpy end={25} />
            </span>
            +
          </h3>
          <span>Years Of Experience</span>
        </div>
      </div>
            </div>
          </div>
        </div>
        {/* <div className="video" >
                    <VideoModal />
                </div> */}
      </div>
    </section>
  );
};

export default Hero3;
