import * as React from 'react';
import studentService from '../../../services/students'
import {toast} from 'react-toastify'
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Badge, Button, Menu, MenuItem,
  Typography, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField
} from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";
import conf from "../../../lib/conf";

export default function StudentList({ rows, currentPage,getStudents }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuRowId, setMenuRowId] = React.useState(null);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = React.useState(false);
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

  const handleSave = async () => {
    // Handle save logic here
    const result = await studentService.updateStudent(selectedStudent.id,selectedStudent)
    console.log("Updated student data:", result);
    if (result.code==200){
      getStudents()
      toast.success(result.message)
    }
    handleEditClose();
  };

  const handleDelete = () => {
    // onDelete(selectedStudent);
    setDeleteConfirmOpen(false);
    handleClose();
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
                    {/* <MenuItem onClick={handleDelete}>Delete</MenuItem> */}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onClose={handleEditClose} fullScreen>
        <DialogTitle>Edit Student Details</DialogTitle>
        <DialogContent sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mt: 1 }}>
          <TextField label="First Name" name="first_name" value={selectedStudent?.first_name || ""} onChange={handleChange} fullWidth />
          <TextField label="Last Name" name="last_name" value={selectedStudent?.last_name || ""} onChange={handleChange} fullWidth />
          <TextField label="Email" name="email" value={selectedStudent?.email || ""} onChange={handleChange} fullWidth />
          <TextField label="Phone" name="phone" value={selectedStudent?.phone || ""} onChange={handleChange} fullWidth />
          <TextField label="Roll No" name="rollno" value={selectedStudent?.rollno || ""} onChange={handleChange} fullWidth />
          <TextField label="Course" name="course_name" value={selectedStudent?.course_name || ""} onChange={handleChange} fullWidth />
          <TextField label="Father's Name" name="father_name" value={selectedStudent?.father_name || ""} onChange={handleChange} fullWidth />
          <TextField label="Mother's Name" name="mother_name" value={selectedStudent?.mother_name || ""} onChange={handleChange} fullWidth />
          <TextField label="Date of Birth" name="dob" value={selectedStudent?.dob || ""} onChange={handleChange} fullWidth />
          <TextField label="Country" name="country" value={selectedStudent?.country || ""} onChange={handleChange} fullWidth />
          <TextField label="State" name="state" value={selectedStudent?.state || ""} onChange={handleChange} fullWidth />
          <TextField label="District" name="district" value={selectedStudent?.district || ""} onChange={handleChange} fullWidth />
          <TextField label="Address" name="address" value={selectedStudent?.address || ""} onChange={handleChange} fullWidth />
          <TextField label="Profile Picture URL" name="picture" value={selectedStudent?.picture || ""} onChange={handleChange} fullWidth />
          <TextField label="Verified Status" name="is_verified" value={selectedStudent?.is_verified || ""} onChange={handleChange} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>



      <Dialog open={deleteConfirmOpen} onClose={() => setDeleteConfirmOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this student?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmOpen(false)}>Cancel</Button>
          <Button onClick={handleDelete} variant="contained" color="error">Delete</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}