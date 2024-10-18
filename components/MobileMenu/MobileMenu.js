import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus =[
    {
        "id": 1,
        "title": "Home",
        "link": "/"
    },
    {
        "id": 6,
        "title": "About",
        "link": "/",
        "submenu": [
            {
                "id": 11,
                "title": "Vision and Mission",
                "link": "/"
            },
            {
                "id": 12,
                "title": "President’s Message",
                "link": "/"
            },
            {
                "id": 13,
                "title": "Director’s Message",
                "link": "/"
            },
            {
                "id": 14,
                "title": "Director General’s Message",
                "link": "/"
            },
            {
                "id": 15,
                "title": "Governing Body of Institution",
                "link": "/"
            },
            {
                "id": 16,
                "title": "Grievance Committee",
                "link": "/"
            }
        ]
    },
    {
        "id": 7,
        "title": "Alumni",
        "link": "/",
        "submenu": [
            {
                "id": 71,
                "title": "Registration Form",
                "link": "/alumni/registration"
            },
            {
                "id": 72,
                "title": "Alumni Testimonials",
                "link": "/"
            },
            {
                "id": 73,
                "title": "Alumni Videos",
                "link": "/"
            },
            {
                "id": 74,
                "title": "Gallery",
                "link": "/"
            }
        ]
    },
    {
        "id": 8,
        "title": "Admission",
        "link": "/",
        "submenu": [
            {
                "id": 81,
                "title": "Eligibility",
                "link": "/"
            },
            {
                "id": 82,
                "title": "Admission Procedure",
                "link": "/"
            }
        ]
    },
    {
        "id": 5,
        "title": "Facilities",
        "link": "/",
        "submenu": [
            {
                "id": 51,
                "title": "Class Rooms & Campus",
                "link": "/"
            },
            {
                "id": 52,
                "title": "Library",
                "link": "/"
            },
            {
                "id": 53,
                "title": "Computer Center",
                "link": "/"
            },
            {
                "id": 54,
                "title": "Laboratories & Workshop",
                "link": "/"
            },
            {
                "id": 55,
                "title": "Canteen & Cafeteria",
                "link": "/"
            },
            {
                "id": 56,
                "title": "Hostels",
                "link": "/"
            }
        ]
    },
    {
        "id": 9,
        "title": "Departments",
        "link": "/",
        "submenu": [
            {
                "id": 91,
                "title": "Computer Science & Engg.",
                "link": "/",
                "submenu": [
                    { "id": 911, "title": "About CSE", "link": "/" },
                    { "id": 912, "title": "Vision & Mission", "link": "/" },
                    { "id": 913, "title": "Course Outcomes", "link": "/" },
                    { "id": 914, "title": "Program Outcomes", "link": "/" },
                    { "id": 915, "title": "Program Specific Outcomes", "link": "/" },
                    { "id": 916, "title": "Program Educational Objectives", "link": "/" }
                ]
            },
            {
                "id": 92,
                "title": "Mechanical Engg.",
                "link": "/",
                "submenu": [
                    { "id": 921, "title": "About ME", "link": "/" },
                    { "id": 922, "title": "Vision & Mission", "link": "/" },
                    { "id": 923, "title": "Course Outcomes", "link": "/" },
                    { "id": 924, "title": "Program Outcomes", "link": "/" },
                    { "id": 925, "title": "Program Specific Outcomes", "link": "/" },
                    { "id": 926, "title": "Program Educational Objectives", "link": "/" },
                    { "id": 927, "title": "Newsletters & Magazines", "link": "/" },
                    { "id": 928, "title": "Teaching-Learning", "link": "/" }
                ]
            },
            {
                "id": 93,
                "title": "Electronics & Comm. Engg.",
                "link": "/",
                "submenu": [
                    { "id": 931, "title": "About ECE", "link": "/" },
                    { "id": 932, "title": "Vision & Mission", "link": "/" },
                    { "id": 933, "title": "Course Outcomes", "link": "/" },
                    { "id": 934, "title": "Program Outcomes", "link": "/" },
                    { "id": 935, "title": "Program Specific Outcomes", "link": "/" },
                    { "id": 936, "title": "Program Educational Objectives", "link": "/" }
                ]
            },
            {
                "id": 94,
                "title": "Electrical Engg.",
                "link": "/",
                "submenu": [
                    { "id": 941, "title": "About EE", "link": "/" },
                    { "id": 942, "title": "Vision & Mission", "link": "/" },
                    { "id": 943, "title": "Course Outcomes", "link": "/" },
                    { "id": 944, "title": "Program Outcomes", "link": "/" },
                    { "id": 945, "title": "Patents", "link": "/" },
                    { "id": 946, "title": "Program Specific Outcomes", "link": "/" },
                    { "id": 947, "title": "Program Educational Objectives", "link": "/" }
                ]
            },
            {
                "id": 95,
                "title": "Fire Technology & Safety",
                "link": "/",
                "submenu": [
                    { "id": 951, "title": "About FTS", "link": "/" },
                    { "id": 952, "title": "Vision & Mission", "link": "/" },
                    { "id": 953, "title": "Course Outcomes", "link": "/" },
                    { "id": 954, "title": "Program Outcomes", "link": "/" },
                    { "id": 955, "title": "Program Specific Outcomes", "link": "/" },
                    { "id": 956, "title": "Program Educational Objectives", "link": "/" }
                ]
            },
            {
                "id": 96,
                "title": "Civil Engg.",
                "link": "/",
                "submenu": [
                    { "id": 961, "title": "About CE", "link": "/" },
                    { "id": 962, "title": "Vision & Mission", "link": "/" },
                    { "id": 963, "title": "Course Outcomes", "link": "/" },
                    { "id": 964, "title": "Program Outcomes", "link": "/" },
                    { "id": 965, "title": "Program Specific Outcomes", "link": "/" },
                    { "id": 966, "title": "Program Educational Objectives", "link": "/" }
                ]
            },
            {
                "id": 97,
                "title": "Management",
                "link": "/",
                "submenu": [
                    { "id": 971, "title": "About", "link": "/" },
                    { "id": 972, "title": "Vision & Mission", "link": "/" },
                    { "id": 973, "title": "Course Outcomes", "link": "/" },
                    { "id": 974, "title": "Program Outcomes", "link": "/" },
                    { "id": 975, "title": "Program Educational Objectives", "link": "/" }
                ]
            },
            {
                "id": 98,
                "title": "Computer Applications",
                "link": "/",
                "submenu": [
                    { "id": 981, "title": "About CA", "link": "/" },
                    { "id": 982, "title": "Vision & Mission", "link": "/" },
                    { "id": 983, "title": "Course Outcomes", "link": "/" },
                    { "id": 984, "title": "Program Outcomes", "link": "/" },
                    { "id": 985, "title": "Program Educational Objectives", "link": "/" },
                    { "id": 986, "title": "Program Specific Outcomes", "link": "/" }
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Career",
        "link": "/",
        "submenu": [
            {
                "id": 31,
                "title": "Testimonials",
                "link": "/"
            },
            {
                "id": 32,
                "title": "Login",
                "link": "/"
            },
            {
                "id": 33,
                "title": "Register",
                "link": "/"
            },
            {
                "id": 34,
                "title": "404",
                "link": "/"
            }
        ]
    },
    {
        "id": 88,
        "title": "Research",
        "link": "/",
        "submenu": [
            {
                "id": 881,
                "title": "Research Supervisors",
                "link": "/"
            },
            {
                "id": 882,
                "title": "Recent Publications & Patents",
                "link": "/"
            },
            {
                "id": 883,
                "title": "VTU Research Approval",
                "link": "/"
            },
            {
                "id": 884,
                "title": "Regulation",
                "link": "/"
            }
        ]
    },
    {
        "id": 89,
        "title": "Events",
        "link": "/"
    },
    {
        "id": 90,
        "title": "Placement",
        "link": "/",
        "submenu": [
            {
                "id": 901,
                "title": "Career Development Cell",
                "link": "/"
            },
            {
                "id": 902,
                "title": "Training Programmes",
                "link": "/"
            },
            {
                "id": 903,
                "title": "Placement Gallery",
                "link": "/"
            },
            {
                "id": 904,
                "title": "Our Recruiters",
                "link": "/"
            }
        ]
    },
    {
        "id": 91,
        "title": "Contact Us",
        "link": "/contact"
    }
]




const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div style={{
            width:'90vw',
            
        }}>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div
               
                className="menu-close ">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu  " onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;