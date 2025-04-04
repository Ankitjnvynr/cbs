import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../StudentDashboard.module.css';
import Link from 'next/link';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineGroups, MdOutlineLibraryBooks, MdOutlineReceiptLong } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";

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
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    toast.success("Logged out Successfully");
    setOpen(false);
    router.push('/student/auth')
  };

  return (
    <>
      <ul className={styles.mainMenus}>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/student" ? styles.active : ""}`} href="/student">
            <IoHomeOutline />
            <span className={styles.text}>Home</span>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/student/admission" ? styles.active : ""}`} href="/student/admission">
            <MdOutlineLibraryBooks />
            <span className={styles.text}>Upload receipt</span>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/student/payment" ? styles.active : ""}`} href="/student/payment">
          <MdOutlineReceiptLong />
            <span className={styles.text}>Payment history</span>
          </Link>
        </li>
        <li>
          <Link className={`${styles.link} ${router.pathname === "/student/meetings" ? styles.active : ""}`} href="/student/meetings">
          <MdOutlineGroups />
            <span className={styles.text}>Meetings</span>
          </Link>
        </li>

        <li>
          <Link className={`${styles.link} ${router.pathname === "/student/settings" ? styles.active : ""}`} href="/student/settings">
          <FaRegUser />
            <span className={styles.text}>Profile</span>
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
