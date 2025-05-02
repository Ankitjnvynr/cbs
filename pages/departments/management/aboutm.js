import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle'

import Scrollbar from '../../../components/scrollbar/scrollbar'
import Footer from '../../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import Aboutm from '../../../components/departments/management/Aboutm';
function director() {
  return (
    <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'About  '} pagesub={'vision'} />
            <Aboutm/> 
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default director