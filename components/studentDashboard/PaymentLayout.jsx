import React from 'react'
import Sidebar from './layout/Sidebar'
import Payment from './Payment'
import styles from './StudentDashboard.module.css';

const PaymentLayout = () => {
  return (
    <div
    className={styles.container}
         >
        <div className={styles.sidebar}>
        <Sidebar/>
        </div>

        <div className={styles.mainWrapper} >
       <Payment/>
        </div>
      

 

    </div>
  )
}

export default PaymentLayout