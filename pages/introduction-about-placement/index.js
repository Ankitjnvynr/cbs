import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Placement from '../../components/placement/Placement';
import Head from 'next/head';
function placement() {
  return (
    <Fragment>
      <Head>
    <title> Introduction About Placement at CBS Group Of institutions</title>
    <meta name="description"
        content="Discover the robust placement support at CBS Group of Institutions. Learn how our dedicated placement cell connects students with top recruiters, ensuring excellent career opportunities and industry exposure." />
    <meta name="keywords"
        content="CBS Group of Institutions placements, career opportunities, job assistance, student recruitment, placement process, industry partnerships, career development, job readiness, top hiring companies, campus placements overview" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.cbscolleges.com/introduction-about-placement" />
</Head>

    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Carrer Development cell '} pagesub={'vision'} />
    <Placement/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default placement