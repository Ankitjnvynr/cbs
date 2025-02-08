import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Logo from "/public/images/cbslogo.png";
import Phone from "/public/images/telephone.svg";
import Scrollbar from "../../../components/scrollbar/scrollbar";

import Footer from "../../../components/footer/Footer";
import { LoginForm } from "../../../components/studentDashboard/LoginForm";
import SignupForm from "../../../components/studentDashboard/SignupForm";
import { VerifyForm } from "../../../components/studentDashboard/Verify";
import { toast } from "react-toastify";
import authService from "../../../services/auth";

export default function Index() {
  const [activeForm, setActiveForm] = useState("login");
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    remember: false,
    otp:""
  });

  const [isDisabled,setIsDisabled]=useState(false)

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!value.name.trim()) newErrors.name = "Name is required";
    if (!value.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (!value.phone.trim() || !/^\d{10}$/.test(value.phone))
      newErrors.phone = "Valid phone number is required";
    if (!value.password.trim() || value.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!value.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (value.password !== value.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    console.log("Validation Errors:", newErrors); // Log errors before setting state

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    console.log("Updated Errors State:", errors);
  }, [errors]);




  const sendOtp = async ()=>{
     const res = await authService.sendOtp(value.email)
     console.log("function send otp",res)
     return res
  }

  const verifyOtp = async ()=>{
    const res = await authService.verifyOtp(value.email,value.otp)
  }



  const signUp = async () => {
    if (validate()) {
      console.log("Form submitted", value);
    } else {
      toast.error("All fields are required");
      console.log("Validation failed", errors);
    }
  };

  const login = async () => {
    setIsDisabled(true)
    const res = await authService.login(value.email, value.password);
    console.log(res);
    
    if(res.code==401){
      toast.error(res.error)
      return
    }
    if(res.code==403){
      const res = await sendOtp()
      console.log("function in login", res)
      if(res.status){
        setActiveForm('verify')
        toast.success("OTP send successfuly")
        setIsDisabled(false)
       }
    }

    if(res.code==200){
      console.log(res);
      return
    }

    
    
  };

  return (
    <>
      <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
      <div
        style={{
          minHeight: "70vh",
          padding: "20px",
          paddingTop: "150px",
        }}
      >
        {activeForm === "login" && (
          <LoginForm
            setActiveForm={setActiveForm}
            setValue={setValue}
            value={value}
            login={login}
            isDisabled={isDisabled}
          />
        )}
        {activeForm === "signup" && (
          <SignupForm
            setActiveForm={setActiveForm}
            setValue={setValue}
            value={value}
            signUp={signUp}
          />
        )}
        {activeForm === "verify" && (
          <VerifyForm setActiveForm={setActiveForm} />
        )}
      </div>

      <Footer />
      <Scrollbar />
    </>
  );
}
