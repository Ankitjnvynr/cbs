import React from 'react'
import styles from '../StudentDashboard.module.css';
import Link from 'next/link';
import { Button } from '@mui/material';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";


export default function Sidebar() {
  return (
    <>
    <ul className={styles.mainMenus} >
        <li><Link className={styles.link} href={'/student'} ><IoHomeOutline />Home</Link></li>
        <li><Link className={styles.link} href={'/student/admission'} ><MdOutlineLibraryBooks />Admissions</Link></li>
        <li><Link className={styles.link} href={'/student/settings'} ><IoSettingsOutline />Settings</Link></li>
    </ul>
    <Button variant="outlined">Logout <IoMdLogOut /></Button>
    </>
  )
}
