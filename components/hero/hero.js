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
    <section className="hero-slide ">
      <div
        style={{
          paddingTop: 150,
        }}
        className="hero-slider-section"
      >
        <div className="hero-bg">
          <Image src={hero1} alt="" />
        </div>
        <div className="container-fluid">
          <div className="content mt-10 ">
            <div className="title ">
              <div className="icon">
                <Image src={hero2} alt="" />
              </div>
              <span>have a great Learning</span>
            </div>
            <div className="sub-title ">
              <h1
                style={{
                  flexDirection: "column",
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0))",
                  // backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)", // For Safari support
                  //borderRadius: "10px", // Optional: Add some rounding for a glass panel effect
                  //border: "1px solid rgba(255, 255, 255, 0.2)", // Optional: A subtle border for emphasis
                  maxWidth: 500,
                  paddingLeft: 3,
                }}
              >
                <span>CBS GROUP OF INSTITUTIONS</span>
              </h1>
              <h2
                style={{
                  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.9)",
                }}
              >
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
            </div>

            <p
              style={{
                flexDirection: "column",
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)", // For Safari support
                borderRadius: "10px", // Optional: Add some rounding for a glass panel effect
                border: "1px solid rgba(255, 255, 255, 0.2)", // Optional: A subtle border for emphasis
                maxWidth: 500,
                padding: 10,
                //textShadow: "2px 2px 5px rgba(0, 0, 0, 0.9)",
                // color:'black',
                lineHeight: "25px",
              }}
            >
              Your success is our success. We prioritize understanding your
              unique business requirements, tailoring solutions that not only
              meet your needs but also exceed your expectations.
            </p>
            <div className="hero-btn">
              <Link href="/about" className="theme-btn border ">
                Go To Alumni<i className="ti-arrow-right"></i>
              </Link>
              <div
              style={{
                zIndex: 100,
                backdropFilter: "blur(3px)", // Adds the blur for the glass effect
                backgroundColor: "rgba(255, 255, 255, 0.5)", // Lightens the background with some transparency
                borderRadius: "40px", // Optional, for rounded corners
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", // Optional, adds a subtle shadow to lift the glass effect
                border: "1px solid rgba(255, 255, 255, 0.7)", // Optional, a soft border to enhance the glass effect
             
              }}
                className="award"
              >
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
          <div className="left-bar" >

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
