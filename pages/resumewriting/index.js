import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Resume from '../../components/resume/Resume';

function index() {
  return (
    <Fragment>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Resume Writing Tips '} pagesub={'vision'} />
    <Resume/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index