import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import PaymentsList from "./parts/PaymentsList";
import { CircularProgress, Pagination } from "@mui/material";
import admissionService from "../../services/admission";
import { toast } from "react-toastify";

export default function Payments() {
  const [rows, setRows] = useState([]);
  const [totalpages, setTotalPages] = useState(10);
  const [loading, setLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState();

  const [filters, setFilters] = useState({
    page: 1,
  });

  const getReciptList = async (filters) => {
    setLoading(true);
    const response = await admissionService.getRecords(filters);
    if (response.code === 200) {
      console.log(response);
      setRows(response.data.data);
      setTotalRecords(response.data.totalRecords);
    }
    setLoading(false);
  };

  useEffect(() => {
    getReciptList();
  }, []);

  const handleChange = (event, value) => {
    setFilters({ ...filters, page: value });
    getReciptList(filters);
  };

  return (
    <LoginLayout>
      <h6>Payments[{totalRecords}]</h6>

      {loading ? (
        <CircularProgress size="30px" />
      ) : (
        <PaymentsList rows={rows} />
      )}

      <Pagination
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
        className="my-3 t"
        count={totalpages}
        color="primary"
        page={filters.page}
        onChange={handleChange}
      />
    </LoginLayout>
  );
}
