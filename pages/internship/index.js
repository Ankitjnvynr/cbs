import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Internship from "../../components/intern/Internship";
import Head from "next/head";
function internship() {
  return (
    <Fragment>
      <Head>
        <title>
          Best Summer Internship Programs | CBS Group of Institutions
        </title>
        <meta
          name="description"
          content="Gain hands-on industry experience with summer internship programs at CBS Group of Institutions. Build practical skills, enhance your resume, and prepare for future career success with top companies."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions summer internship, student internships, industry training, practical experience, corporate internships, skill development, career readiness, hands-on learning, internship opportunities, professional growth programs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Internship and training "} pagesub={"vision"} />
      <Internship />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default internship;
