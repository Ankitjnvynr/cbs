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
  useMediaQuery,
  Typography,
} from "@mui/material";
import { FaFilter, FaPlus } from "react-icons/fa";
import ExcelReader from "./parts/ExcelReader";
import { toast } from "react-toastify";

import authService from "../../services/auth";

export default function Students() {
  const [isLoading, setIsLoading] = useState(true);
  const [totalRecords,setTotalRecords]=useState(0)
  const [totalStudents, setTotalStudents] = useState(0);

  const [students, setStudents] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openAddStudentModal, setOpenAddStudentModal] = useState(false);
  const [newStudentData, setNewStudentData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

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

  const isMobile = useMediaQuery("(max-width:600px)");

  const getStudents = async () => {
    setIsLoading(true);
    const response = await studentService.getStudents(filters);
    console.log(response);

    if (response.code === 200) {
      setStudents(response.data);
      setTotalPages(Math.ceil(response.total_students / filters.limit));
      setTotalStudents(response.total_students);
      setTotalRecords(response.total_records)
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

  const handleCreateStudent = async () => {
    setIsLoading(true);
    // checking the email is matching pattern or not
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (
      !newStudentData.name ||
      !newStudentData.email ||
      !newStudentData.phone
    ) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }
    if (!emailPattern.test(newStudentData.email)) {
      toast.error("Invalid Email");
      setIsLoading(false);
      return;
    }
    const response = await authService.register(
      newStudentData.name,
      newStudentData.email,
      newStudentData.email,
      newStudentData.phone
    );
    if (response.code === 200) {
      const res =  authService.notifyStudent(newStudentData.name,newStudentData.email);
      if(res.code == 200){
        toast.success("notified successfully");
      }
      toast.success("Student added successfully");
      setNewStudentData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      setOpenAddStudentModal(false);
      setIsLoading(false);

    } else {
      toast.error(response.error);
      setNewStudentData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
      setOpenAddStudentModal(false);
      
    }
    setIsLoading(false);
  };

  return (
    <LoginLayout>
      {/* Top Buttons Section */}
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="flex gap-2 p-0 justify-end mb-1"
      >
        {/* Add Student Button */}
        <Button
          sx={{ marginLeft: "5px" }}
          variant="contained"
          color="primary"
          onClick={() => setOpenAddStudentModal(true)}
          startIcon={<FaPlus />}
          className="hidden sm:flex"
        >
          {!isMobile && "Add Student"}
        </Button>
        <ExcelReader />

        {/* Filter Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenFilterModal(true)}
          startIcon={<FaFilter />}
          className="hidden sm:flex"
        >
          {!isMobile && "Filters"}
        </Button>
      </div>

      {/* Student List */}
      {isLoading ? <CircularProgress /> : <StudentList rows={students} currentPage = {filters.page} />}

      {/* Pagination */}
      <div style={{display:"flex", justifyContent:"space-between",alignItems:'center'}} className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={filters.page}
          onChange={handlePageChange}
          color="primary"
        />
        <div>showing: { totalRecords}/{ totalStudents}</div>
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
          <TextField
            required
            size="small"
            value={newStudentData.name}
            onChange={(e) => {
              setNewStudentData({ ...newStudentData, name: e.target.value });
            }}
            label="Name"
            fullWidth
            margin="dense"
          />
          <TextField
            required
            size="small"
            label="Email"
            fullWidth
            margin="dense"
            value={newStudentData.email}
            onChange={(e) => {
              setNewStudentData({ ...newStudentData, email: e.target.value });
            }}
          />
          <TextField
            required
            size="small"
            label="Phone"
            fullWidth
            margin="dense"
            value={newStudentData.phone}
            onChange={(e) => {
              setNewStudentData({ ...newStudentData, phone: e.target.value });
            }}
          />
          <Typography variant="caption" color="textSecondary">
            Password will be sent to the student's email.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenAddStudentModal(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button variant="outlined" disabled={isLoading} onClick={handleCreateStudent} color="primary">
            {isLoading?'Please Wait...':'Add Student'}
          </Button>
        </DialogActions>
      </Dialog>

      
    </LoginLayout>
  );
}
