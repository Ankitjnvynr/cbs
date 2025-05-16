import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import AlumniList from "./parts/AlumniList";
import alumniService from "../../services/alumni";
import ExcelReader from "./parts/ExcelReader";
import {
  CircularProgress,
  TextField,
  Grid,
  Button,
  Box,
  Pagination,
  Stack,
} from "@mui/material";
import DownloadFilterData from "./parts/DownloadFilterData";

export default function Alumni() {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 1-based for UI
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedId, setSelectedId] = useState(null);
  const [filters, setFilters] = useState({
    studentName: "",
    fatherName: "",
    email: "",
    mobile: "",
    nationality: "",
    yearOfAdmission: "",
    designation: "",
  });

  const getAlumniResponse = async () => {
    setLoading(true);
    try {
      // Convert from 1-based (UI) to 0-based (API) page numbering
      const response = await alumniService.getRecords(currentPage, itemsPerPage, filters);
      console.log("alumni response ", response);
      if (response.code === 200) {
        setAlumni(response.data);
        setTotalPages(response.pagination.totalPages);
        setTotalRecords(response.pagination.total);
      }
    } catch (error) {
      console.log("Error fetching alumni records:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlumniResponse();
  }, [currentPage, itemsPerPage, filters]); // Reload when page, limit or filters change

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const handleFilterReset = () => {
    setFilters({
      studentName: "",
      fatherName: "",
      email: "",
      mobile: "",
      nationality: "",
      yearOfAdmission: "",
      designation: "",
    });
    
    // Reset to first page
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleUpload = async () => {
    if (selectedId) {
      const response = await alumniService.uploadRecord(selectedId);
      console.log(response);
      getAlumniResponse();
    }
  };

  // Calculate the start index for the current page (for row numbering)
  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <LoginLayout>
      <h5>Alumni List Form</h5>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "15px",
          }}
          className="flex gap-2 p-0 mb-1"
        >
          <ExcelReader />
          <div className="flex justify-end gap-2 p-0 mb-1">
            <DownloadFilterData filters={filters} />
          </div>
        </div>
      </div>
      <Box sx={{ mb: 3 }}>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          alignItems="center"
          justifyContent={"space-between"}
          direction="row"
        >
          <h6>Filters</h6>
          <Button onClick={handleFilterReset}>Reset</Button>
        </Stack>
        <span className="flex"></span>
        <Grid container spacing={0.5}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Student Name"
              name="studentName"
              value={filters.studentName}
              onChange={handleFilterChange}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Father Name"
              name="fatherName"
              value={filters.fatherName}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Email"
              name="email"
              value={filters.email}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Contact"
              name="mobile"
              value={filters.mobile}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Nationality"
              name="nationality"
              value={filters.nationality}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Year Of Admission"
              name="yearOfAdmission"
              value={filters.yearOfAdmission}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Profession"
              name="designation"
              value={filters.designation}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <AlumniList
            getAlumniResponse={getAlumniResponse}
            rows={alumni}
            setSelectedId={setSelectedId}
            startIndex={startIndex}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <div>
              Showing {totalRecords > 0 ? startIndex + 1 : 0} 
              {" - "} 
              {Math.min((currentPage) * itemsPerPage, totalRecords)} of {totalRecords} entries
            </div>
          </Box>
        </>
      )}
    </LoginLayout>
  );
}