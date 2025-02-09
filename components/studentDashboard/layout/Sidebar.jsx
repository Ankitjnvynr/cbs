import React from 'react'
import styles from '../StudentDashboard.module.css';
import Link from 'next/link';
import { Button } from '@mui/material';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-toastify";

export default function Sidebar() {
  const handleDelete = async () => {
    const tokenRemove = sessionStorage.removeItem("token");
    const userRemove = sessionStorage.removeItem("user");

    console.log(userRemove);
    toast.success("Logged out Successfully");
  };

  return (
    <>
      <ul className={styles.mainMenus}>
        <li>
          <Link className={styles.link} href={"/student"}>
            <IoHomeOutline />
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/student/admission"}>
            <MdOutlineLibraryBooks />
            Admissions
          </Link>
        </li>
        <li>
          <Link className={styles.link} href={"/student/settings"}>
            <IoSettingsOutline />
            Settings
          </Link>
        </li>
      </ul>
      <Button onClick={handleDelete} variant="outlined">
        Logout <IoMdLogOut />
      </Button>
    </>
  );
}
