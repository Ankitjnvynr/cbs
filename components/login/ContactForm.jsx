import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import ContactFormList from "./parts/ContactFormList";
import contactService from "../../services/contactServices";
import {
  CircularProgress,
  TextField,
  MenuItem,
  Grid,
  Button,
  Box,
  Pagination,
} from "@mui/material";

export default function ContactForm() {
  const [contactResponse, setContactResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    status: "",
    remark: "",
    page: 1,
  });

  const getContactResponse = async () => {
    setLoading(true);
    const response = await contactService.getRecords(filters);
    if (response.code === 200) {
      setContactResponse(response.data);
      setCurrentPage(response.pagination.current_page);
      setTotalPages(response.pagination.total_pages);
    }
    setLoading(false);
  };

  useEffect(() => {
    getContactResponse();
  }, [filters.page]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilterApply = () => {
    setFilters((prev) => ({ ...prev, page: 1 }));
    getContactResponse();
  };

  const handleFilterReset = () => {
    setFilters({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      status: "",
      remark: "",
      page: 1,
    });
    getContactResponse();
  };

  const handlePageChange = (event, value) => {
    setFilters((prev) => ({
      ...prev,
      page: value,
    }));
  };

  return (
    <LoginLayout>
      <Box sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Name"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Email"
              name="email"
              value={filters.email}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Phone"
              name="phone"
              value={filters.phone}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Subject"
              name="subject"
              value={filters.subject}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Message"
              name="message"
              value={filters.message}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Remark"
              name="remark"
              value={filters.remark}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              select
              fullWidth
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="called">Called</MenuItem>
              <MenuItem value="resolved">Resolved</MenuItem>
              <MenuItem value="closed">Closed</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={3} display="flex" alignItems="center">
            <Button
              variant="contained"
              onClick={handleFilterApply}
              sx={{ mr: 1 }}
            >
              Apply
            </Button>
            <Button variant="outlined" onClick={handleFilterReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>

      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <ContactFormList
            getContactResponse={getContactResponse}
            rows={contactResponse}
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
