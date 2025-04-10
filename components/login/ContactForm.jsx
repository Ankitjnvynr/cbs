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
  Stack,
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
    page: currentPage,
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
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    })
    
  );
  setCurrentPage(1)
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
      <h5>Contact form & Enquiry form data</h5>
      
      <Box sx={{ mb: 3 }}>
        <Stack  spacing={{ xs: 1, sm: 2 }}
        alignItems="center"
        justifyContent={'space-between'}
  direction="row">
  <h6>Filters</h6>
  <Button onClick={handleFilterReset} >Reset</Button>
        </Stack>
        <span className="flex">
    

        </span>
        <Grid container spacing={0.5}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Name"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              size="small"
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
              label="Phone"
              name="phone"
              value={filters.phone}
              onChange={handleFilterChange}
              fullWidth
            />
          </Grid>
        
          
          <Grid item xs={12} sm={3}>
            <TextField
              size="small"
              label="Status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              select
              fullWidth
              
            >
              <MenuItem selected value="">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="called">Called</MenuItem>
              
            </TextField>
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
