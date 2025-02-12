import React, { useEffect, useState } from 'react'
import styles from './StudentDashboard.module.css';
import Sidebar from './layout/Sidebar';
import AdmissionForm from './AdmissionForm';
import ReciptList from "./ReciptList";
import admissionService from "../../services/admission";

export default function AdmissionLayout() {
  const [user, setUser] = useState({ name: "Guest" });
  const [reciptData, setRecieptData] = useState([]);

  const getReciptList = async () => {
    const response = await admissionService.getRecords();
    setRecieptData(response.data.data)
    console.log(response.data);
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    }
    getReciptList();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainWrapper}>
        <h5>Welcome:{user.name ?? user.name}</h5>
        <AdmissionForm />
        <ReciptList rows={reciptData} />
      </div>
    </div>
  );
}
