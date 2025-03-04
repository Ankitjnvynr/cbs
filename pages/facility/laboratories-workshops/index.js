import React, { Fragment } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Footer from "../../../components/footer/Footer";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import CursorMaus from "../../../components/CursorMaus/CursorMaus";
import CanteenAndCafeteria from "../../../components/facility/CanteenAndCafeteria";
import LaboratoriesAndWorkshops from "../../../components/facility/LaboratoriesAndWorkshops";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Laboratories & Workshops | Advanced Practical Learning at CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Experience hands-on learning at CBS Group of Institutions with advanced laboratories and workshops. Our state-of-the-art facilities support practical training, research, and skill development across various disciplines"
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions laboratories, college workshops, practical learning, advanced lab facilities, engineering labs, research labs, hands-on training, technical workshops, student projects, experiential learning"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Laboratories And Workshops"} pagesub={"About"} />
      <LaboratoriesAndWorkshops />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};

export default index;
