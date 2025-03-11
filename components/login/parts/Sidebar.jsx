import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import styles from "./Layout.module.css";
import Link from 'next/link';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineGroups, MdOutlineLibraryBooks, MdOutlineReceiptLong } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline, IoMdLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";

export default function Sidebar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmLogout = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    toast.success("Logged out Successfully");
    setOpen(false);
    router.push('/login')
  };

  return (
    <>
      <ul className={styles.mainMenus}>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/login/dashboard" ? styles.active : ""}`} href="/login/dashboard">
            <IoHomeOutline />
            <span className={styles.text}>Home</span>
          </Link>
        </li>
       
        <li>
          <Link className={`${styles.link} ${router.pathname === "/login/payments" ? styles.active : ""}`} href="/login/payments">
          <MdOutlineReceiptLong />
            <span className={styles.text}>Payments</span>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/login/meetings" ? styles.active : ""}`} href="/login/meetings">
          <MdOutlineGroups />
            <span className={styles.text}>Meetings</span>
          </Link>
        </li>

        <li>
          <Link className={`${styles.link} ${router.pathname === "/login/students" ? styles.active : ""}`} href="/login/students">
          <FaRegUser />
            <span className={styles.text}>Students</span>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/login/notices" ? styles.active : ""}`} href="/login/notices">
          <IoIosNotificationsOutline />
            <span className={styles.text}>Notices</span>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/login/blogs" ? styles.active : ""}`} href="/login/blogs">
          <TbBrandBlogger />
            <span className={styles.text}>Blogs</span>
          </Link>
        </li>
      </ul>
      <button style={{color:'red', border:'red'}}  onClick={handleOpen} className={`${styles.link}`} >
        <span className={styles.text}>Logout</span>
        <IoMdLogOut />
      </button>

      {/* Logout Confirmation Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleConfirmLogout} color="error" variant="contained">Logout</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
