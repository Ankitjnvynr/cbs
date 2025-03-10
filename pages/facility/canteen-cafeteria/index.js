import React, { Fragment } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Footer from "../../../components/footer/Footer";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import CursorMaus from "../../../components/CursorMaus/CursorMaus";
import CanteenAndCafeteria from "../../../components/facility/CanteenAndCafeteria";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Head from "next/head";


const index = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Canteen & Cafeteria | Hygienic & Nutritious Dining at CBS Group of
          Institutions
        </title>
        <meta
          name="description"
          content="Enjoy hygienic and nutritious dining options at CBS Group of Institutions' canteen and cafeteria. Offering a variety of delicious meals and snacks, it's the perfect spot to relax, recharge, and connect with friends."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions canteen, college cafeteria, hygienic food, nutritious meals, student dining, campus food facilities, affordable snacks, dining area, healthy eating, social hub."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
       
      </Head>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <PageTitle pageTitle={"Canteen And Cafeteria "} pagesub={"About"} />
      <CanteenAndCafeteria />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};

export default index;
