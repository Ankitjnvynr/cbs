import React from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import Image from "next/image";

const Header = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header">
      <div className={" " + props.hclass}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none block">
                <MobileMenu />
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand  " href="/home">
                    <Image src={props.Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                >
                  <ul className="nav navbar-nav mb-2 mb-lg-0 text-xs">
                    <li>
                      <Link onClick={ClickHandler} href="/" className="text-xs">
                        Home
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="/" className="text-xs">
                        About
                      </Link>
                      <ul className="sub-menu text-xs">
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Vision & Mission
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                           President's Message
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                           Director's Message
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Director General's Message
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                         Governing Body of Institution
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                           Grievance Committee
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#" className="text-xs">
                        Alumni
                      </Link>
                      <ul className="sub-menu text-xs">
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Registration form
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Alumni Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Alumni videos
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#" className="text-xs">
                        Admission
                      </Link>
                      <ul className="sub-menu text-xs">
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Eligibility
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Admission Procedure
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#" className="text-xs">
                        Facilities
                      </Link>
                      <ul className="sub-menu text-xs">
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Class Rooms & campus
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            href="/"
                          >
                            Library
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Computer Center
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} href="#" className="text-xs">
                            All Facilities
                          </Link>
                          <ul className="sub-menu text-xs">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/"
                              >
                                Laboratories & Workshop
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/"
                              >
                              Canteen & Cafeteria
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/"
                              >
                              Dispensary/Health Zone
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                href="/"
                              >
                           Hostels
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} href="#" className="text-xs">
                        Career
                      </Link>
                      <ul className="sub-menu text-xs">
                        <li>
                          <Link onClick={ClickHandler} href="/testimonials">
                            Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/login">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/register">
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/404">
                            404 Error
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} href="/contact" className="text-xs">
                        Contact Us
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-2 col-2 text-xs">
                <div className="header-right">
                  <a href="tel:8708042248" className="call-number text-xs">
                    <div className="icon">
                      <Image src={props.telephone} alt="" />
                    </div>
                    <div className="text">
                      <span className="title text-xs">Available 24/7</span>
                      <span className="number text-xs">+(91)8708042248</span>
                    </div>
                  </a>
                  <div className="login">
                    <Link href="/login" className="text-xs">Login</Link>
                  </div>
                  <div className="close-form">
                    <Link className="theme-btn text-xs" href="/contact">
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
