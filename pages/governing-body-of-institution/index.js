import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Govern from '../../components/governing/Govern';
import Head from 'next/head';

function governing() {
  return (
    <Fragment>
      <Head>
  <title>Governing Body Of Instituiton -CBS Group of institutions</title>
  <meta
    name="description"
    content="Meet the Governing Body of CBS Group of Institutions — a team of visionary leaders and educators guiding the institutionstoward academic excellence, innovation, and student-centered growth"
  />
  <meta
    name="keywords"
    content="Governing Body CBS Group of Institutions, Leadership & Administration CBS Group, Top Educational institutionsGovernance, Academic Excellence & Institutional Management, CBS Group Advisory Board, Best Private College with Strong Leadership, CBS Group Institutional Policies & Regulations, Higher Education Governance in India, CBS Group Commitment to Quality Education, CBS Group Institutional Development & Vision"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/governing-body-of-institution"
  />
</Head>

            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Governing Body of Institution '} pagesub={'vision'} />
            <div >
            <Govern />
            </div>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default governing