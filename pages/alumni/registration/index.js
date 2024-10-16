import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar'

import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import Phone from '/public/images/telephone.svg'
import Logo from '/public/images/logo.svg'
import Alumniregistraionform from '../../../components/alumni/Alumniregistraionform';

const HomePage = () => {
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
            <div style={{
                paddingTop:155,
                marginTop:0
            }}>
                  <Alumniregistraionform/>
            </div>
          
            <Footer />
            <Scrollbar /> 
            <CursorMaus/> 
        </Fragment>
    )
};
export default HomePage;