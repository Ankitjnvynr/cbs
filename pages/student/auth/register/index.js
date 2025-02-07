import React from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Scrollbar from "../../../../components/scrollbar/scrollbar";

import Footer from "../../../../components/footer/Footer";
import { LoginForm } from "../../../../components/studentDashboard/LoginForm";
import SignupForm from "../../../../components/studentDashboard/SignupForm";

export default function Index() {
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
        
      <SignupForm/>
      </div>

      <Footer />
      <Scrollbar />
    </>
  );
}
