import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import CanteenAndCafeteria from '../../../components/facility/CanteenAndCafeteria';
import Sports from '../../../components/facility/Sports';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Head from 'next/head';

const index = () => {
  return (
    <Fragment>
      <Head>
    <title>Sports and curricular Activities ,Facilities- CBS Group Of institutions </title>
    <meta name="description"
        content="Engage in sports and co-curricular activities at CBS Group of Institutions. Build teamwork, leadership, and creativity through a variety of athletic events, cultural programs, and skill-enhancing activities." />
    <meta name="keywords"
        content="CBS Group of Institutions sports, co-curricular activities, student life, athletic events, cultural programs, extracurricular development, fitness facilities, inter-college competitions, talent shows, holistic education." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
  
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Sports '} pagesub={'About'} />
    <Sports />
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index