import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";

export default function LoginLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainWrapper}>{children}</div>
    </div>
  );
}
