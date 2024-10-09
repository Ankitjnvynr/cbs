import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const ServicePage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSection hclass={'services-section-s3'}/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default ServicePage;
