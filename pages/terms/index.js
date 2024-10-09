import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PrivaceSection from '../../components/PrivacySection/PrivacySection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const TermsPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Terms'} pagesub={'Terms'} />
            <PrivaceSection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default TermsPage;
