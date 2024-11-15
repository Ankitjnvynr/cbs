import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Doanddonot from '../../components/do/Doanddonot'

const index = () => {
  return (
    <Fragment>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Do and Don’t  '} pagesub={'vision'} />
    <Doanddonot/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index