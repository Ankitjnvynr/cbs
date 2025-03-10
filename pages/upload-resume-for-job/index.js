import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Upload from "../../components/uploadresume/Upload";
import Head from "next/head";
function upload() {
  return (
    <Fragment>
      <Head>
        <title>
          Upload Your Resume for Top Job Placements | CBS Group of Institutions
        </title>
        <meta
          name="description"
          content="Apply for career opportunities at CBS Group of Institutions. Upload your resume online and take the first step toward joining a leading institutionsdedicated to academic excellence and innovation."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions job application, upload resume, faculty recruitment, college job openings, career opportunities, academic positions, submit CV online, college hiring, staff vacancies, apply for job."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://www.cbscolleges.com/upload-resume-for-job"
        />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Upload resume "} pagesub={"vision"} />
      <Upload />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default upload;
