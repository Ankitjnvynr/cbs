import React, { useEffect, useState } from "react";
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
import conf from "../../lib/conf";
import meetingService from "../../services/meetings";
import MeetingList from "./MeetingList";

const Meetings = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [user,setUser]=useState({name:'Guest'})
  const [rollNo,setRollNo]= useState(0)
  const [rows,setRows]=useState([])

  const getMeetings = async (email)=>{
    const response = await meetingService.getMeeting({
      email:email
    })
    console.log('response form api',response)
    if(response.success){
      setRows(response.meetings)
    }
  }

  useEffect(()=>{
    const userData = JSON.parse(sessionStorage.getItem('user'))
    console.log(userData)
    setUser(userData)
    if(userData){
      getMeetings(userData.email)
    }
    console.log(user)
  },[])

  const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  const handleDateChange = (date) => {
    const today = dayjs();
    if (date.isBefore(today, 'day')) {
        return; // Prevent selecting past dates
    }
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleBookSlot = async (time) => {
    const dateKey = selectedDate.format("YYYY-MM-DD");
    const formattedTime = dayjs(`${dateKey} ${time}`, "YYYY-MM-DD hh:mm A").format("YYYY-MM-DD HH:mm:ss");

    const eventData = {
      topic: "My Zoom Meeting",
      start_time: formattedTime,
      duration: 30,
    };

    try {
      const response = await fetch(`${conf.apiBaseUri}/api/v1/meeting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        alert(`Meeting booked! Zoom Link: ${result.meetLink}`);
        setBookedSlots((prev) => ({ ...prev, [dateKey]: [...(prev[dateKey] || []), time] }));
      } else {
        alert("Meeting booking failed."); // More specific message
      }
    } catch (error) {
      console.error("Error creating Zoom meeting:", error);
      alert("An error occurred. Please try again later."); // User-friendly error message
    }

    setOpenDialog(false);
  };

  const isTimeSlotAvailable = (time) => {
    const now = dayjs();
    const selectedDateTime = dayjs(`${selectedDate.format("YYYY-MM-DD")} ${time}`, "YYYY-MM-DD hh:mm A");
    return selectedDateTime.isAfter(now);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant="h6" gutterBottom>
          My Meetings
        </Typography>
        <MeetingList rows={rows}/>
        <Typography variant="h6" gutterBottom>
          Schedule New Meeting
        </Typography>
      <Box display="flex" flexDirection="row" flexWrap='wrap' alignItems="center" p={3}>
        <DateCalendar 
          value={selectedDate} 
          onChange={handleDateChange} 
          minDate={dayjs()} // Disable past dates in calendar
        />
        <div>
        <Typography variant="h6" mt={2}>Available Time Slots</Typography>
        <Box display="flex" gap={2} alignItems='center' flexWrap="wrap" mt={1}>
          {timeSlots.map((time) => {
            const dateKey = selectedDate.format("YYYY-MM-DD");
            const isBooked = bookedSlots[dateKey]?.includes(time);
            const isAvailable = isTimeSlotAvailable(time); // Check if time slot is in the future

            return (
              <Button
                key={time}
                variant="contained"
                color={isBooked ? "error" : "primary"}
                disabled={isBooked || !isAvailable} // Disable if booked or in the past
                onClick={() => {
                  if (isAvailable) { // Only open dialog if time is available
                    setSelectedTime(time);
                    setOpenDialog(true);
                  }
                }}
              >
                {time}
              </Button>
            );
          })}
        </Box>
        </div>
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