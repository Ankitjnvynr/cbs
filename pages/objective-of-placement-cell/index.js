
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import ObjectivePlacement from '../../components/objectivePlacement/ObjectivePlacement'
import Head from 'next/head';

function director() {
  return (
    <Fragment>
      <Head>
    <title>Career Development Cell | Skill Enhancement & Placement Support at CBS Group of Institutions</title>
    <meta name="description"
        content="Unlock your potential with the Career Development Cell at CBS Group of Institutions. Get expert guidance on skill enhancement, resume building, interview prep, and placement support for a successful career" />
    <meta name="keywords"
        content="CBS Group of Institutions career development cell, student career support, skill enhancement, placement assistance, job readiness, interview preparation, resume building, career counseling, industry connections, professional growth." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="nan" />
</Head>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Objective of Placement Cell'} pagesub={'vision'} />
            <ObjectivePlacement/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default director