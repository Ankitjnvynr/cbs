import React, { useEffect, useState } from "react";
import Link from "next/link";
import MobileMenu from "../MobileMenu/MobileMenu";
import Image from "next/image";

const Header = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [actualPosition, setActualPosition] = useState(null);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 100) {
      setActualPosition("fixed");
    } else {
      setActualPosition(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the full menu structure with dropdowns for each section and nested submenus for Departments
  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/",
      subMenu: [
        { label: "Vision & Mission", link: "/" },
        { label: "President's Message", link: "/" },
        { label: "Director's Message", link: "/" },
        { label: "Director General's Message", link: "/" },
        { label: "Governing Body of Institution", link: "/" },
        { label: "Grievance Committee", link: "/" },
      ],
    },
    {
      label: "Academics",
      link: "#",
      subMenu: [
        { label: "Academic Calendar", link: "/academics/calendar" },
        { label: "Examinations", link: "/academics/examinations" },
        { label: "Curriculum", link: "/academics/curriculum" },
        { label: "Departments", link: "/academics/departments" },
        { label: "Research & Development", link: "/academics/research" },
      ],
    },
    {
      label: "Alumni",
      link: "#",
      subMenu: [
        { label: "Registration form", link: "/" },
        { label: "Alumni Testimonials", link: "/" },
        { label: "Alumni videos", link: "/" },
        { label: "Gallery", link: "/" },
      ],
    },
    {
      label: "Admission",
      link: "#",
      subMenu: [
        { label: "Eligibility", link: "/" },
        { label: "Admission Procedure", link: "/" },
      ],
    },
    {
      label: "Facilities",
      link: "#",
      subMenu: [
        { label: "Class Rooms & campus", link: "/" },
        { label: "Library", link: "/" },
        { label: "Computer Center", link: "/" },
        {
          label: "All Facilities",
          link: "#",
          subMenu: [
            { label: "Laboratories & Workshop", link: "/" },
            { label: "Canteen & Cafeteria", link: "/" },
            { label: "Dispensary/Health Zone", link: "/" },
            { label: "Hostels", link: "/" },
          ],
        },
      ],
    },
    {
      label: "Departments",
      link: "#",
      subMenu: [
        {
          label: "Computer Science & Engg.",
          link: "/departments/cse",
          subMenu: [
            { label: "About CSE", link: "/departments/cse/about" },
            { label: "Vision & Mission", link: "/departments/cse/vision-mission" },
            { label: "Course Outcomes", link: "/departments/cse/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/cse/program-outcomes" },
            { label: "Program Specific Outcomes", link: "/departments/cse/program-specific-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/cse/program-educational-objectives" },
          ],
        },
        {
          label: "Mechanical Engg.",
          link: "/departments/mechanical",
          subMenu: [
            { label: "About ME", link: "/departments/mechanical/about" },
            { label: "Vision & Mission", link: "/departments/mechanical/vision-mission" },
            { label: "Course Outcomes", link: "/departments/mechanical/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/mechanical/program-outcomes" },
            { label: "Program Specific Outcomes", link: "/departments/mechanical/program-specific-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/mechanical/program-educational-objectives" },
            { label: "News Letters and Magazines-ME", link: "/departments/mechanical/news-letters" },
            { label: "Teaching-Learning ME", link: "/departments/mechanical/teaching-learning" },
          ],
        },
        {
          label: "Electronics & Comm. Engg.",
          link: "/departments/ece",
          subMenu: [
            { label: "About ECE", link: "/departments/ece/about" },
            { label: "Vision & Mission", link: "/departments/ece/vision-mission" },
            { label: "Course Outcomes", link: "/departments/ece/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/ece/program-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/ece/program-educational-objectives" },
            { label: "Program Specific Outcomes", link: "/departments/ece/program-specific-outcomes" },
          ],
        },
        {
          label: "Electrical Engg.",
          link: "/departments/electrical",
          subMenu: [
            { label: "About EE", link: "/departments/electrical/about" },
            { label: "Vision & Mission", link: "/departments/electrical/vision-mission" },
            { label: "Course Outcomes", link: "/departments/electrical/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/electrical/program-outcomes" },
            { label: "Patents", link: "/departments/electrical/patents" },
            { label: "Program Specific Outcomes", link: "/departments/electrical/program-specific-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/electrical/program-educational-objectives" },
          ],
        },
        {
          label: "Fire Technology & Safety",
          link: "/departments/fire-tech",
          subMenu: [
            { label: "About FTS", link: "/departments/fire-tech/about" },
            { label: "Vision & Mission", link: "/departments/fire-tech/vision-mission" },
            { label: "Course Outcomes", link: "/departments/fire-tech/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/fire-tech/program-outcomes" },
            { label: "Program Specific Outcomes", link: "/departments/fire-tech/program-specific-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/fire-tech/program-educational-objectives" },
          ],
        },
        {
          label: "Civil Engg.",
          link: "/departments/civil",
          subMenu: [
            { label: "About CE", link: "/departments/civil/about" },
            { label: "Vision & Mission", link: "/departments/civil/vision-mission" },
            { label: "Course Outcomes", link: "/departments/civil/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/civil/program-outcomes" },
            { label: "Program Specific Outcomes", link: "/departments/civil/program-specific-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/civil/program-educational-objectives" },
          ],
        },
        {
          label: "Management",
          link: "/departments/management",
          subMenu: [
            { label: "About", link: "/departments/management/about" },
            { label: "Vision & Mission", link: "/departments/management/vision-mission" },
            { label: "Course Outcomes", link: "/departments/management/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/management/program-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/management/program-educational-objectives" },
          ],
        },
        {
          label: "Computer Applications",
          link: "/departments/computer-apps",
          subMenu: [
            { label: "About CA", link: "/departments/computer-apps/about" },
            { label: "Vision & Mission", link: "/departments/computer-apps/vision-mission" },
            { label: "Course Outcomes", link: "/departments/computer-apps/course-outcomes" },
            { label: "Program Outcomes", link: "/departments/computer-apps/program-outcomes" },
            { label: "Program Educational Objectives", link: "/departments/computer-apps/program-educational-objectives" },
            { label: "Program Specific Outcomes", link: "/departments/computer-apps/program-specific-outcomes" },
          ],
        },
       
      ],
    },
    {
      label: "Career",
      link: "#",
      subMenu: [
        { label: "Testimonials", link: "/testimonials" },
        { label: "Login", link: "/login" },
        { label: "Register", link: "/register" },
        { label: "404 Error", link: "/404" },
      ],
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ];

  // Recursive function to render sub-menu items
  const renderSubMenu = (subMenu) => {
    return (
      <ul className="sub-menu text-xs">
        {subMenu.map((item, index) => (
          <li key={index}>
            <Link onClick={ClickHandler} href={item.link}>
              {item.label}
            </Link>
            {item.subMenu && renderSubMenu(item.subMenu)} {/* Render sub-sub menu if exists */}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header id="header">
      <div className={" " + props.hclass}>
        <nav
          style={{ flexDirection: "column", backgroundColor: "#fff" }}
          className="navigation navbar navbar-expand-lg navbar-light"
        >
          <Link className="navbar-brand py-3" href="/home">
            <Image width="300" src={props.Logo} alt="logo" />
          </Link>
          <div className="">
            <MobileMenu />
          </div>
          <div
            style={{
              position: actualPosition,
              backgroundColor: "#fff",
              background: "rgba(255, 255, 255, 0.45)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(4.5px)",
              WebkitBackdropFilter: "blur(4.5px)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              width: "100%",
              zIndex: 200,
            }}
            id="navbar"
            className="collapse navbar-collapse navigation-holder"
          >
            <ul className="nav navbar-nav mb-2 mb-lg-0 text-xs">
              {menuItems.map((item, index) => (
                <li key={index} className={item.subMenu ? "menu-item-has-children" : ""}>
                  <Link onClick={ClickHandler} href={item.link} className="text-xs">
                    {item.label}
                  </Link>
                  {item.subMenu && renderSubMenu(item.subMenu)}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
