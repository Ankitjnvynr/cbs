import React, { useEffect, useState } from "react";
import Sidebar from "./layout/Sidebar";
import Payment from "./Payment";
import styles from "./StudentDashboard.module.css";
import ReciptList from "./ReciptList";
import PaginationButton from "./PaginationButton";
import admissionService from "../../services/admission";
import ReciptViewModal from "./layout/ReciptViewModal";

const PaymentLayout = () => {
  const [rows, setRows] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const getReciptList = async (page = 1) => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
      const response = await admissionService.getRecords({
        email: userData.email,
        page,
      });
      setRows(response.data.data);
      console.log(response.data);
      setCurrentPage(response.data.currentPage);
      setTotalPage(response.data.totalPages);
    }
  };

  useEffect(() => {
    getReciptList();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.mainWrapper}>
        
        <h6 className="mt-4 text-center"> Payment History</h6>
        <ReciptList rows={rows} />
        <PaginationButton
          count={totalPage}
          page={currentPage}
          getReciptList={getReciptList}
        />
      </div>
    </div>
  );
};

export default PaymentLayout;
