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
import AdmissionProcedure from '../../components/admision/AdmissionProcedure';


function index() {
  return (
    <Fragment>
        <Head>
  <title>Admission Procedure 2025 -CBS Group of institutions</title>
  <meta
    name="description"
    content="Learn about the admission procedure at CBS Group of Institutions. Get step-by-step guidance on application forms, eligibility, entrance exams, and important dates for a smooth enrollment process."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions admission procedure, college admissions, how to apply, application process, entrance requirements, student enrollment, admission guidelines, course eligibility, document submission, seat allotment"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/admission-procedure"
  />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'admission procedure  '} pagesub={'vision'} />
    <AdmissionProcedure/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index