import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/hero/hero';
import FunfactSecion from '../components/FunfactSection/FunfactSection';
import About from '../components/about/about';
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
        <title>CBS Group Of Institution Jhajjar</title>
        <meta name="description" content="Welcome to CBS college." />
      </Head>



      <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
      <Hero />
      <NoticeBoard />
      <FunfactSecion hclass="funfact-section" />
      <About />
      <ServiceSection hclass={"services-section"} />
      {/* <VideosSection /> */}
      <ProjectSection1 hclass={"project-section"} />
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