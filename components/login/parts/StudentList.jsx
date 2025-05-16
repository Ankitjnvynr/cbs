import * as React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Badge, Button, Menu, MenuItem,
  Typography, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField
} from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";
import conf from "../../../lib/conf";

export default function StudentList({ rows, currentPage }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuRowId, setMenuRowId] = React.useState(null);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setMenuRowId(row.id);
    setSelectedStudent(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuRowId(null);
  };

  const handleEditOpen = () => {
    setEditModalOpen(true);
    handleClose();
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
    setSelectedStudent(null);
  };

  const handleChange = (e) => {
    setSelectedStudent({
      ...selectedStudent,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Updated student data:", selectedStudent);
    handleEditClose();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Sr</TableCell>
              <TableCell align="left">Student</TableCell>
              <TableCell align="left">Roll No</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Course</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">More</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, sr) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {(currentPage - 1) * 10 + sr + 1}
                </TableCell>
                <TableCell align="left" style={{ display: "flex", gap: 10 }}>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                    }}
                    src={
                      row.picture
                        ? conf.apiBaseUri + "/uploads/" + row.picture
                        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                    }
                    alt=""
                  />
                  <span>
                    <Typography>{row.first_name}</Typography>
                    <Typography variant="caption">{row.email}</Typography>
                  </span>
                </TableCell>
                <TableCell align="left">{row.rollno || "N/A"}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.course_name}</TableCell>
                <TableCell align="center">
                  {row.is_verified == 1 ? (
                    <Badge badgeContent="Verified" color="success" />
                  ) : (
                    <Badge color="error" badgeContent="Not_Verified" />
                  )}
                </TableCell>
                <TableCell align="center">
                  <Button onClick={(e) => handleClick(e, row)}>
                    <FiMoreHorizontal />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open && row.id === menuRowId}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleEditOpen}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={handleEditClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Student Details</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
          <TextField
            label="First Name"
            name="first_name"
            value={selectedStudent?.first_name || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Email"
            name="email"
            value={selectedStudent?.email || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Phone"
            name="phone"
            value={selectedStudent?.phone || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Roll No"
            name="rollno"
            value={selectedStudent?.rollno || ""}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Course"
            name="course_name"
            value={selectedStudent?.course_name || ""}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}