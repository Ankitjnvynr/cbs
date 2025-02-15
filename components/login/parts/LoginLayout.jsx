import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";
import { Typography } from "@mui/material";

export default function LoginLayout({ children }) {
  return (
    <><Typography style={{background:'#e1e1e1'}} align="center" className="pt-1" variant="h6">Welcome to CBS admin pannel</Typography>
    <div className={styles.container}>
      
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainWrapper}>{children}</div>
    </div>
    </>
  );
}
