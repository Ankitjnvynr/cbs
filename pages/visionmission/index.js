import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Vision from '../../components/vision/Vision';
import Head from 'next/head';



const Visionpage = () => {
    return (
        <Fragment>
            <Head>
  <title>Vission & Mission- CBS Group of Institutions</title>
  <meta
    name="description"
    content="Explore the vision and mission of CBS Group of Institutions, dedicated to academic excellence, innovation, and holistic student development. Discover how CBS empowers future leaders through education and values."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions Vision & Mission, Best Educational institutionsin Haryana, Top Private College with Strong Academic Values, CBS Group Commitment to Excellence, Quality Education & Research CBS Group, Student-Centered Learning Approach, Industry-Oriented Education CBS Group, Future-Ready Curriculum & Innovation, CBS Group Institutional Goals & Objectives, Best Higher Education Institute with Ethical Values"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="https://www.cbscolleges.com/visionmission" />
</Head>

            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Vision & Mission'} pagesub={'vision'} />
           <Vision/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default Visionpage;
