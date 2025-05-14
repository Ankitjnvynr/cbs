import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import alumniService from '../../../services/alumni';

export default function AlumniList({ rows, getAlumniResponse, setSelectedId, startIndex }) {
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const [editData, setEditData] = React.useState({
    studentName: "",
    fatherName: "",
    email: "",
    mobile: "",
    nationality: "",
    yearOfAdmission: "",
    designation: "",
    // Additional fields initialized
  });

  const handleClickOpenDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setDeleteId(null);
  };

  // const handleDelete = async () => {
  //   if (deleteId) {
  //     try {
  //       const response = await alumniService.deleteRecord(deleteId);
  //       console.log(response);
  //       getAlumniResponse();
  //     } catch (error) {
  //       console.error("Failed to delete record:", error);
  //     }
  //   }
  //   handleCloseDelete();
  // };

  const handleDelete = async () => {
    if (deleteId) {
      try {
        const response = await alumniService.deleteRecord(deleteId);
        console.log(response);
        getAlumniResponse();
      } catch (error) {
        console.error("error in deleting record:", error);
      }
    }
    handleCloseEdit();
  }

  const handleClickOpenEdit = (row) => {
    setEditData({
      studentName: row.studentName || "",
      fatherName: row.fatherName || "",
      email: row.email || "",
      mobile: row.mobile || "",
      nationality: row.nationality || "",
      yearOfAdmission: row.yearOfAdmission || "",
      internshipDescription: row.internshipDescription || "",
      internshipYear: row.internshipYear || "",
      internshipCertificate: row.internshipCertificate || "",
      educationDetails: row.educationDetails || "",
      university: row.university || "",
      percentage: row.percentage || "",
      examGiven: row.examGiven || "",
      yearOfExamGiven: row.yearOfExamGiven || "",
      examPercentage: row.examPercentage || "",
      scoreCard: row.scoreCard || "",
      gotJob: row.gotJob || "",
      OrganisationName: row.OrganisationName || "",
      Address: row.Address || "",
      yearOfJoining: row.yearOfJoining || "",
      designation: row.designation || "",
      idcard: row.idcard || "",
      offerLetter: row.offerLetter || "",
      jobInAnotherCountry: row.jobInAnotherCountry || "",
      countryName: row.countryName || "",
      visaType: row.visaType || "",
      workPermit: row.workPermit || "",
      achievement: row.achievement || "",
      award: row.award || "",
      research: row.research || "",
      publishedPaper: row.publishedPaper || "",
      created_at: row.created_at || "",
      updated_at: row.updated_at || "",
    });
    setSelectedId(row.id);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedId(null);
    setEditData({
      studentName: "",
      fatherName: "",
      email: "",
      mobile: "",
      nationality: "",
      yearOfAdmission: "",
      designation: "",
      // Reset all additional fields
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
    try {
      const response = await alumniService.updateRecord(deleteId, editData);
      console.log("response is ", response);
      getAlumniResponse();
    } catch (error) {
      console.error("Failed to update record:", error);
    }
    handleCloseEdit();
  };

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Father Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Year Of Admission</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Profession</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>{row.studentName}</TableCell>
              <TableCell>{row.fatherName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.nationality}</TableCell>
              <TableCell>{row.yearOfAdmission}</TableCell>
              <TableCell>{row.created_at}</TableCell>
              <TableCell>{row.designation}</TableCell>
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
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={9} align="center">No data found</TableCell>
          </TableRow>
        )}
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
          label="Student Name"
          name="studentName"
          value={editData.studentName}
          onChange={handleEditChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Father Name"
          name="fatherName"
          value={editData.fatherName}
          onChange={handleEditChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Nationality"
          name="nationality"
          value={editData.nationality}
          onChange={handleEditChange}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          margin="dense"
          label="Contact"
          name="mobile"
          value={editData.mobile}
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
          label="Year Of Admission"
          name="yearOfAdmission"
          value={editData.yearOfAdmission}
          onChange={handleEditChange}
          fullWidth
        />
        
        {/* Additional fields can be collapsed or shown based on a "Show More" button */}
        <Box sx={{ mt: 2, mb: 2 }}>
          <Button 
            onClick={() => document.getElementById('additionalFields').style.display = 
              document.getElementById('additionalFields').style.display === 'none' ? 'block' : 'none'
            }
            variant="outlined"
            fullWidth
          >
            Show/Hide Additional Fields
          </Button>
        </Box>
        
        <Box id="additionalFields" sx={{ display: 'none' }}>
          {/* Internship Information */}
          <TextField
            margin="dense"
            label="Internship Description"
            name="internshipDescription"
            value={editData.internshipDescription}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Internship Year"
            name="internshipYear"
            value={editData.internshipYear}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Internship Certificate"
            name="internshipCertificate"
            value={editData.internshipCertificate}
            onChange={handleEditChange}
            fullWidth
          />
          
          {/* Education Information */}
          <TextField
            margin="dense"
            label="Education Details"
            name="educationDetails"
            value={editData.educationDetails}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="University"
            name="university"
            value={editData.university}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Percentage"
            name="percentage"
            value={editData.percentage}
            onChange={handleEditChange}
            fullWidth
          />
          
          {/* Exam Information */}
          <TextField
            margin="dense"
            label="Exam Given"
            name="examGiven"
            value={editData.examGiven}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Year Of Exam Given"
            name="yearOfExamGiven"
            value={editData.yearOfExamGiven}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Exam Percentage"
            name="examPercentage"
            value={editData.examPercentage}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Score Card"
            name="scoreCard"
            value={editData.scoreCard}
            onChange={handleEditChange}
            fullWidth
          />
          
          {/* Employment Information */}
          <TextField
            margin="dense"
            label="Got Job"
            name="gotJob"
            value={editData.gotJob}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Organisation Name"
            name="OrganisationName"
            value={editData.OrganisationName}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Address"
            name="Address"
            value={editData.Address}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Year Of Joining"
            name="yearOfJoining"
            value={editData.yearOfJoining}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Designation"
            name="designation"
            value={editData.designation}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Idcard"
            name="idcard"
            value={editData.idcard}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="OfferLetter"
            name="offerLetter"
            value={editData.offerLetter}
            onChange={handleEditChange}
            fullWidth
          />
          
          {/* International Employment */}
          <TextField
            margin="dense"
            label="Job In Another Country"
            name="jobInAnotherCountry"
            value={editData.jobInAnotherCountry}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Country Name"
            name="countryName"
            value={editData.countryName}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Visa Type"
            name="visaType"
            value={editData.visaType}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Work Permit"
            name="workPermit"
            value={editData.workPermit}
            onChange={handleEditChange}
            fullWidth
          />
          
          {/* Achievements */}
          <TextField
            margin="dense"
            label="Achievement"
            name="achievement"
            value={editData.achievement}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Award"
            name="award"
            value={editData.award}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Research"
            name="research"
            value={editData.research}
            onChange={handleEditChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Published Paper"
            name="publishedPaper"
            value={editData.publishedPaper}
            onChange={handleEditChange}
            fullWidth
          />
          
          {/* System Fields */}
          <TextField
            margin="dense"
            label="Created_at"
            name="created_at"
            value={editData.created_at}
            onChange={handleEditChange}
            fullWidth
            disabled
          />
          <TextField
            margin="dense"
            label="Updated_at"
            name="updated_at"
            value={editData.updated_at}
            onChange={handleEditChange}
            fullWidth
            disabled
          />
        </Box>
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