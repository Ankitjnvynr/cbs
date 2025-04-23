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

export default function Alumni() {
  const [alumni, setAlumni] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
        studentName: "",
        fatherName: "",
        email: "",
        mobile: "",
        nationality: "",
        yearOfAdmission: "",
        page: currentPage,
    });

  const getAlumniResponse = async () => {
    setLoading(true);
    const response = await alumniService.getRecords();
    console.log("alumni response ", response);
    if (response.code === 200) {
      setAlumni(response.data);
      // setCurrentPage(response.pagination.current_page);
      // setTotalPages(response.pagination.total_pages);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAlumniResponse();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterReset = () => {
    setFilters({
      studentName: "",
      fatherName: "",
      email: "",
      mobile: "",
      nationality: "",
      yearOfAdmission: "",
      page: 1,
    });
    getAlumniResponse();
  };

  const handlePageChange = (event, value) => {
    setFilters((prev) => ({
      ...prev,
      page: value,
    }));
  };

  return (
    <LoginLayout>

  <h5>Alumni List Form</h5>

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15px" }}
      className="flex gap-2 p-0 mb-1" >
    <ExcelReader />
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
            >
              {/* <MenuItem selected value="">
                All
              </MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="called">Called</MenuItem> */}
            </TextField>
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

        </Grid>
      </Box>

    {loading ? (
            <CircularProgress />
          ) : (
            <>
    <AlumniList 
      getAlumniResponse={getAlumniResponse}
      rows = {alumni}
      currentPage={(currentPage - 1) * 10}
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
                </>
          )}
    </LoginLayout>
  );
}
