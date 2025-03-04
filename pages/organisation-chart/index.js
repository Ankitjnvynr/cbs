import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Organisationchart from '../../components/organisation/Organisationchart';
import Head from 'next/head';

function organisation() {
  return (
    <Fragment>
      <Head>
  <title>
    Organization Chart | Leadership & Governance at CBS Group of Institutions
  </title>
  <meta
    name="description"
    content="Explore the leadership and governance structure at CBS Group of Institutions. Learn about the organization chart, management team, decision-making bodies, and key academic leaders driving institutional excellence."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions leadership, organization chart, college governance, administrative structure, management team, board of directors, academic leadership, institutional hierarchy, decision-making body, college administration"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="https://www.cbscolleges.com/organisation-chart" />
</Head>

            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Organisation-Chart '} pagesub={'vision'} />
         <Organisationchart/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default organisation