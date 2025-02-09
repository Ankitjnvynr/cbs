import Link from "next/link";
import React, { useEffect, useState } from "react";

function Home() {
  const [user, setUser] = useState({ name: "Guest" });
  useEffect(()=>{
    const userData = JSON.parse(sessionStorage.getItem('user'))
    if(userData){
        setUser(userData)
    }
  },[])

  return (
    <div style={Styles.main}>
      <h5>Welcome:{user.name ?? user.name}</h5>
      <p>
        <Link href={"/student/admission"}>Admission form</Link>  |  
        <Link href={"/student/admission"}>Pay Fee</Link>  | 
        <Link href={"/student/settings"}>My Profile</Link> 
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
};
