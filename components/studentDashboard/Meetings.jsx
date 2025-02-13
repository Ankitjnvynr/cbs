import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import axios from "axios";
import conf from "../../lib/conf"

const Meetings = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState({});
  const [openDialog, setOpenDialog] = useState(false);

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleBookSlot = async (time) => {
    const dateKey = selectedDate.format("YYYY-MM-DD");
    
    const eventData = {
      summary: "Student Meeting",
      description: "Meeting scheduled via the booking system",
      start: `${dateKey}T${time}:00`,
      end: `${dateKey}T${parseInt(time) + 1}:00`,
    };

    try {
      const response = await axios.post(`${conf.apiBaseUri}/api/v1/meetings`, { event: eventData });
      console.log(response);

      if (response.data.success) {
        alert(`Meeting booked! Google Meet Link: ${response.data.meetLink}`);
        setBookedSlots((prev) => ({ ...prev, [dateKey]: [...(prev[dateKey] || []), time] }));
      } else {
        alert("Error booking meeting");
      }
    } catch (error) {
      console.error("Error creating Google Calendar event:", error);
    }

    setOpenDialog(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" alignItems="center" p={3}>
        <Typography variant="h6" gutterBottom>
          Schedule a Meeting
        </Typography>
        <DateCalendar value={selectedDate} onChange={handleDateChange} />
        <Typography variant="h6" mt={2}>Available Time Slots</Typography>
        <Box display="flex" gap={2} flexWrap="wrap" mt={1}>
          {timeSlots.map((time) => {
            const dateKey = selectedDate.format("YYYY-MM-DD");
            const isBooked = bookedSlots[dateKey]?.includes(time);
            return (
              <Button
                key={time}
                variant="contained"
                color={isBooked ? "error" : "primary"}
                disabled={isBooked}
                onClick={() => {
                  setSelectedTime(time);
                  setOpenDialog(true);
                }}
              >
                {time}
              </Button>
            );
          })}
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Booking</DialogTitle>
        <DialogContent>
          <Typography>
            Do you want to book the slot {selectedTime} on {selectedDate.format("MMMM D, YYYY")}? 
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => handleBookSlot(selectedTime)} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>     
    </LocalizationProvider>
  );
};

export default Meetings;
