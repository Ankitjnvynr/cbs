import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Doanddonot from '../../components/do/Doanddonot'
import Head from 'next/head';

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Dos & Don'ts for Interviews | Expert Guidance at CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Ace your job interviews with expert guidance from CBS Group of Institutions. Learn the essential dos and don’ts — from body language to answering questions confidently — to make a great impression."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions interview tips, dos and don'ts for interviews, job interview guidance, student career advice, interview preparation, body language tips, interview mistakes to avoid, career success strategies, job readiness, recruiter expectations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
       
      </Head>
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