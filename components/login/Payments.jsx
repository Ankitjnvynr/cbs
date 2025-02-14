import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import PaymentsList from "./parts/PaymentsList";
import {
  CircularProgress,
  Pagination,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import admissionService from "../../services/admission";
import { toast } from "react-toastify";
import EditModal from "./parts/EditModal";

export default function Payments() {
  const [rows, setRows] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);

  const [updatingData, setUpdatingData] = useState({});

  const [filters, setFilters] = useState({
    page: 1,
    name: "",
    rollNo: "",
    status: "",
    email: "",
    phone: "",
  });

  const getReciptList = async (updatedFilters) => {
    setLoading(true);
    try {
      const response = await admissionService.getRecords(updatedFilters);
      if (response.code === 200) {
        setRows(response.data.data);
        setTotalRecords(response.data.totalRecords);
        setTotalPages(Math.ceil(response.data.totalRecords / 10)); // Assuming 10 per page
      }
    } catch (error) {
      toast.error("Failed to fetch records");
    }
    setLoading(false);
  };

  useEffect(() => {
    getReciptList(filters);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, page: 1 }));
  };

  const handlePageChange = (event, value) => {
    setFilters((prev) => ({ ...prev, page: value }));
  };

  // update modal js start
  const [open, setOpen] = React.useState(false);
  const handleOpen = (data) => {
    setOpen(true);
    setUpdatingData(data);
    console.log(data)
  };

  const handleClose = () => setOpen(false);

  const handleUpdate = async (data) => {
    const response = await admissionService.updateRecord(data.id,data)
    console.log(response)
    if(response.code == 200){
      getReciptList(filters)
      setOpen(false)
      toast.success(response.message)
    }else{
      toast.error(response.message)
    }
  };

  // update modal js end

  return (
    <LoginLayout>
      <h6>Payments [{totalRecords}]</h6>
      <EditModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        updatingData={updatingData}
        setUpdatingData={setUpdatingData}
        handleUpdate={handleUpdate}
      />

      {/* Filters Section */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <TextField
          label="Name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          size="small"
          variant="outlined"
        />
        <TextField
          label="Roll No"
          name="rollNo"
          value={filters.rollNo}
          onChange={handleFilterChange}
          size="small"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          value={filters.email}
          onChange={handleFilterChange}
          size="small"
          variant="outlined"
        />
        <TextField
          label="Phone"
          name="phone"
          value={filters.phone}
          onChange={handleFilterChange}
          size="small"
          variant="outlined"
        />
        <TextField
          label="Status"
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          size="small"
          variant="outlined"
          select
          style={{minWidth:150}}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={() => getReciptList(filters)}
        >
          Apply Filters
        </Button>
      </div>

      {/* Loading and Payments List */}
      {loading ? (
        <CircularProgress size="30px" />
      ) : (
        <PaymentsList handleOpen={handleOpen} rows={rows} />
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
          count={totalPages}
          color="primary"
          page={filters.page}
          onChange={handlePageChange}
        />
      )}
    </LoginLayout>
  );
}
