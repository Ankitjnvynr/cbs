import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";

import PlacementPolicy from "../../components/placementPolicy/PlacementPolicy";
import Head from "next/head";
function director() {
  return (
    <Fragment>
      <Head>
        <title>
          Placement Policy | Career Opportunities & Recruitment Process at CBS
          Group of Institutions
        </title>
        <meta
          name="description"
          content="Discover the placement policy at CBS Group of Institutions. Learn about career opportunities, the recruitment process, eligibility criteria, and the support provided to help students secure top job placements"
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions placement policy, student recruitment process, campus placements, job opportunities, placement guidelines, career support, employer partnerships, hiring process, career growth, industry tie-ups."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Placement Policy"} pagesub={"vision"} />
      <PlacementPolicy />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
