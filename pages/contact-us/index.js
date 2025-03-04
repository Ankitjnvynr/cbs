import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Contactpage from "../../components/Contactpage/Contactpage";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";
import Head from "next/head";

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Get in Touch – Contact CBS Group of institutionsToday</title>
        <meta
          name="description"
          content="Get in touch with CBS Group of Institutions. Find contact details, campus addresses, phone numbers, email, and an inquiry form to connect with us for admissions, support, or general queries."
        />
        <meta
          name="keywords"
          content="CBS Group of Institutions contact, college phone number, email address, campus contact details, admission inquiries, support team CBS, college helpline, reach CBS, contact information, inquiry form."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://www.cbscolleges.com/contact-us" />
      </Head>

      <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />

      {/* <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} /> */}
      <PageTitle pageTitle={"Contact Us"} pagesub={"Contact"} />
      <Contactpage />
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};
export default ContactPage;
