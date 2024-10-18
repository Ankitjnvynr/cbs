import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import VideosSection from '../../components/VideosSection/VideosSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import SyllabusCard from '../../components/SyllabusCard/SyllabusCard';
import Syllabuses from '../../components/syllabus/Syllabuses';

const AboutPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Syllabus'} />
            {/* <About /> */}
            {/* <VideosSection /> */}
            {/* <TestimonialSection /> */}
            {/* <CtaSection /> */}
            <Syllabuses/>
            <BlogSection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default AboutPage;
