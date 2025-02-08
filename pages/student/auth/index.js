import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Scrollbar from "../../../components/scrollbar/scrollbar";

import Footer from "../../../components/footer/Footer";
import { LoginForm } from "../../../components/studentDashboard/LoginForm";
import SignupForm from "../../../components/studentDashboard/SignupForm";
import { VerifyForm } from "../../../components/studentDashboard/Verify";


export default function Index() {

  const [activeForm,setActiveForm]= useState('login')

  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <div
        style={{
          minHeight: "70vh",
          padding:'20px',
          paddingTop:'150px',
        }}
      >
        
        {activeForm === 'login' && <LoginForm setActiveForm={setActiveForm} />}
        {activeForm === 'signup' && <SignupForm setActiveForm={setActiveForm}  />}
        {activeForm === 'verify' && <VerifyForm setActiveForm={setActiveForm}  />}
      
      </div>

      <Footer />
      <Scrollbar />
    </>
  );
}
