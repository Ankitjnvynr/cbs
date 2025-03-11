import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import About from "../../components/about/about";
import VideosSection from "../../components/VideosSection/VideosSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import CtaSection from "../../components/CtaSection/CtaSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import About1 from "../../components/about/about1";

const AboutPage = () => {
  return (
    <Fragment>
      <head>
        <title>About us -CBS Group of Institutions</title>
        <meta
          name="description"
          content="Learn about CBS Group of Institutions — a hub of academic excellence, innovation, and student success. Explore our history, values, faculty, and vibrant campus life that shape future leaders."
        />
        <meta
          name="keywords"
          content="About CBS Group of Institutions, Top Engineering & Management College in Haryana, Best Private College in NCR for UG & PG Courses, CBS Group of Institutions Vision & Mission, CBS Group Leadership & Academic Excellence, AICTE & UGC Approved College in Haryana, CBS Group of Institutions Ranking & Accreditation, Top-Ranked Private institutionsfor Engineering & MBA, CBS Group of Institutions Campus & Infrastructure, CBS Group Educational Excellence & Achievements"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" />
        <link rel="canonical" href="https://www.cbscolleges.com/about-us" />
      </head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About1 />
      {/* <VideosSection /> */}
      {/* <TestimonialSection /> */}
      {/* <CtaSection /> */}
      {/* <BlogSection /> */}
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};
export default AboutPage;
