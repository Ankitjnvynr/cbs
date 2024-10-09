import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        submenu: [
            {
                id: 11,
                title: '',
                link: '/'
            },
            {
                id: 12,
                title: '',
                link: '/home-2'
            },
            {
                id: 13,
                title: '',
                link: '/home-3'
            },
           
        ]
    },

    {
        id: 6,
        title: 'About',
        link: '/',
    },
    {
        id: 7,
        title: 'Services',
        link: '/',
        submenu: [
            {
                id: 71,
                title: '',
                link: '',
            },
            {
                id: 72,
                title: '',
                link: ''
            }
        ]
    },
    {
        id: 8,
        title: 'Admission',
        link: '/',
        submenu: [
            {
                id: 81,
                title: '',
                link: '',
            },
            {
                id: 82,
                title: '',
                link: ''
            },
        ]
    },
    {
        id: 5,
        title: 'Facilites',
        link: '/',
        submenu: [
            {
                id: 51,
                title: '',
                link: ''
            },
            {
                id: 52,
                title: '',
                link: ''
            },
            {
                id: 53,
                title: '',
                link: ''
            },
            {
                id: 54,
                title: '',
                link: ''
            },
            {
                id: 55,
                title: '',
                link: ''
            },
            {
                id: 56,
                title: '',
                link: ''
            },
        ]
    },
    {
        id: 3,
        title: 'Carrer',
        link: '/',
        submenu: [
            {
                id: 31,
                title: '',
                link: ''
            },
            {
                id: 32,
                title: 'Login',
                link: '/login'
            },
            {
                id: 33,
                title: 'Register',
                link: '/register'
            },
            {
                id: 34,
                title: '404',
                link: '/404'
            },
            
        ]
    },

    {
        id: 88,
        title: 'Contact',
        link: '/',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
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

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
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