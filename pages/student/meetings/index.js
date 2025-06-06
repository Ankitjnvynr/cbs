import React from 'react'
import Navbar from "../../../components/Navbar/Navbar";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Footer from '../../../components/footer/Footer';
import { Drawer } from '@mui/material';
import DashboardHome from '../../../components/studentDashboard/DashboardHome';
import AdmissionLayout from '../../../components/studentDashboard/AdmissionLayout';
import withAuth from '../../../utils/withAuth';
import MeetingsLayout from '../../../components/studentDashboard/MeetingsLayout';

 function index() {
  return (
    <>

     <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
   <MeetingsLayout/>
     <Footer />
    </>
  )
}

export default withAuth(index)
