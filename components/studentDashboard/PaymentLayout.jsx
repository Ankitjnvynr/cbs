import React from 'react'
import Sidebar from './layout/Sidebar'
import Payment from './Payment'
import styles from './StudentDashboard.module.css';
import ReciptList from './ReciptList'

const PaymentLayout = () => {
  return (
    <div
    className={styles.container}
         >
        <div className={styles.sidebar}>
        <Sidebar/>
        </div>

        <div className={styles.mainWrapper} >
        <h6 className="mt-4 text-center"> Payment History</h6>
       <ReciptList  />
        </div>
      

 

    </div>
  )
}

export default PaymentLayout