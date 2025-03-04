import React, { Fragment } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Footer from "../../../components/footer/Footer";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import CursorMaus from "../../../components/CursorMaus/CursorMaus";
import CanteenAndCafeteria from "../../../components/facility/CanteenAndCafeteria";
import ComputerCenter from "../../../components/facility/ComputerCenter";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Computer Center &Facilities- CBS Group of institutions </title>
        <meta
          name="description"
          content="Discover the advanced Computer Center at CBS Group of Institutions. Equipped with modern systems, high-speed internet, and the latest software, it provides students with hands-on tech learning and research opportunities."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions computer center, IT lab, modern computer facilities, high-speed internet, software training, digital learning, tech-enabled education, programming labs, student computing resources, technology hub"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Computer Center"} pagesub={"About"} />
      <ComputerCenter />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};

export default index;
