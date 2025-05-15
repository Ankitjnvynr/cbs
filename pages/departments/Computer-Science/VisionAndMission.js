import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle'
import Scrollbar from '../../../components/scrollbar/scrollbar'
import Footer from '../../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import About from "../../../components/Departments/Computer-Science/About"
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import VisionAndMision from '../../../components/Departments/Computer-Science/VisionAndMision';
function director() {
  return (
    <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Vision and Mission'} pagesub={'about'} />
             <VisionAndMision/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default director