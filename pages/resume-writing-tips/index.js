import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Resume from '../../components/resume/Resume';
import Head from 'next/head';

function index() {
  return (
    <Fragment>
      <Head>
    <title>Resume Writing Tips | Crafting a Professional CV at CBS Group of Institutions</title>
    <meta name="description"
        content="Create a standout resume with expert tips from CBS Group of Institutions. Learn how to craft a professional CV, highlight your skills, and make a lasting impression on recruiters" />
    <meta name="keywords"
        content="CBS Group of Institutions resume writing tips, CV building, professional resume guide, student career development, job application tips, resume format, skill highlighting, career readiness, interview preparation, CV writing techniques" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="nan" />
</Head>
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