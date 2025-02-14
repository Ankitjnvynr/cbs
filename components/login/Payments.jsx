import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import PaymentsList from "./parts/PaymentsList";
import { Pagination } from "@mui/material";
import admissionService from "../../services/admission";

export default function Payments() {
    const [rows,setRows]=useState([])
    const [totalpages, setTotalPages] = useState(10);
    const [currentPage,setCurrentPage] = useState(3)

    const handleChange = (event, value) => {
        // getReciptList(value)
        setCurrentPage(value);
      };

    const getReciptList = async ()=>{
        const response = admissionService.getRecords()
    }

    useEffect (()=>{

    },[])


  return (
    <LoginLayout>

      <PaymentsList  />


      <Pagination
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
        className="my-3 t"
        count={totalpages}
        color="primary"
        page={currentPage}
        onChange={handleChange}
      />
    </LoginLayout>
  );
}
