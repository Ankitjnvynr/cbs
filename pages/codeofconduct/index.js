
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Code from '../../components/code/Code';
import Head from 'next/head';
function codeofconduct() {
  return (
    <Fragment>
      <Head>
  <title>
    Code of Conduct | Academic Integrity & Discipline at CBS Group of
    Institutions
  </title>
  <meta
    name="description"
    content="Discover the Code of Conduct at CBS Group of Institutions. Learn about our commitment to academic integrity, student discipline, ethical behavior, and fostering a respectful and inclusive campus environment."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions code of conduct, academic integrity, student discipline, campus rules, ethical standards, behavior guidelines, college policies, student responsibilities, discipline policy, academic ethics."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="codeofconduct" />
</Head>

    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Code of Conduct '} pagesub={'vision'} />
    <Code/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default codeofconduct