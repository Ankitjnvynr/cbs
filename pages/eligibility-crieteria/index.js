import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import EligbilityCrieteria from "../../components/admision/EligbilityCrieteria";
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
  <title>
    Eligibility criteria for undergraduate and postgraduate admissions - CBS
  </title>
  <meta
    name="description"
    content="Explore the eligibility criteria for admissions at CBS Group of Institutions. Find detailed requirements for undergraduate, postgraduate, and diploma programs to kickstart your academic journey."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions eligibility criteria, admission requirements, course eligibility, academic qualifications, entrance exam criteria, program prerequisites, student admission guidelines, minimum marks, age limit, degree qualifications."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link
    rel="canonical"
    href="https://www.cbscolleges.com/eligibility-criteria"
  />
</Head>


      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"eligibility-crieteria "} pagesub={"vision"} />
      <EligbilityCrieteria/>
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
