import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Pagination } from "@mui/material";
import MeetingsList from "./parts/MeetingsList";
import meetingService from "../../services/meetings";
import { toast } from "react-toastify";

export default function Meetings() {
  const [loading, setLoading] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [filters, setFilters] = useState({ studentName: "", rollNo: "", studentEmail: "", previous: "false" });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMeetings, setTotalMeetings] = useState(0);

  const getMeetings = async (updatedFilters = filters) => {
    setLoading(true);
    const response = await meetingService.getMeeting(updatedFilters);
    console.log(response);
    if (response.success) {
      setMeetings(response.meetings);
      setCurrentPage(response.pagination.current_page);
      setTotalPages(response.pagination.total_pages);
      setTotalMeetings(response.pagination.total_meetings);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMeetings();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    getMeetings(filters);
  };

  const handlePageChange = (event, value) => {
    getMeetings({ ...filters, page: value });
  };

  const onUpdateStatus = async (id, newStatus) => {
    const response = await meetingService.updateMeeting(id, newStatus);
    console.log("response in updating", response);
    if (response.success) {
      getMeetings();
      toast.success(response.message);
    } else {
      toast.error(response.error);
    }
  };

  return (
    <LoginLayout>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", alignItems: "center" }}>
        <TextField
          label="Name"
          variant="outlined"
          name="studentName"
          value={filters.studentName}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Roll No"
          variant="outlined"
          name="rollNo"
          value={filters.rollNo}
          onChange={handleFilterChange}
          size="small"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="studentEmail"
          value={filters.studentEmail}
          onChange={handleFilterChange}
          size="small"
        />
        <FormControl variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select name="previous" value={filters.previous} size="small" onChange={handleFilterChange} label="Status">
            <MenuItem value="false">Upcoming</MenuItem>
            <MenuItem value="true">Previous</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <Typography>
        Meetings ({totalMeetings}) <Button onClick={() => getMeetings()}>Refresh</Button>
      </Typography>
      <MeetingsList loading={loading} onUpdateStatus={onUpdateStatus} rows={meetings} />
      <Pagination
        onChange={handlePageChange}
        page={currentPage}
        style={{ display: "flex", justifyContent: "center" }}
        className="my-3"
        count={totalPages}
        color="primary"
      />
    </LoginLayout>
  );
}
