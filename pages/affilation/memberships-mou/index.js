import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle'

import Scrollbar from '../../../components/scrollbar/scrollbar'
import Footer from '../../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../../components/CursorMaus/CursorMaus';
import Group from '../../../components/group/Group';
import Head from 'next/head';
import Grievance from '../../../components/about/Grievance';
import MembershipsMOU from '../../../components/affilation/MembershipsMOU';


function group() {
  return (
    <Fragment>
     <Head>
    <title>Grievance Committee-CBS Group of Institutions</title>
    <meta name="description"
        content="Learn about the Grievance Committee at CBS Group of Institutions, dedicated to addressing student and staff concerns with fairness, transparency, and prompt resolutions to ensure a positive campus experience." />
    <meta name="keywords"
        content="Grievance Committee CBS Group of Institutions, Student Grievance Redressal CBS Group, Complaint Resolution Mechanism CBS Group, Best Private College with Transparent Policies, CBS Group Anti-Ragging & Disciplinary Actions, Fair & Ethical Grievance Handling, Student Rights & Support CBS Group, CBS Group Institutional Ethics & Compliance, CBS Group Conflict Resolution Process, CBS Group Complaint Management System" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.cbscolleges.com/downloads/files/n63245f98f241f.pdf" />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={'Memberships & MOU'} pagesub={'vision'} />
   <MembershipsMOU/>
    <Footer />
    <Scrollbar />
    <CursorMaus />
</Fragment>
  )
}

export default group