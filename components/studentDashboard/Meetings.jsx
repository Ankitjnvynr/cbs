import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import conf from "../../lib/conf";
import meetingService from "../../services/meetings";
import MeetingList from "./MeetingList";
import { Input } from "postcss";
import { toast } from "react-toastify";

const Meetings = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookedSlots, setBookedSlots] = useState({
    "2025-02-17": ["10:00 AM", "12:00 PM"],
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [user, setUser] = useState({ name: "Guest" });
  const [rollNo, setRollNo] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [MeetingScheduled, setMeetingScheduled] = useState(false);

  const getMeetings = async (email) => {
    const response = await meetingService.getMeeting({
      studentEmail: email,
    });
    console.log("response form api", response);
    if (response.success) {
      setRows(response.meetings);
      setLoading(false);
    }
  };

  function convert24to12(time24) {
    const [hours, minutes] = time24.split(":"); // Destructure hours and minutes
    let hoursInt = parseInt(hours);

    const ampm = hoursInt < 12 || hoursInt === 24 ? "AM" : "PM";
    hoursInt = hoursInt % 12 || 12; // Handle midnight and noon
    return `${hoursInt}:${minutes} ${ampm}`;
  }

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    console.log(userData);
    setUser(userData);
    if (userData) {
      getMeetings(userData.email);
    }
    console.log(user);
  }, []);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleDateChange = async (date) => {
    const today = dayjs();
    if (date.isBefore(today, "day")) {
      return; // Prevent selecting past dates
    }
    setSelectedDate(date);
    setSelectedTime(null);
    console.log("selected date", date.format("YYYY-MM-DD"));
    const day = date.format("YYYY-MM-DD");
    const response = await meetingService.getMeeting({ sloats: day });
    console.log("response form the sloats", response);
    if (response.success) {
      const timeSlots12Hour = response.meetings.map((meeting) => {
        const time24 = meeting.meetingTime.split(" ")[1]; // Extract 24-hour time
        return convert24to12(time24); // Convert to 12-hour format
      });

      console.log("all slots", timeSlots12Hour);
      setBookedSlots({ [day]: timeSlots12Hour });
    }
    console.log(bookedSlots);
  };

  const handleBookSlot = async (time) => {
    setLoading(true);
    const dateKey = selectedDate.format("YYYY-MM-DD");
    const formattedTime = dayjs(
      `${dateKey} ${time}`,
      "YYYY-MM-DD hh:mm A"
    ).format("YYYY-MM-DD HH:mm:ss");

    const response = await meetingService.createMeeting(
      user.name,
      user.email,
      rollNo,
      formattedTime,
      30
    );
    console.log(response);
    if (response.success) {
      toast.success("Slot Booked Successfuly");
      getMeetings(user.email);
      setLoading(false);
      const day = selectedDate.format("YYYY-MM-DD");
      const response = await meetingService.getMeeting({ sloats: day });
      console.log("response form the sloats", response);
      if (response.success) {
        const timeSlots12Hour = response.meetings.map((meeting) => {
          const time24 = meeting.meetingTime.split(" ")[1]; // Extract 24-hour time
          return convert24to12(time24); // Convert to 12-hour format
        });

        console.log("all slots", timeSlots12Hour);
        setBookedSlots({ [day]: timeSlots12Hour });
      }
      console.log(bookedSlots);
    }

    setOpenDialog(false);
    setLoading(false);
  };

  const isTimeSlotAvailable = (time) => {
    const now = dayjs();
    const selectedDateTime = dayjs(
      `${selectedDate.format("YYYY-MM-DD")} ${time}`,
      "YYYY-MM-DD hh:mm A"
    );
    const tomarrow = now.add(1,'day')
    console.log("now",now)
    return selectedDateTime.isAfter(tomarrow);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Typography variant="h6" gutterBottom>
        My Meetings
      </Typography>
      <MeetingList loading={loading} rows={rows} />
      <Typography variant="h6" gutterBottom>
        Schedule New Meeting
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        p={3}
      >
        <DateCalendar
          value={selectedDate}
          onChange={handleDateChange}
          minDate={dayjs()} // Disable past dates in calendar
        />
        <div>
          <Typography variant="h6" mt={2}>
            Available Time Slots
          </Typography>
          <Box
            display="flex"
            gap={2}
            alignItems="center"
            flexWrap="wrap"
            mt={1}
          >
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
                  onClick={async () => {
                    if (isAvailable) {
                      const response = await meetingService.getMeeting({
                        studentEmail: user.email,
                      });

                      console.log(response);

                      // Check if any meeting has status "scheduled"
                      const isMeetingScheduled =
                        response.success &&
                        response.meetings.some(
                          (meeting) => meeting.status === "scheduled"
                        );

                      if (isMeetingScheduled) {
                        setMeetingScheduled(true);
                      } else {
                        setMeetingScheduled(false);
                      }

                      // Only open dialog if no meeting is scheduled
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
        {MeetingScheduled ? (
          <div>
            <DialogTitle> Message</DialogTitle>
            <Typography padding={3}>
               You have a scheduled meeting. Please check your calendar.
              <Typography>
              and if not contact to admin
              </Typography>
              </Typography>
            <DialogActions>
              <Button variant="outlined" onClick={() => setOpenDialog(false)}>Ok</Button>
            
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogTitle>Confirm Booking</DialogTitle>
            <DialogContent>
              <Typography>
                Do you want to book the slot {selectedTime} on{" "}
                {selectedDate.format("MMMM D, YYYY")}?
              </Typography>
              <input
                type="text"
                placeholder="Enter Roll  Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
              <Button
                onClick={() => handleBookSlot(selectedTime)}
                color="primary"
                variant="contained"
                disabled={!rollNo > 0 || loading}
              >
                {loading ? "please Wait..." : "Confirm"}
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </LocalizationProvider>
  );
};

export default Meetings;
