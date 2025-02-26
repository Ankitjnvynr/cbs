import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import CanteenAndCafeteria from '../../../components/facility/CanteenAndCafeteria';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'

const index = () => {
  return (
    <Fragment>
    <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
    <PageTitle pageTitle={'Canteen And Cafeteria '} pagesub={'About'} />
    <CanteenAndCafeteria />
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index