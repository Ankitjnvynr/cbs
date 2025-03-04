import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Carrer from "../../components/carrer/Carrer";
import Head from "next/head";
function carrer() {
  return (
    <Fragment>
      <Head>
        <title>
          Explore Latest Job Openings & Career Opportunities | CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Explore current job openings at CBS Group of Institutions. Join a dynamic academic environment with opportunities for faculty, administrative, and support roles. Build your career with us today!"
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions current openings, job vacancies, faculty positions, college recruitment, academic jobs, non-teaching staff openings, career opportunities, latest job listings, work at CBS, college hiring."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://www.cbscolleges.com/current-opening"
        />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Current opening "} pagesub={"vision"} />
      <Carrer />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default carrer;
