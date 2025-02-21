import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import StudentList from "./parts/StudentList";
import studentService from "../../services/students";
import {
  CircularProgress,
  TextField,
  Button,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";

export default function Students() {
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    rollNo: "",
    phone: "",
    class: "",
    status: "",
    page: 1, // Current page number
    limit: 10, // Students per page
  });

  const getStudents = async () => {
    setIsLoading(true);
    const response = await studentService.getStudents(filters);
    console.log(response);

    if (response.code === 200) {
      setStudents(response.data); // Set the fetched students
  
      // Calculate total pages based on total students
      const totalPages = Math.ceil(response.total_students / filters.limit);
  
      setTotalPages(totalPages); // Set the total pages
  }
  

    setIsLoading(false);
  };

  useEffect(() => {
    getStudents();
  }, [filters]); // Fetch data when filters or page change

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      page: 1, // Reset to first page when changing filters
    });
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      email: "",
      rollNo: "",
      phone: "",
      class: "",
      status: "",
      page: 1,
      limit: 10,
    });
  };

  const handlePageChange = (event, value) => {
    setFilters({
      ...filters,
      page: value, // Change page number
    });
  };

  return (
    <LoginLayout>
      {/* Filters Section */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" }}>
        <TextField
          label="Name"
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Email"
          name="email"
          value={filters.email}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Roll No"
          name="rollNo"
          value={filters.rollNo}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Phone"
          name="phone"
          value={filters.phone}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Class"
          name="class"
          value={filters.class}
          onChange={handleFilterChange}
          size="small"
        />

        <Select name="status" size="small" value={filters.status} onChange={handleFilterChange} displayEmpty>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="1">Verified</MenuItem>
          <MenuItem value="0">Not Verified</MenuItem>
        </Select>


      </div>

      {/* Student List */}
      {isLoading ? <CircularProgress /> : <StudentList rows={students} />}

      {/* Pagination */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination count={totalPages} page={filters.page} onChange={handlePageChange} color="primary" />
      </div>
    </LoginLayout>
  );
}
