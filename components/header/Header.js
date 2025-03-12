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
      subMenu: [
        { label: "About Us", link: "/about-us" },
        { label: "Vision & Mission", link: "/visionmission" },
        { label: "Chairman's Message", link: "/chairman" },
        { label: "Director's Message", link: "/directors-message" },
        { label: "Director's General Message", link: "/director-general-message" },
        { label: "Organisation Chart", link: "/organisation-chart" },
        // { label: "Approvals & Affiliations", link: "/approvals" },
        { label: "Code of Conduct", link: "/codeofconduct" },
        // { label: "Mandatory Disclosures", link: "/" },
        // { label: "Financial Audit", link: "/" },
        { label: "Governing Body of Institution", link: "/governing-body-of-institution" },
        { label: "Grievance Committee", link: "/about-us/grievance" },
      ],
    },
    {
      label: "IQAC",
      link: "/",
      subMenu: [
        { label: "About IQAC", link: "/" },
        
        { label: "NAAC", link: "/" },
        { label: "AQAR", link: "/" },
        { label: "Initiatives", link: "/" },
       
      ],
    },
    {
      label: "Academics",
      link: "/",
      subMenu: [
        { label: "Programs", link: "/courses" },
        { label: "Undergraduate Programmes", link: "/courses",
          subMenu: [
            { label: "B.Tech/B.Tech.(LEET)", link: "/" ,
              subMenu: [
                { label: "Mechanical Engineering", link: "/academic/under-graduate/b.Tech-b.tech-leet/mechanical-engineering" },
                { label: "Civil Engineering", link: "/academic/under-graduate/b.Tech-b.tech-leet/civil-engineering" },
                { label: "Computer Science Engineering", link: "/academic/under-graduate/b.Tech-b.tech-leet/computer-science-engineering" },
                { label: "Electronics & Communication Engineering", link: "/academic/under-graduate/b.Tech-b.tech-leet/electronics-communication-engineering" },
                { label: "Electrical Engineering", link: "/academic/under-graduate/b.Tech-b.tech-leet/electrical-engineering" },
                // { label: "Program Educational Objectives", link: "/" },
              ],
            },
            { label: "Bachelor of Computer Application", link: "/academic/under-graduate/bca" },
            { label: "Bachelor of Business Administration", link: "/academic/under-graduate/bba" },
            // { label: "Program Outcomes", link: "/" },
            // { label: "Program Specific Outcomes", link: "/" },
            // { label: "Program Educational Objectives", link: "/" },
          ],

         },
        { label: "Postgraduate Programmes", link: "/courses",
          subMenu: [
            { label: "Master of Technology", link: "/academic/post-graduate/master-of-technology" },
            { label: "Master of Business Administration", link: "/academic/post-graduate/master-of-business-administration" },
            { label: "Master of Computer Application", link: "/academic/post-graduate/master-of-computer-application" },
            // { label: "Eligibility", link: "/" },
            // { label: "Documents Required", link: "/" },
            // { label: "Admission Form", link: "/admission" },
            // { label: "Admission Prospectos", link: "/" },
            
          ],
         },
        { label: "Teaching Pedagogy", link: "/academic/teaching-pedagogy" },
        // { label: "Courses", link: "/courses" },
        { label: "Academic Calendar", link: "/acadmic-calander" },
        { label: "Examinations", link: "/academic/examination" },
        { label: "Faculty", link: "/academic/faculty" },
        { label: "Syllabus", link: "/academic/syllabus" },
        { label: "Curriculum", link: "/curriculam" },
        { label: "Departments", link: "/departments" },
        // { label: "Research & Development", link: "/" },
      ],
    },
    {
      label: "Admission",
      link: "/",
      subMenu: [
        // { label: "Course Programme Offered", link: "/" },
        { label: "Fee Structure", link: "/fee-structure" },
        { label: "Scholarships Scheme", link: "/" },
        { label: "Eligibility", link: "/eligibility-crieteria" },
        { label: "Admission Procedure", link: "/admission-procedure" },
        { label: "Documents Required", link: "/" },
        { label: "Online Registration Form", link: "/online-registration-form" },
        { label: "Admission Prospectos", link: "/" },
        
        
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
      label: "Facilities",
      link: "/",
      subMenu: [
        { label: "Class Rooms & campus", link: "/facility/class-rooms-campus" },
        { label: "Library", link: "/facility/library" },
        { label: "Computer Center", link: "/facility/computer-center" },
        { label: "Sports", link: "/facility/sports" },
        { label: "Infrastructure", link: "/facility/infrastructure" },
        
            { label: "Laboratories & Workshop", link: "/facility/laboratories-workshops" },
            { label: "Canteen & Cafeteria", link: "/facility/canteen-cafeteria" },
            { label: "Dispensary/Health Zone", link: "/facility/healthzone" },
            { label: "Hostels", link: "/facility/hostels" },
            { label: "Transport", link: "/facility/transportation" },
            { label: "Anti Rangging Comunity", link: "/" },
            { label: "College Internal Complaint Committee", link: "/" },
          
        
      ],
    },
   
    {
      label: "Placement",
      link: "/",
      subMenu: [
        { label: "Career Development Cell", link: "/introduction-about-placement" },
        { label: "Placement Cell", link: "#",
          subMenu:[
            {label:'Objective of Placement Cell', link:'/objective-of-placement-cell'},
            {label:'Activities of the Cell', link:'/activity-of-placement-cell'},
            {label:'Placement Policy', link:'/placement-policy'},
            {label:'Placement Procedure', link:'/placement-procedure'},
            {label:'FAQs', link:'/placement-faqs'},
          ]
         },
        { label: "Internship and Training Programmes", link: "/internship" },
        { label: "Industrial Visits", link: "/industrial-visits" },
        { label: "Seminars & Guest Lectures", link: "/seminar-guest-lectures" },
        { label: "Placement Gallery", link: "/" },
        { label: "Placement Statistics", link: "/" },
        { label: "Our Recruiters", link: "/" },
        { label: "Personality Development", link: "/personality-development-programmes",
          subMenu:[
            {label:'Communication Skills',link:'/communication-skills'},
            {label:'Group Discussions, Debates',link:'/group-discussions-debates'},
            {label:'Resume Writing Tips',link:'/resume-writing-tips'},
            {label:'Interviews Tips/Questions',link:'/interviews-tips-questions'},
            {label:'Do & Dont While Handling Interview',link:'/do-and-dont-while-handling-interview'},
          ]
         },
      ],
    },
    {
      label: "Affilation",
      link: "/",
      subMenu: [
        { label: "Auditing Statement", link: "/affilation/auditing-statement" },
        { label: "Affilation & Accrediation status", link: "/affilation/affilation-accrediation-status" },
        { label: "Memberships & MOU", link: "/affilation/memberships-mou" },
         { label: "Mandatory Disclosures", link: "/affilation/mandatory-disclosures" },
        { label: "Financial Audit", link: "/affilation/financial-audit" },
        // { label: "Memberships & MOU", link: "/" },
        
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
        { label: "Feedback form", link: "/feedback" },
        // { label: "Alumni Form", link: "/" },
      ],
    },
   
    {
      label: "Events",
      link: "/",
    },
   
    {
      label: "Career",
      link: "/",
      subMenu: [
        { label: "Current opening", link: "/current-opening" },
        
        { label: "upload resume", link: "/upload-resume-for-job" },
       
       
      ],
    },
    // {
    //   label: "Blogs",
    //   link: "/",
     
    // },
    {
      label: "Gallery",
      link: "/gallery",
     
    },
    {
      label: "Contact",
      link: "/contact-us",
    },
    {
      label: "Downloads",
      link: "/Download",
     
    },
    {
      label: "Login ",
      link: "/",
      subMenu: [
        { label: "Student Login", link: "/" },
        
        { label: "Admin Panel", link: "/" },
       
       
      ],
     
    },
  ];
  

  // Recursive function to render sub-menu items
  const renderSubMenu = (subMenu) => {
    return (
      <ul className="sub-menu  py-2 ">
        {subMenu.map((item, index) => (
          <li key={index}>
            <Link style={{
              margin:'1',
              fontSize:'13px'
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
        padding:0,
        
      }}
      >
        
        <nav
         
         style={{
          
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), transparent)",
          position:'relative',
        }}
          className="navigation navbar navbar-main navbar-expand-lg navbar-light w-screen"
        >
          <Link className="navbar-brand py-3 px-3 " href="/">
            <Image id="mainLogo"  src={props.Logo} alt="logo" />
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
                  <Link  onClick={ClickHandler} href={item.link} >
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
