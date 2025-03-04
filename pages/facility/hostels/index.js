import React, { Fragment } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Footer from "../../../components/footer/Footer";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import CursorMaus from "../../../components/CursorMaus/CursorMaus";
import CanteenAndCafeteria from "../../../components/facility/CanteenAndCafeteria";
import Hostels from "../../../components/facility/Hostels";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Hostel | Safe & Comfortable Accommodation at CBS Group of Institutions
        </title>
        <meta
          name="description"
          content="Experience safe and comfortable accommodation at CBS Group of Institutions' hostels. Enjoy well-furnished rooms, modern amenities, nutritious meals, and a supportive living environment for students."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions hostel, student accommodation, college hostels, safe living, furnished rooms, campus housing, hostel facilities, student life, residential campus, hostel amenities"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Hostels"} pagesub={"About"} />
      <Hostels />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};

export default index;
