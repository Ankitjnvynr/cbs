import React from 'react'
import styles from './StudentDashboard.module.css';
import Sidebar from './layout/Sidebar';

export default function DashboardHome() {
  return (
    <div
    className={styles.container}
         >
        <div className={styles.sidebar}>
        <Sidebar/>
        </div>

        <div className={styles.mainWrapper} >
home
        </div>

 

    </div>
  )
}
