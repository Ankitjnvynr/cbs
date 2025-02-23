"use client"; // Required for Next.js App Router

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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { FaFilter, FaPlus } from "react-icons/fa";
import ExcelReader from "./parts/ExcelReader";

export default function Students() {
  const [isLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openAddStudentModal, setOpenAddStudentModal] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    rollNo: "",
    phone: "",
    class: "",
    status: "",
    page: 1,
    limit: 10,
  });

  const getStudents = async () => {
    setIsLoading(true);
    const response = await studentService.getStudents(filters);

    if (response.code === 200) {
      setStudents(response.data);
      setTotalPages(Math.ceil(response.total_students / filters.limit));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getStudents();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      page: 1,
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
      page: value,
    });
  };

  return (
    <LoginLayout>
      {/* Top Buttons Section */}
      <div className="flex gap-2 p-0 justify-end mb-1">
        {/* Filter Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenFilterModal(true)}
          startIcon={<FaFilter />}
          className="hidden sm:flex"
        >
          Filters
        </Button>
       
        

        {/* Add Student Button */}
        <Button
        sx={{marginLeft: '5px'}}
          variant="contained"
          color="primary"
          onClick={() => setOpenAddStudentModal(true)}
          startIcon={<FaPlus />}
          className="hidden sm:flex"
        >
          Add Student
        </Button>
        
      </div>

      {/* Student List */}
      {isLoading ? <CircularProgress /> : <StudentList rows={students} />}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={filters.page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>

      {/* Filter Modal */}
      <Dialog open={openFilterModal} onClose={() => setOpenFilterModal(false)}>
        <DialogTitle>Filter Students</DialogTitle>
        <DialogContent>
          <div className="flex flex-col gap-3">
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

            <Select
              name="status"
              size="small"
              value={filters.status}
              onChange={handleFilterChange}
              displayEmpty
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1">Verified</MenuItem>
              <MenuItem value="0">Not Verified</MenuItem>
            </Select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleResetFilters} color="secondary">
            Reset
          </Button>
          <Button onClick={() => setOpenFilterModal(false)} color="primary">
            Apply
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Student Modal (Placeholder for Future Implementation) */}
      <Dialog
        open={openAddStudentModal}
        onClose={() => setOpenAddStudentModal(false)}
      >
        <DialogTitle>Add Student</DialogTitle>
        <DialogContent>
          {/* Add Student Form Fields */}
          <TextField size="small" label="Name" fullWidth margin="dense" />
          <TextField size="small" label="Email" fullWidth margin="dense" />
          <TextField size="small" label="Roll No" fullWidth margin="dense" />
          <TextField size="small" label="Phone" fullWidth margin="dense" />
          <TextField size="small" label="Class" fullWidth margin="dense" />
          <Select size="small" fullWidth margin="normal" displayEmpty>
            <MenuItem selected value="">Select Status</MenuItem>
            <MenuItem value="1">Verified</MenuItem>
            <MenuItem value="0">Not Verified</MenuItem>
          </Select>
         
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddStudentModal(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button color="primary">Add Student</Button>

         
        </DialogActions>
      </Dialog>
    </LoginLayout>
  );
}
