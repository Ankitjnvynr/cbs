import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Feedback from "../../components/alumni/Feedback";

function feedback() {
  return (
    <Fragment>
    <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
    {/* <Hero />
          <FunfactSecion hclass="funfact-section" />
          <About />
          <ServiceSection hclass={'services-section'} />
          <VideosSection />
          <ProjectSection hclass={"project-section"} />
          <TestimonialSection />
          <CtaSection />
          <BlogSection /> */}
    <div
      style={{
        paddingTop: '180px',
      
        backgroundImage: 'url("/images/about/frontcbs.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingBottom:50
      }}
    >
      <div style={{
         height:'10vh'
      }}>

          
      </div>
     <Feedback/>
    </div>

    <Footer />
    <Scrollbar />
    <CursorMaus />
  </Fragment>
  )
}

export default feedback