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
import { Router, useRouter } from "next/router";

export default function Index() {
  const [activeForm, setActiveForm] = useState("login");
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    remember: false,
    otp: "",
  });

  const router = useRouter();

  const [otp, setOtp] = useState("");

  const [isDisabled, setIsDisabled] = useState(false);

  const [errors, setErrors] = useState({});

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

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
    const userData = sessionStorage.getItem("user");

    if (userData) {
      router.push("/student");
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    console.log("Updated Errors State:", errors);
  }, [errors]);

  const sendOtp = async () => {
    const res = await authService.sendOtp(value.email);
    console.log("function send otp", res);
    return res;
  };

  const verifyOtp = async () => {
    const res = await authService.verifyOtp(value.email, otp);
    console.log("otp verify fyn", res);
    if (res.status == "success") {
      toast.success(res.message);
      login();
    } else {
      toast.error(res.message);
    }
  };

  const login = async () => {
    setIsDisabled(true);
    const res = await authService.login(value.email, value.password);
    console.log(res);

    if (res.code == 401) {
      toast.error(res.error);
      setIsDisabled(false);
      return;
    }
    if (res.code == 403) {
      const res = await sendOtp();
      console.log("function in login", res);
      if (res.status) {
        setActiveForm("verify");
        toast.success("OTP send successfuly");
        setIsDisabled(false);
      }
    }

    if (res.code == 200) {
      console.log(res);
      setIsDisabled(false);
      toast.success(res.message);
      const user = await JSON.stringify(res.user);
      const token = await JSON.stringify(res.token);
      sessionStorage.setItem("user", user);
      sessionStorage.setItem("token", token);
      router.push("/student");

      return;
    }
  };

  const signUp = async () => {
    if (validate()) {
      console.log("Form submitted", value);
      const res = await authService.register(
        value.name,
        value.email,
        value.password,
        value.phone
      );

      console.log("sign up res", res);
      if (res.code == 200) {
        toast.success(res.message);
        login();
      }
    } else {
      toast.error("All fields are required");
      console.log("Validation failed", errors);
    }
  };

 

  if (isUserLoggedIn) {
    return null;
  }

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
          <VerifyForm
            setActiveForm={setActiveForm}
            sendOtp={sendOtp}
            value={value}
            otp={otp}
            verifyOtp={verifyOtp}
            setOtp={setOtp}
            setValue={setValue}
          />
        )}
      </div>

      <Footer />
      <Scrollbar />
    </>
  );
}
