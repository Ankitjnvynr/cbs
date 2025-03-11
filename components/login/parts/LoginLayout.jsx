import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function LoginLayout({ children }) {
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  const checkLoggedIn = async () => {
    setLoading(true);
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    }
    setLoading(false);
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return loading ? (
    "Please Wait..."
  ) : (
    <>
      <Typography
        style={{ background: "#e1e1e1" }}
        align="center"
        className="pt-1"
        variant="h6"
      >
        Welcome to CBS admin pannel
      </Typography>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>

        <div className={styles.mainWrapper}>{children}</div>
      </div>
    </>
  );
}
