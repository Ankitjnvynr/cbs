import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Interview from "../../components/interview/Interview";
import Head from "next/head";

function index() {
  return (
    <Fragment>
      <Head>
        <title>
          Interview Tips & Questions | Career Preparation at CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Prepare for success with expert interview tips and common questions from CBS Group of Institutions. Learn how to ace job interviews, build confidence, and make a lasting impression on recruiters."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions interview tips, job interview questions, career preparation, placement readiness, HR interview questions, technical interview tips, student career guidance, interview skills, mock interviews, job interview strategies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle
        pageTitle={"Interviews Tips / Questions "}
        pagesub={"vision"}
      />
      <Interview />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default index;
