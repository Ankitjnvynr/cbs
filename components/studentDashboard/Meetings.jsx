import React, { useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

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

  const handleBookSlot = (time) => {
    const dateKey = selectedDate.format("YYYY-MM-DD");
    setBookedSlots((prev) => ({ ...prev, [dateKey]: [...(prev[dateKey] || []), time] }));
    setOpenDialog(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box display="flex" flexDirection="column" alignItems="center" p={3}>
        <Typography variant="h4" gutterBottom>
          Schedule a Meeting
        </Typography>
        <DateCalendar value={selectedDate} onChange={handleDateChange} />
        <Typography variant="h6" mt={2}>
          Available Time Slots
        </Typography>
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
