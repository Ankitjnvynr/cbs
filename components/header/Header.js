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
        { label: "Vision & Mission", link: "/vision-mission" },
        
        { label: "Director's Message", link: "/" },
        { label: "Chairman's Message", link: "/" },
        { label: "Organisation Chart", link: "/" },
        { label: "Approvals & Affiliations", link: "/" },
        { label: "Code of Conduct", link: "/" },
        { label: "Mandatory Disclosures", link: "/" },
        { label: "Financial Audit", link: "/" },
      ],
    },
    {
      label: "IQAC",
      link: "/",
      subMenu: [
        { label: "About IQAC", link: "/" },
        
        { label: "NAAC", link: "/" },
        { label: "AQAR", link: "/" },
        { label: "OInitiatives", link: "/" },
       
      ],
    },
    {
      label: "Academics",
      link: "/",
      subMenu: [
        { label: "Courses", link: "/" },
        { label: "Academic Calendar", link: "/" },
        { label: "Examinations", link: "/" },
        { label: "Curriculum", link: "/" },
        { label: "Departments", link: "/" },
        { label: "Research & Development", link: "/" },
      ],
    },
    {
      label: "Research",
      link: "/",
      subMenu: [
        { label: "Research Supervisors", link: "/" },
        { label: "Recent Publication & Patents", link: "/" },
        { label: "MDU Research Approval", link: "/" },  
        { label: "Regulation", link: "/" },
      ],
    },
    {
      label: "Events",
      link: "/",
    },
    {
      label: "Facilities",
      link: "/",
      subMenu: [
        { label: "Class Rooms & campus", link: "/" },
        { label: "Library", link: "/" },
        { label: "Computer Center", link: "/" },
        { label: "Sports", link: "/" },
        { label: "Infrastructure", link: "/" },
        {
          label: "All Facilities",
          link: "/",
          subMenu: [
            { label: "Laboratories & Workshop", link: "/" },
            { label: "Canteen & Cafeteria", link: "/" },
            { label: "Dispensary/Health Zone", link: "/" },
            { label: "Hostels", link: "/" },
            { label: "Transport", link: "/" },
            { label: "Anti Rangging Comunity", link: "/" },
            { label: "College Internal Complaint Committee", link: "/" },
          ],
        },
      ],
    },
    {
      label: "Departments",
      link: "/",
      subMenu: [
        {
          label: "Computer Science & Engg.",
          link: "/",
          subMenu: [
            { label: "About CSE", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Program Specific Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
          ],
        },
        {
          label: "Mechanical Engg.",
          link: "/",
          subMenu: [
            { label: "About ME", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Program Specific Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
            { label: "News Letters and Magazines-ME", link: "/" },
            { label: "Teaching-Learning ME", link: "/" },
          ],
        },
        {
          label: "Electronics & Comm. Engg.",
          link: "/",
          subMenu: [
            { label: "About ECE", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
            { label: "Program Specific Outcomes", link: "/" },
          ],
        },
        {
          label: "Electrical Engg.",
          link: "/",
          subMenu: [
            { label: "About EE", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Patents", link: "/" },
            { label: "Program Specific Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
          ],
        },
        
        {
          label: "Civil Engg.",
          link: "/",
          subMenu: [
            { label: "About CE", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Program Specific Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
          ],
        },
        {
          label: "Management",
          link: "/",
          subMenu: [
            { label: "About", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
          ],
        },
        {
          label: "Computer Applications",
          link: "/",
          subMenu: [
            { label: "About CA", link: "/" },
            { label: "Vision & Mission", link: "/" },
            { label: "Course Outcomes", link: "/" },
            { label: "Program Outcomes", link: "/" },
            { label: "Program Educational Objectives", link: "/" },
            { label: "Program Specific Outcomes", link: "/" },
          ],
        },
       
      ],
    },
    {
      label: "Placement",
      link: "/",
      subMenu: [
        { label: "Career Development Cell", link: "/" },
        { label: "Training Programmes", link: "/" },
        { label: "Placement Gallery", link: "/" },
        { label: "Placement Statistics", link: "/" },
        { label: "Our Recruiters", link: "/" },
      ],
    },
    {
      label: "Affilation",
      link: "/",
      subMenu: [
        { label: "Auditing Statement", link: "/" },
        { label: "Affilation & Accrediation status", link: "/" },
        { label: "Memberships & MOU", link: "/" },
        { label: "Memberships & MOU", link: "/" },
        
      ],
    },
    {
      label: "Alumni",
      link: "/",
      subMenu: [
        { label: "Registration form", link: "/alumni/registration" },
        { label: "Alumni Testimonials", link: "/" },
        { label: "Alumni videos", link: "/" },
        { label: "Gallery", link: "/" },
        // { label: "Alumni Form", link: "/" },
      ],
    },
    {
      label: "Admission",
      link: "/",
      subMenu: [
        { label: "Course Programme Offered", link: "/" },
        { label: "Fee Structure", link: "/" },
        { label: "Scholarships Scheme", link: "/" },
        { label: "Eligibility", link: "/" },
        { label: "Documents Required", link: "/" },
        { label: "Admission Form", link: "/" },
        { label: "Admission Prospectos", link: "/" },
        
      ],
    },
   
   
    {
      label: "Career",
      link: "/",
      subMenu: [
        { label: "Testimonials", link: "/" },
        { label: "Login", link: "/" },
        { label: "Register", link: "/" },
        { label: "404 Error", link: "/" },
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
      <ul className="sub-menu  py-2 ">
        {subMenu.map((item, index) => (
          <li key={index}>
            <Link style={{
              margin:'1'
            }}  className ='py-1' onClick={ClickHandler} href={item.link}>
              {item.label}
            </Link>
            {item.subMenu && renderSubMenu(item.subMenu)} {/* Render sub-sub menu if exists */}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <header style={{
      width:'100%'
    }} id="header">
      <div className={" " + props.hclass} 
      style={{
        padding:0
      }}
      >
        
        <nav
         
         style={{
          flexDirection: "column",
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), transparent)"
        }}
          className="navigation navbar navbar-expand-lg navbar-light w-screen"
        >
          <Link className="navbar-brand py-3" href="/home">
            <Image width="300" src={props.Logo} alt="logo" />
          </Link>
          <div className="">
            <MobileMenu menus={menuItems}/>
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
              zIndex: 900,
            }}
            id="navbar"
            className="collapse navbar-collapse navigation-holder"
          >
            <ul className="nav navbar-nav mb-2 mb-lg-0 ">
              {menuItems.map((item, index) => (
                <li key={index} className={item.subMenu ? "menu-item-has-children" : ""}>
                  <Link onClick={ClickHandler} href={item.link} >
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
