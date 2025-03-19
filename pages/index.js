import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import FunfactSecion from '../components/FunfactSection/FunfactSection';
import About from '../components/about/about';
import Welcome from '../components/about/welcome';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import VideosSection from '../components/VideosSection/VideosSection';
// import ProjectSection from '../components/ProjectSection/ProjectSection';
import ProjectSection1 from '../components/ProjectSection/ProjectSection1';
import TestimonialSection from '../components/TestimonialSection/TestimonialSection';
import CtaSection from '../components/CtaSection/CtaSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import CursorMaus from '../components/CursorMaus/CursorMaus';
import Phone from '/public/images/telephone.svg'
import Logo from '/public/images/cbslogo.png'
import NoticeBoard from '../components/hero/NoticeBoard';
import Head from "next/head";
const HomePage = () => {
  return (
    <Fragment>
      <Head>
    <title> Best Engineering College in NCR, Haryana I CBS Group of Institutions </title>
    <meta name="description" content="CBS Group of Institutions is all set to unleash a new era in the education sector of India by offering a much needed distinctive education platform to thousands of students to launch their successful careers." />
    <meta name="keywords" content="CBS Group of Institutions, Best Engineering College in NCR, Top Private Engineering College in Haryana, AICTE Approved Engineering College in India, Best B.Tech College with Placements, Top-Ranked Private College in NCR, Engineering Admission 2024 CBS Group, Affordable Engineering College in Haryana, Best UG & PG Engineering Programs, CBS Group of Institutions Ranking & Accreditation" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.cbscolleges.com/" />
  </Head>



      <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
      <Hero />
      <NoticeBoard/>
      <FunfactSecion hclass="funfact-section" />
      <About />
      <Welcome />
      <ServiceSection hclass={"services-section"} />
      {/* <VideosSection /> */}
      {/* <ProjectSection1 hclass={"project-section"} /> */}
      <TestimonialSection />
      <CtaSection />
      <BlogSection />
      <Footer />

      <Scrollbar />

      {/* <CursorMaus /> */}
    </Fragment>
  );
};
export default HomePage;