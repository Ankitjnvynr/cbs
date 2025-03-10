import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Admission from '../../components/admision/Admission';
import Head from 'next/head';

function index() {
  return (
    <Fragment>
      <Head>
  <title>Online Registration form - CBS Group of institutions</title>
  <meta
    name="description"
    content="Register online for admission to CBS Group of Institutions. Fill out the registration form, submit your details, and take the first step toward a future of academic excellence and career growth."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions online registration, college admission form, apply online, student enrollment, course registration, admission process, digital application, college entry form, quick registration, easy admission."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/online-registration-form"
  />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Online Registration Form  '} pagesub={'vision'} />
    <Admission/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index