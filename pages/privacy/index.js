import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PrivacySection from '../../components/PrivacySection/PrivacySection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const privacyPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Privacy'} pagesub={'Privacy'} />
            <PrivacySection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default privacyPage;
