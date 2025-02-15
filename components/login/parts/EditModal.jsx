import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: '90vw', sm: 600 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: 'auto',
  maxHeight: '90vh'
};

export default function EditModal({ open, handleClose, updatingData, setUpdatingData,handleUpdate }) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to API
    handleUpdate(updatingData)
    
  };

  const handleChange = (event) => {
      setUpdatingData({ ...updatingData, [event.target.name]: event.target.value });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Edit Payment Details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "grid", gap: 2, mt: 2, gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)' }}>

            <TextField label="Name" fullWidth name="candidateName" value={updatingData?.candidateName || ""} onChange={handleChange} />
            <TextField label="Father Name" fullWidth name="fatherName" value={updatingData?.fatherName || ""} onChange={handleChange} />
            <TextField label="Roll No" fullWidth name="rollNo" value={updatingData?.rollNo || ""} onChange={handleChange} />
            <TextField label="Email" fullWidth name="email" value={updatingData?.email || ""} onChange={handleChange} />
            <TextField label="Mobile No" fullWidth name="mobile" value={updatingData?.mobile || ""} onChange={handleChange} />
            <TextField label="WhatsApp No" fullWidth name="whatsapp" value={updatingData?.whatsapp || ""} onChange={handleChange} />
            <TextField label="Total Fees" fullWidth name="totalFees" value={updatingData?.totalFees || ""} onChange={handleChange} />
            <TextField label="Fees Paid Till Date" fullWidth name="feesPaidTillDate" value={updatingData?.feesPaidTillDate || ""} onChange={handleChange} />
            <TextField label="Branch" fullWidth name="branch" value={updatingData?.branch || ""} onChange={handleChange} />
            <TextField label="Year" fullWidth name="year" value={updatingData?.year || ""} onChange={handleChange} />

            <TextField select label="Payment Status" fullWidth name="status" value={updatingData?.status || "pending"} onChange={handleChange} sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }}>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </TextField>

            <TextField label="Remarks" fullWidth name="rejection_reason" multiline rows={3} value={updatingData?.rejection_reason || ""} onChange={handleChange} sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }} />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }}>
              Update
            </Button>
            <Button onClick={handleClose} variant="outlined" fullWidth sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }}>
              Close
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}