import Link from "next/link";
import React, { useEffect, useState } from "react";
import Payfee from "./Payfee";
import { Button } from "@mui/material"; // Import Material UI Button

function Home() {
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    } else {
      setUser({ name: "Guest" });
    }
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div style={Styles.main}>
      <h5 style={Styles.welcomeText}>Welcome: {user?.name}</h5>
      <p style={Styles.links}>
        <Link href={"/student/admission"} style={Styles.link}>Admission form</Link> |  
        
       
          <Payfee /> |
      
        
        <Link href={"/student/settings"} style={Styles.link}>My Profile</Link> 
      </p>
    </div>
  );
}

export default Home;

const Styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Ensures even spacing between elements
  },
  link: {
    textDecoration: "none",
    color: "#0070f3",
    fontWeight: "500",
  },
  button: {
    textTransform: "none",
    fontSize: "14px",
  },
};
