
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Director from '../../components/director/Director';
import CellActivity from '../../components/cellActivity/CellActivity';
import Head from 'next/head';
function director() {
  return (
    <Fragment>
      <Head>
    <title>Activities of the Cell | Training, Workshops & Career Guidance at CBS Group of Institutions</title>
    <meta name="description"
        content="Explore the dynamic activities of the Career Development Cell at CBS Group of Institutions. From training sessions and skill workshops to career guidance and industry interactions, we prepare students for future success." />
    <meta name="keywords"
        content="CBS Group of Institutions career cell activities, student training programs, skill development workshops, career guidance, industry interactions, placement preparation, personality development, resume building, career seminars, job readiness" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="nan" />
</Head>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Activity of the Cell'} pagesub={'vision'} />
            <CellActivity/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default director