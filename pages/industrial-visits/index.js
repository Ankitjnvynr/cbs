import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Director from "../../components/director/Director";
import IndustrialVisits from "../../components/industrialVisits/IndustrialVisits";
import Head from "next/head";
function director() {
  return (
    <Fragment>
      <Head>
        <title>
          Hands-on Learning Through Industrial Visits | CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Enhance your learning with industrial visits at CBS Group of Institutions. Get real-world insights, explore industry practices, and bridge the gap between classroom knowledge and practical applications."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions industrial visits, student industry exposure, corporate tours, hands-on learning, factory visits, real-world experience, industry-academia connect, practical learning trips, professional site visits, career-oriented education"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://www.cbscolleges.com/industrial-visits"
        />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Industrial Visits "} pagesub={"vision"} />
      <IndustrialVisits />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
