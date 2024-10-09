import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FunfactSecion from '../../components/FunfactSection/FunfactSection';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import VideosSection from '../../components/VideosSection/VideosSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Phone from '/public/images/telephone.svg'
import Logo from '/public/images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
            <Hero />
            <FunfactSecion hclass="funfact-section" />
            <About />
            <ServiceSection hclass={'services-section'} />
            <VideosSection />
            <ProjectSection hclass={"project-section"} />
            <TestimonialSection />
            <CtaSection />
            <BlogSection />
            <Footer />
            <Scrollbar /> 
            <CursorMaus/> 
        </Fragment>
    )
};
export default HomePage;