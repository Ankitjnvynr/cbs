import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import CanteenAndCafeteria from '../../../components/facility/CanteenAndCafeteria';
import Transportation from '../../../components/facility/Transportation';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Head from 'next/head';

const index = () => {
  return (
    <Fragment>
      <Head>
    <title>Transport | Safe & Convenient College Bus Service at CBS Group of Institutions</title>
    <meta name="description"
        content="Enjoy safe and convenient transportation with CBS Group of Institutions' bus service. Covering nearby areas, our well-maintained fleet ensures timely and comfortable travel for students and staff." />
    <meta name="keywords"
        content="CBS Group of Institutions transport, college bus service, student transportation, safe travel, campus commute, bus routes, college transport facilities, staff transportation, convenient travel, daily shuttle service." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
   
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Transportation'} pagesub={'About'} />
    <Transportation />
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index