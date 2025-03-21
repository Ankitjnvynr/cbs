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
        <title>
          Gallery | Campus Life & Events at CBS Group of Institutions
        </title>
        <meta
          name="description"
          content="Explore the gallery of CBS Group of Institutions. Experience vibrant campus life, academic events, sports activities, cultural fests, and memorable moments through stunning visuals."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions gallery, campus life photos, college events, student activities, cultural festivals, sports events, academic celebrations, college memories, student experiences, campus photography"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="nan" />
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Gallery "} pagesub={"vision"} />



      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
}

export default director;
