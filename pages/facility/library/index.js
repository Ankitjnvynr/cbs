import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import CanteenAndCafeteria from '../../../components/facility/CanteenAndCafeteria';
import Library from '../../../components/facility/Library';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Head from 'next/head';

const index = () => {
  return (
    <Fragment>
      <Head>
    <title>Library ,Facilities- CBS Group of institutions</title>
    <meta name="description"
        content="Explore the well-stocked library at CBS Group of Institutions. Access a vast collection of books, journals, research papers, and digital resources to support academic excellence and research endeavors" />
    <meta name="keywords"
        content="CBS Group of Institutions library, academic resources, student study area, research materials, digital library, books and journals, e-learning resources, reference section, quiet study space, knowledge hub" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Library'} pagesub={'About'} />
    <Library />
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index