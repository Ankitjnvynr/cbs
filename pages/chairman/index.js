
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Chairman from '../../components/chairman/Chairman';
import Head from 'next/head';
function chairman() {
  return (
    <Fragment>
      <Head>
  <title>Chairman Message - CBS Group of Institutions</title>
  <meta
    name="description"
    content="Read an inspiring message from the President of CBS Group of Institutions, highlighting the commitment to academic excellence, student growth, and a bold vision for the future. Discover the values that shape CBS."
  />
  <meta
    name="keywords"
    content="President’s Message CBS Group of Institutions, Leadership Vision CBS Group, Commitment to Quality Education, Best Private College for Engineering & Management, CBS Group Academic Excellence, Future of Higher Education in India, Student Success & Career Growth, CBS Group Institutional Leadership, Holistic Education Approach, CBS Group Dedication to Innovation & Research"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/presidents-message"
  />
</Head>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Chairman Message '} pagesub={'vision'} />
           <Chairman/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default chairman
