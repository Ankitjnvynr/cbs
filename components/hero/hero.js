import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CountUp from "react-countup";
import Image from "next/image";
import Typewriter from "typewriter-effect";

// Swiper core components
import { Pagination, Navigation, Autoplay } from "swiper";

// Importing images
import BookShape from "/public/images/slider/book.svg";
// import liderd11 from "/public/images/slider/1.p";
import liderd13 from "/public/images/slider/slider1.jpg";
import liderd14 from "/public/images/slider/slider2.jpg";
import liderd15 from "/public/images/slider/slider3.png";
// import liderd16 from "/public/images/slider/1.png";
import Arrow from "/public/images/slider/award.svg";
import himg1 from "/public/images/slider/img-1.jpg";
import himg2 from "/public/images/slider/img-2.jpg";
import himg3 from "/public/images/slider/img-3.jpg";
import himg4 from "/public/images/slider/img-4.jpg";
import himg5 from "/public/images/slider/img-2.jpg";

const Hero = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="static-hero">
      <div className="container-fluid">
        <div className="content">
          <div className="title">
            <div className="icon">
              <Image
                src={BookShape}
                alt="Book Shape Icon"
                width={50}
                height={50}
              />
            </div>
            <span>Have great learning</span>
          </div>
          <div className="sub-title">
            <h2>
              <span>CBS INSTITUTIONS</span>
               <br /> 
             
              <Typewriter
              
              options={{
                strings: ["For Best Education", "For Best Placement","For Best Campus"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
              style={{ color: 'red' }}
            />
              
            </h2>
          </div>
          <p>
            Your success is our success. We prioritize understanding your unique
            business requirements, tailoring solutions that not only meet your
            needs but also exceed your expectations.
          </p>
          <div className="hero-btn">
            <Link href="/" className="theme-btn" onClick={ClickHandler}>
              Go to Alumni<i className="ti-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Swiper Slider */}
      <div style={{}} className="image">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          
        >
          {/* <SwiperSlide>
                        <Image src={l} alt="Slide Image 1" width={500} height={500} />
                    </SwiperSlide> */}
          <SwiperSlide>
            <Image
              src={liderd13}
              alt="Slide Image 2"
              width={300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={liderd14}
              alt="Slide Image 3"
              width={300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={liderd15}
              alt="Slide Image 4"
              width={300}
              height={500}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
                        <Image src={liderd16} alt="Slide Image 5" width={500} height={500} />
                    </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="award">
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

      {/* Additional Shapes */}
      <div className="shape-1">
        <svg width="362" height="481" viewBox="0 0 362 481" fill="none">
          <circle cx="121.5" cy="240.5" r="240.5" fill="url(#paint_505)" />
          <defs>
            <radialGradient
              id="paint_505"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(121.5 240.5) rotate(90) scale(240.5)"
            >
              <stop offset="0" stopColor="#CED0FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="shape-2">
        <svg width="593" height="593" viewBox="0 0 593 593" fill="none">
          <circle cx="296.5" cy="296.5" r="296.5" fill="url(#paint0_318)" />
          <defs>
            <radialGradient
              id="paint0_318"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(296.5 296.5) rotate(90) scale(296.5)"
            >
              <stop offset="0" stopColor="#CED0FF" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="shape-3">
        <svg width="358" height="484" viewBox="0 0 358 484" fill="none">
          <circle cx="296.5" cy="187.5" r="296.5" fill="url(#paint0_rad)" />
          <defs>
            <radialGradient
              id="paint0_rad"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(296.5 187.5) rotate(90) scale(296.5)"
            >
              <stop offset="0" stopColor="#FBB132" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
