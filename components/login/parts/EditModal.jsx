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
  overflowY: 'auto', // Add scroll for smaller screens
  maxHeight: '90vh' // Limit height to prevent overflow
};

export default function EditModal({ open, handleClose, handleOpen, updatingData }) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

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
          <Box component="form" sx={{ display: "grid", gap: 2, mt: 2, gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, 1fr)' }}>
            <TextField label="Name" fullWidth defaultValue={updatingData?.candidateName || ""} />
            <TextField label="Father Name" fullWidth defaultValue={updatingData?.fatherName || ""} />
            <TextField label="Roll No" fullWidth defaultValue={updatingData?.rollNo || ""} />
            <TextField label="Email" fullWidth defaultValue={updatingData?.email || ""} />
            <TextField label="Mobile No" fullWidth defaultValue={updatingData?.mobile || ""} />
            <TextField label="WhatsApp No" fullWidth defaultValue={updatingData?.whatsapp || ""} />
            <TextField label="Total Fees" fullWidth defaultValue={updatingData?.totalFees || ""} />
            <TextField label="Fees Paid Till Date" fullWidth defaultValue={updatingData?.feesPaidTillDate || ""} />
            <TextField label="Branch" fullWidth defaultValue={updatingData?.branch || ""} />
            <TextField label="Year" fullWidth defaultValue={updatingData?.year || ""} />

            <TextField select label="Payment Status" fullWidth defaultValue={updatingData?.status || "pending"} sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }}>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="approved">Approved</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </TextField>

            <TextField label="Remarks" fullWidth multiline rows={3} defaultValue={updatingData?.rejection_reason || ""} sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }} />

            <Button variant="contained" color="primary" fullWidth sx={{ gridColumn: isSmallScreen ? 'span 1' : 'span 2' }}>
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