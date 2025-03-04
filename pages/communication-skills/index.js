import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Communication from "../../components/communication/Communication";
import Head from "next/head";
function communication() {
  return (
    <Fragment>
      <Head>
        <title>
          Communication Skills | Personality Development & Career Growth at CBS
          Group of Institutions
        </title>
        <meta
          name="description"
          content="Enhance your communication skills at CBS Group of Institutions. Our training programs help students build confidence, improve public speaking, and develop essential soft skills for career growth."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions communication skills, personality development, student soft skills, public speaking training, career growth, interpersonal skills, language proficiency, job readiness, corporate communication, personal branding"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Communication Skills "} pagesub={"vision"} />
      <Communication />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default communication;
