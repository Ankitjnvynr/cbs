import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Badge,
  Typography,
  Modal,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { CgMoreAlt } from "react-icons/cg";

export default function MeetingsList({ rows, onUpdateStatus }) {
  const [open, setOpen] = React.useState(false);
  const [selectedMeeting, setSelectedMeeting] = React.useState(null);
  const [newStatus, setNewStatus] = React.useState("");

  const handleOpen = (meeting) => {
    setSelectedMeeting(meeting);
    setNewStatus(meeting.status);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMeeting(null);
  };

  const handleStatusUpdate = () => {
    if (onUpdateStatus && selectedMeeting) {
      onUpdateStatus(selectedMeeting.id, newStatus);
    }

    handleClose();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell align="left">Meeting(Zoom)</TableCell>
              <TableCell>Time</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="body1">
                    {row.studentName} ({row.rollNo})
                  </Typography>
                  <Typography variant="caption">{row.studentEmail}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>id: {row.meetingId}</Typography>
                  <Typography>pswd: {row.meetingPassword}</Typography>
                </TableCell>
                <TableCell align="left">
                  {row.meetingTime.substr(0, 16)}
                </TableCell>
                <TableCell align="center">
                  {row.status === "done" ? (
                    <Badge color="success" badgeContent={row.status} />
                  ) : (
                    row.status === "expired"?
                    <Badge color="error" badgeContent={row.status} />:
                    row.status
                  )}
                </TableCell>
                <TableCell align="left">
                  <CgMoreAlt
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOpen(row)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Status Update Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Update Status
          </Typography>
          <Select
            fullWidth
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <MenuItem value="scheduled">Scheduled</MenuItem>
            <MenuItem value="expired">Expired</MenuItem>
            <MenuItem value="done">Done</MenuItem>
          </Select>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button
              onClick={handleStatusUpdate}
              color="primary"
              variant="contained"
            >
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
