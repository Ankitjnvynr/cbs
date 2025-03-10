import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";

import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import SeminarGuesture from "../../components/seminarGuestLecture/SeminarGuesture";
import Head from "next/head";
function director() {
  return (
    <Fragment>
      <Head>
        <title>
          Expert Seminars & Guest Lectures for Skill Enhancement | CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Broaden your horizons with seminars and guest lectures at CBS Group of Institutions. Learn from industry leaders, academic experts, and innovators to gain valuable insights and stay updated with emerging trends."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions seminars, guest lectures, expert talks, industry sessions, academic workshops, knowledge-sharing events, student development lectures, professional insights, leadership seminars, career guidance talks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="canonical"
          href="https://www.cbscolleges.com/seminar-guest-lectures"
        />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Seminars & Guest Lectures "} pagesub={"vision"} />
      <SeminarGuesture />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
