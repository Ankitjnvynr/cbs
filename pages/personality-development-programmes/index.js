import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import ObjectivePlacement from "../../components/objectivePlacement/ObjectivePlacement";
import Head from "next/head";

function director() {
  return (
    <Fragment>
      <Head>
        <title>
          Boost Your Confidence with Personality Development Program| CBS Group
          of Institutions
        </title>
        <meta
          name="description"
          content="Unlock your full potential with personality development programs at CBS Group of Institutions. Enhance communication, leadership, and confidence through workshops designed to shape well-rounded professionals"
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions personality development, student soft skills training, leadership workshops, communication skills, career growth programs, personality enhancement, student development, confidence building, professional skills training"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
       
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle
        pageTitle={"Personality Development Programmes"}
        pagesub={"vision"}
      />
      //
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
