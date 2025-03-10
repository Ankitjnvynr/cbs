import React, { Fragment } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Footer from "../../../components/footer/Footer";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import CursorMaus from "../../../components/CursorMaus/CursorMaus";
import CanteenAndCafeteria from "../../../components/facility/CanteenAndCafeteria";
import DispensaryAndHealthZone from "../../../components/facility/DispensaryAndHealthZone";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Dispensary & Health Zone | Medical Facilities at CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Stay healthy with CBS Group of Institutions' Dispensary & Health Zone. We provide on-campus medical facilities, first aid, and routine health check-ups to ensure student well-being and safety"
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions health zone, campus dispensary, medical facilities, student health care, first aid services, routine health check-ups, wellness center, college medical support, emergency care, health and safety"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
    
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Dispensary And Health Zone"} pagesub={"About"} />
      <DispensaryAndHealthZone />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};

export default index;
