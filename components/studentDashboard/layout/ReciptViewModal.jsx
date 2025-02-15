import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import conf from "../../../lib/conf";

export default function ReciptViewModal({
  isViewrRecipt,
  setIsViewrecipt,
  reciptForView,
}) {
  const handleClose = () => setIsViewrecipt(false);

  // Determine file type (PDF or Image)
  const isPDF = reciptForView?.toLowerCase().endsWith(".pdf");

  return (
    <Modal
      open={isViewrRecipt}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {isPDF ? (
            // Render PDF in an iframe
            <iframe
              src={`${conf.apiBaseUri}/uploads/${reciptForView}`}
              style={{
                width: "100%",
                height: "80vh",
                border: "none",
              }}
            ></iframe>
          ) : (
            // Render Image
            <img
              src={`${conf.apiBaseUri}/uploads/${reciptForView}`}
              alt="Receipt"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          )}
        </Typography>
        <Button
        variant="contained"
          onClick={handleClose}
          sx={{ mt: 2, display: "block", mx: "auto" }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  maxWidth: 800,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 1,
  overflow: "hidden",
};
