import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Director from "../../components/director/Director";
import Head from "next/head";
function director() {
  return (
    <Fragment>
  <Head>
  <title>
    Detailed fee structure for undergraduate and postgraduate courses-CBS
  </title>
  <meta
    name="description"
    content="Explore the detailed fee structure at CBS Group of Institutions. Get transparent information on tuition fees, scholarships, payment options, and financial aid for various programs"
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions fee structure, course fees, college tuition, program costs, affordable education, payment details, scholarship options, fee breakdown, annual fees, admission charges."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="https://www.cbscolleges.com/fee-structure" />
</Head>


      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"fee structure "} pagesub={"vision"} />
      
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
