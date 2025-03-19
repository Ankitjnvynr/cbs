import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/",
    submenu: [
      { id: 21, title: "About Us", link: "/about-us" },
      { id: 22, title: "Vision & Mission", link: "/visionmission" },
      { id: 23, title: "Chairman's Message", link: "/chairman" },
      {
        id: 24,
        title: "Director's General Message",
        link: "/director-general-message",
      },
      { id: 25, title: "Director's Message", link: "/directors-message" },
      { id: 26, title: "Organisation Chart", link: "/organisation-chart" },
      { id: 27, title: "Code of Conduct", link: "/codeofconduct" },
      {
        id: 28,
        title: "Governing Body of Institution",
        link: "/governing-body-of-institution",
      },
      { id: 29, title: "Grievance Committee", link: "/about-us/grievance" },
    ],
  },
  {
    id: 3,
    title: "IQAC",
    link: "/",
    submenu: [
      { id: 31, title: "About IQAC", link: "/" },
      { id: 32, title: "NAAC", link: "/" },
      { id: 33, title: "AQAR", link: "/" },
      { id: 34, title: "Initiatives", link: "/" },
    ],
  },
  {
    id: 4,
    title: "Academics",
    link: "/",
    submenu: [
      { id: 41, title: "Programmes", link: "/courses" },
      {
        id: 42,
        title: "Undergraduate Programmes",
        link: "/courses",
        submenu: [
          {
            id: 421,
            title: "B.Tech/B.Tech.(LEET)",
            link: "/",
            submenu: [
              {
                id: 4211,
                title: "Mechanical Engineering",
                link: "/academic/under-graduate/b.Tech-b.tech-leet/mechanical-engineering",
              },
              {
                id: 4212,
                title: "Civil Engineering",
                link: "/academic/under-graduate/b.Tech-b.tech-leet/civil-engineering",
              },
              {
                id: 4213,
                title: "Computer Science Engineering",
                link: "/academic/under-graduate/b.Tech-b.tech-leet/computer-science-engineering",
              },
              {
                id: 4214,
                title: "Electronics & Communication Engineering",
                link: "/academic/under-graduate/b.Tech-b.tech-leet/electronics-communication-engineering",
              },
              {
                id: 4215,
                title: "Electrical Engineering",
                link: "/academic/under-graduate/b.Tech-b.tech-leet/electrical-engineering",
              },
            ],
          },
          {
            id: 422,
            title: "Bachelor of Computer Application",
            link: "/academic/under-graduate/bca",
          },
          {
            id: 423,
            title: "Bachelor of Business Administration",
            link: "/academic/under-graduate/bba",
          },
        ],
      },
      {
        id: 43,
        title: "Postgraduate Programmes",
        link: "/courses",
        submenu: [
          {
            id: 431,
            title: "Master of Technology",
            link: "/academic/post-graduate/master-of-technology",
          },
          {
            id: 432,
            title: "Master of Business Administration",
            link: "/academic/post-graduate/master-of-business-administration",
          },
          {
            id: 433,
            title: "Master of Computer Application",
            link: "/academic/post-graduate/master-of-computer-application",
          },
        ],
      },
      {
        id: 44,
        title: "Teaching Pedagogy",
        link: "/academic/teaching-pedagogy",
      },
      { id: 45, title: "Academic Calendar", link: "/acadmic-calander" },
      { id: 46, title: "Examinations", link: "/academic/examination" },
      { id: 47, title: "Faculty", link: "/academic/faculty" },
      { id: 48, title: "Syllabus", link: "/academic/syllabus" },
      { id: 49, title: "Curriculum", link: "/curriculam" },
    ],
  },
  {
    id: 5,
    title: "Admission",
    link: "/",
    submenu: [
      { id: 51, title: "Fee Structure", link: "/fee-structure" },
      { id: 52, title: "Scholarships Scheme", link: "/" },
      { id: 53, title: "Eligibility", link: "/eligibility-crieteria" },
      { id: 54, title: "Admission Procedure", link: "/admission-procedure" },
      {
        id: 55,
        title: "Online Registration Form",
        link: "/online-registration-form",
      },
    ],
  },
  {
    id: 6,
    title: "Departments",
    link: "/",
    submenu: [
      {
        id: 61,
        title: "Computer Science & Engg.",
        link: "/",
        submenu: [
          { id: 611, title: "About CSE", link: "/" },
          { id: 612, title: "Vision & Mission", link: "/" },
          { id: 613, title: "Course Outcomes", link: "/" },
          { id: 614, title: "Program Outcomes", link: "/" },
          { id: 615, title: "Program Specific Outcomes", link: "/" },
          { id: 616, title: "Program Educational Objectives", link: "/" },
        ],
      },
      {
        id: 62,
        title: "Mechanical Engg.",
        link: "/",
        submenu: [
          { id: 621, title: "About ME", link: "/" },
          { id: 622, title: "Vision & Mission", link: "/" },
          { id: 623, title: "Course Outcomes", link: "/" },
          { id: 624, title: "Program Outcomes", link: "/" },
          { id: 625, title: "Program Specific Outcomes", link: "/" },
          { id: 626, title: "Program Educational Objectives", link: "/" },
          { id: 627, title: "News Letters and Magazines-ME", link: "/" },
          { id: 628, title: "Teaching-Learning ME", link: "/" },
        ],
      },
      {
        id: 63,
        title: "Electronics & Comm. Engg.",
        link: "/",
        submenu: [
          { id: 631, title: "About ECE", link: "/" },
          { id: 632, title: "Vision & Mission", link: "/" },
          { id: 633, title: "Course Outcomes", link: "/" },
          { id: 634, title: "Program Outcomes", link: "/" },
          { id: 635, title: "Program Educational Objectives", link: "/" },
          { id: 636, title: "Program Specific Outcomes", link: "/" },
        ],
      },
      {
        id: 64,
        title: "Electrical Engg.",
        link: "/",
        submenu: [
          { id: 641, title: "About EE", link: "/" },
          { id: 642, title: "Vision & Mission", link: "/" },
          { id: 643, title: "Course Outcomes", link: "/" },
          { id: 644, title: "Program Outcomes", link: "/" },
          { id: 645, title: "Patents", link: "/" },
          { id: 646, title: "Program Specific Outcomes", link: "/" },
          { id: 647, title: "Program Educational Objectives", link: "/" },
        ],
      },
      {
        id: 65,
        title: "Civil Engg.",
        link: "/",
        submenu: [
          { id: 651, title: "About CE", link: "/" },
          { id: 652, title: "Vision & Mission", link: "/" },
          { id: 653, title: "Course Outcomes", link: "/" },
          { id: 654, title: "Program Outcomes", link: "/" },
          { id: 655, title: "Program Specific Outcomes", link: "/" },
          { id: 656, title: "Program Educational Objectives", link: "/" },
        ],
      },
      {
        id: 66,
        title: "Management",
        link: "/",
        submenu: [
          { id: 661, title: "About", link: "/" },
          { id: 662, title: "Vision & Mission", link: "/" },
          { id: 663, title: "Course Outcomes", link: "/" },
          { id: 664, title: "Program Outcomes", link: "/" },
          { id: 665, title: "Program Educational Objectives", link: "/" },
        ],
      },
      {
        id: 67,
        title: "Computer Applications",
        link: "/",
        submenu: [
          { id: 671, title: "About CA", link: "/" },
          { id: 672, title: "Vision & Mission", link: "/" },
          { id: 673, title: "Course Outcomes", link: "/" },
          { id: 674, title: "Program Outcomes", link: "/" },
          { id: 675, title: "Program Educational Objectives", link: "/" },
          { id: 676, title: "Program Specific Outcomes", link: "/" },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Research",
    link: "/",
    submenu: [
      { id: 71, title: "Research Supervisors", link: "/" },
      { id: 72, title: "Recent Publication & Patents", link: "/" },
      { id: 73, title: "MDU Research Approval", link: "/" },
      { id: 74, title: "Regulation", link: "/" },
    ],
  },
  {
    id: 8,
    title: "Facilities",
    link: "/",
    submenu: [
      {
        id: 81,
        title: "Class Rooms & Campus",
        link: "/facility/class-rooms-campus",
      },
      { id: 82, title: "Library", link: "/facility/library" },
      { id: 83, title: "Computer Center", link: "/facility/computer-center" },
      { id: 84, title: "Sports", link: "/facility/sports" },
      { id: 85, title: "Infrastructure", link: "/facility/infrastructure" },
      {
        id: 86,
        title: "Laboratories & Workshop",
        link: "/facility/laboratories-workshops",
      },
      {
        id: 87,
        title: "Canteen & Cafeteria",
        link: "/facility/canteen-cafeteria",
      },
      { id: 88, title: "Dispensary/Health Zone", link: "/facility/healthzone" },
      { id: 89, title: "Hostels", link: "/facility/hostels" },
      { id: 90, title: "Transport", link: "/facility/transportation" },
      { id: 91, title: "Anti Ragging Community", link: "/" },
      { id: 92, title: "College Internal Complaint Committee", link: "/" },
    ],
  },
  {
    id: 9,
    title: "Placement",
    link: "/",
    submenu: [
      {
        id: 91,
        title: "Career Development Cell",
        link: "/introduction-about-placement",
      },
      {
        id: 92,
        title: "Placement Cell",
        link: "#",
        submenu: [
          {
            id: 921,
            title: "Objective of Placement Cell",
            link: "/objective-of-placement-cell",
          },
          {
            id: 922,
            title: "Activities of the Cell",
            link: "/activity-of-placement-cell",
          },
          { id: 923, title: "Placement Policy", link: "/placement-policy" },
          {
            id: 924,
            title: "Placement Procedure",
            link: "/placement-procedure",
          },
          { id: 925, title: "FAQs", link: "/placement-faqs" },
        ],
      },
      {
        id: 93,
        title: "Internship and Training Programmes",
        link: "/internship",
      },
      { id: 94, title: "Industrial Visits", link: "/industrial-visits" },
      {
        id: 95,
        title: "Seminars & Guest Lectures",
        link: "/seminar-guest-lectures",
      },
      { id: 96, title: "Placement Gallery", link: "/" },
      { id: 97, title: "Placement Statistics", link: "/" },
      { id: 98, title: "Our Recruiters", link: "/" },
      {
        id: 99,
        title: "Personality Development",
        link: "/personality-development-programmes",
        submenu: [
          {
            id: 991,
            title: "Communication Skills",
            link: "/communication-skills",
          },
          {
            id: 992,
            title: "Group Discussions, Debates",
            link: "/group-discussions-debates",
          },
          {
            id: 993,
            title: "Resume Writing Tips",
            link: "/resume-writing-tips",
          },
          {
            id: 994,
            title: "Interviews Tips/Questions",
            link: "/interviews-tips-questions",
          },
          {
            id: 995,
            title: "Do & Don't While Handling Interview",
            link: "/do-and-dont-while-handling-interview",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Affiliation",
    link: "/",
    submenu: [
      {
        id: 101,
        title: "Auditing Statement",
        link: "/affilation/auditing-statement",
      },
      {
        id: 102,
        title: "Affiliation & Accreditation Status",
        link: "/affilation/affilation-accrediation-status",
      },
      {
        id: 103,
        title: "Memberships & MOU",
        link: "/affilation/memberships-mou",
      },
      {
        id: 104,
        title: "Mandatory Disclosures",
        link: "/affilation/mandatory-disclosures",
      },
      {
        id: 105,
        title: "Financial Audit",
        link: "/affilation/financial-audit",
      },
    ],
  },
  {
    id: 11,
    title: "Alumni",
    link: "/",
    submenu: [
      { id: 111, title: "Registration Form", link: "/alumni/registration" },
      { id: 112, title: "Alumni Testimonials", link: "/" },
      { id: 113, title: "Alumni Videos", link: "/" },
      { id: 114, title: "Gallery", link: "/" },
      { id: 115, title: "Feedback Form", link: "/feedback" },
    ],
  },
  {
    id: 12,
    title: "Events",
    link: "/",
  },
  {
    id: 13,
    title: "Career",
    link: "/",
    submenu: [
      { id: 131, title: "Current Opening", link: "/current-opening" },
      { id: 132, title: "Upload Resume", link: "/upload-resume-for-job" },
    ],
  },
  {
    id: 14,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 15,
    title: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 16,
    title: "Downloads",
    link: "/",
  },
  {
    id: 17,
    title: "Login",
    link: "/",
    submenu: [
      { id: 171, title: "Student Login", link: "/student/" },
      { id: 172, title: "Admin Panel", link: "/login/" },
    ],
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);
  const [openIds, setOpenIds] = useState([]); // Example if using React useState

  const toggleOpenId = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div
      style={{
        width: "90vw",
      }}
    >
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close ">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>
        <ul className="responsivemenu">
      {menus.map((item) => (
        <ListItem
          className={openIds.includes(item.id) ? "active" : null}
          key={item.id}
        >
          {item.submenu ? (
            <Fragment>
              <p onClick={() => toggleOpenId(item.id)}>
                {item.title}
                <i
                  className={
                    openIds.includes(item.id)
                      ? "fa fa-angle-up"
                      : "fa fa-angle-down"
                  }
                ></i>
              </p>
              <Collapse
                in={openIds.includes(item.id)}
                timeout="auto"
                unmountOnExit
              >
                <List className="subMenu">
                  {item.submenu.map((subitem) => (
                    <ListItem key={subitem.id}>
                      {subitem.submenu ? (
                        <Fragment>
                          <p onClick={() => toggleOpenId(subitem.id)}>
                            {subitem.title}
                            <i
                              className={
                                openIds.includes(subitem.id)
                                  ? "fa fa-angle-up"
                                  : "fa fa-angle-down"
                              }
                            ></i>
                          </p>
                          <Collapse
                            in={openIds.includes(subitem.id)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List className="subMenu">
                              {subitem.submenu.map((nestedSubitem) => (
                                <ListItem key={nestedSubitem.id}>
                                  <Link className="active" href={nestedSubitem.link}>
                                    {nestedSubitem.title}
                                  </Link>
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </Fragment>
                      ) : (
                        <Link className="active" href={subitem.link}>
                          {subitem.title}
                        </Link>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          ) : (
            <Link className="active" href={item.link}>
              {item.title}
            </Link>
          )}
        </ListItem>
      ))}
    </ul>
      </div>

      <div
        className="showmenu mobail-menu  "
        onClick={() => setMenuState(!menuActive)}
      >
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;