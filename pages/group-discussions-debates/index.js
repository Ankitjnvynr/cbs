import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Group from '../../components/group/Group';
import Head from 'next/head';

function group() {
  return (
    <Fragment>
      <Head>
    <title>Group Discussions & Debates | Enhancing Critical Thinking at CBS Group of Institutions</title>
    <meta name="description"
        content="Boost your critical thinking and communication with group discussions and debates at CBS Group of Institutions. Develop teamwork, analytical skills, and confidence for academic and career success" />
    <meta name="keywords"
        content="CBS Group of Institutions group discussions, student debates, critical thinking skills, communication training, teamwork development, public speaking, analytical skills, career preparation, leadership skills, soft skills enhancement." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="nan" />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Group discussion and debates '} pagesub={'vision'} />
    <Group/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default group