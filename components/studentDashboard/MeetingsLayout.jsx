import React from 'react'
import styles from './StudentDashboard.module.css';
import Sidebar from './layout/Sidebar';
import Meetings from './Meetings';


export default function MeetingsLayout() {
  return (
    <div
    className={styles.container}
         >
        <div className={styles.sidebar}>
        <Sidebar/>
        </div>

        <div className={styles.mainWrapper} >
       <Meetings/>
        </div>
      

 

    </div>
  )
}
