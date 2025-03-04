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
  <title>Director's Message -CBS Group of Institutions</title>
  <meta
    name="description"
    content="Read an inspiring message from the Director of CBS Group of Institutions, emphasizing academic excellence, innovation, and student success. Gain insights into the institution’s vision and future goals."
  />
  <meta
    name="keywords"
    content="Director’s Message CBS Group of Institutions, Academic Leadership CBS Group, Vision for Quality Education, Best Private Engineering & Management College, CBS Group Commitment to Student Success, Future of Technical & Management Education, Innovation-Driven Learning CBS Group, Excellence in Higher Education, Industry-Oriented Curriculum CBS Group, CBS Group Dedication to Research & Development"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/directors-message"
  />
</Head>


      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Director Message "} pagesub={"vision"} />
      <Director />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
