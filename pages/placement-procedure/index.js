import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Director from "../../components/director/Director";
import PlacementProcedure from "../../components/placementprocedure/PlacementProcedure";
import Head from "next/head";
function director() {
  return (
    <Fragment>
      <Head>
        <title>
          Placement Procedure | Step-by-Step Recruitment Process at CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Explore the step-by-step placement procedure at CBS Group of Institutions. From pre-placement training to final job offers, we guide students through every stage of the recruitment process for career success."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions placement procedure, campus recruitment process, step-by-step placement, student job placements, interview process, pre-placement training, career counseling, job offers, company selection, career development."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Placement Procedure "} pagesub={"vision"} />
      <PlacementProcedure />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
