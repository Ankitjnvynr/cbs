import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';


const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} />
            <ProjectSection hclass={"project-section"} />
            <TestimonialSection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default ProjectPage;
