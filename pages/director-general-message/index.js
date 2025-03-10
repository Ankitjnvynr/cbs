
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Directorgen from '../../components/directorgeneral/Directorgen';
import Head from 'next/head';

function directorgeneralmessage() {
  return (
    <Fragment>
      <Head>
  <title>Director's General Message- CBS Group of Institutions</title>
  <meta
    name="description"
    content="Explore the Director General's message at CBS Group of Institutions, highlighting leadership, academic vision, and a commitment to nurturing future-ready graduates through quality education and innovation."
  />
  <meta
    name="keywords"
    content="Director General’s Message CBS Group of Institutions, Leadership & Vision in Higher Education, Commitment to Academic Excellence, Best Private Engineering & Management College, CBS Group Future-Ready Education, Innovation & Research-Driven Learning, CBS Group Focus on Industry Collaboration, Holistic Student Development CBS Group, Excellence in Technical & Management Education, CBS Group Dedication to Skill-Based Learning"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/director-generals-message"
  />
</Head>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Director General  Message '} pagesub={'vision'} />
            <Directorgen/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default directorgeneralmessage