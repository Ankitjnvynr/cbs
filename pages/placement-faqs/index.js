import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";

import PlacementFAQs from "../../components/placementFAQs/PlacementFAQs";
import Head from "next/head";
function PlacementFaq() {
  return (
    <Fragment>
      <Head>
        <title>
          FAQs | Frequently Asked Questions - CBS Group of Institutions
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about CBS Group of Institutions. Get details on admissions, courses, placements, facilities, scholarships, and more to guide your college journey"
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions FAQs, college frequently asked questions, admission queries, course details, placement information, campus facilities, scholarship guidelines, student support, academic policies, career opportunities"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Placement FAQs"} pagesub={"vision"} />
      <PlacementFAQs />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default PlacementFaq;
