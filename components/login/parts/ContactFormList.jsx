import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MenuItem,
  Badge,
} from "@mui/material";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import contactService from "../../../services/contactServices";

export default function ContactFormList({ rows, currentPage,getContactResponse }) {
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(null);
  const [editData, setEditData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    status: "pending",
    remark: "",
  });

  const handleClickOpenDelete = (id) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setSelectedId(null);
  };

  const handleDelete = async () => {
    if (selectedId) {
      const response = await contactService.deleteRecord(selectedId);
      console.log(response);
      getContactResponse()
    }
    handleCloseDelete();
  };

  const handleClickOpenEdit = (row) => {
    setEditData({
      name: row.name || "",
      email: row.email || "",
      phone: row.phone || "",
      subject: row.subject || "",
      message: row.message || "",
      status: row.status || "pending",
      remark: row.remark || "",
    });
    setSelectedId(row.id);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedId(null);
    setEditData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      status: "pending",
      remark: "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditSave = async () => {
    if (selectedId) {
      const response = await contactService.updateRecord(selectedId, editData);
      console.log(response);
      getContactResponse()
    }
    handleCloseEdit();
  };

  const calledBgColor = '#f0f0f0'; 

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Sr</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Remark</TableCell>
              <TableCell>Time</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow  key={row.id}>
                <TableCell>{currentPage + index }</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>{
                    row.status=='called' ? (<Badge color="success" badgeContent={'Called'} />):(<Badge color="warning" badgeContent={'Pending'} />)
                    }</TableCell>
                <TableCell>{row.remark}</TableCell>
                <TableCell>{row.created_at}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleClickOpenEdit(row)}
                    sx={{ mr: 1 }}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleClickOpenDelete(row.id)}
                  >
                    <FaTrashAlt />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this record? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            name="name"
            value={editData.name}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={editData.email}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Phone"
            name="phone"
            value={editData.phone}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Subject"
            name="subject"
            value={editData.subject}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Message"
            name="message"
            value={editData.message}
            onChange={handleEditChange}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            margin="dense"
            select
            label="Status"
            name="status"
            value={editData.status}
            onChange={handleEditChange}
            fullWidth
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="called">Called</MenuItem>
            
          </TextField>
          <TextField
            margin="dense"
            label="Remark"
            name="remark"
            value={editData.remark}
            onChange={handleEditChange}
            fullWidth
            multiline
            rows={2}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
