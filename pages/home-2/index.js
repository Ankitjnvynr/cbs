import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import FunFact from '../../components/FunfactSection/FunfactSection';
import About2 from '../../components/about2/about2';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import VideosSection from '../../components/VideosSection/VideosSection';
import ProjectSection2 from '../../components/ProjectSection2/ProjectSection2';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo.svg'

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s2"} />
            <Hero2 />
            <FunFact hclass="funfact-section s2" />
            <About2 />
            <ServiceSection hclass={'services-section-s2'} />
            <VideosSection />
            <ProjectSection2 />
            <TestimonialSection />
            <CtaSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;