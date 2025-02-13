import React, { useEffect, useState } from 'react'
import styles from './StudentDashboard.module.css';
import Sidebar from './layout/Sidebar';
import AdmissionForm from './AdmissionForm';


export default function AdmissionLayout() {
  const [user, setUser] = useState({ name: "Guest" });
  

 

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
    
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainWrapper}>
        <h5>Welcome:{user.name ?? user.name}</h5>
        <AdmissionForm />
       
      </div>
    </div>
  );
}
