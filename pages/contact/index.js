import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
            
            {/* <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} /> */}
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default ContactPage;

