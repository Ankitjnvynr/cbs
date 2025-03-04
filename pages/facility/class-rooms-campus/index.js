import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import CanteenAndCafeteria from '../../../components/facility/CanteenAndCafeteria';
import ClassRoomsAndCampus from '../../../components/facility/ClassRoomsAndCampus';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Head from 'next/head';

const index = () => {
  return (
    <Fragment>
      <Head>
    <title>Class Rooms & Campus ,Facilities- CBS Group of institutions </title>
    <meta name="description"
        content="Experience world-class learning at CBS Group of Institutions with modern classrooms, state-of-the-art facilities, and a vibrant campus designed to foster academic and personal growth" />
    <meta name="keywords"
        content="CBS Group of Institutions classrooms, smart classrooms, campus infrastructure, modern learning spaces, college campus, student facilities, academic environment, lecture halls, green campus, study-friendly spaces." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.cbscolleges.com/class-roomscampus" />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Class Rooms And Campus'} pagesub={'About'} />
    <ClassRoomsAndCampus />
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default index