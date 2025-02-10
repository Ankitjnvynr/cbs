import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from "@mui/material";

const Payfee = () => {
  const [open, setOpen] = useState(false);

  const qrCodeImage = "/images/upiqr.png"; // Replace with your actual QR code image path
  const upiId = "9711275333m@pnb"; // Your UPI ID
  const upiUrl =
    "upi://pay?pa=9711275333m@pnb&pn=CHBHIM SINGH INSTITUTE OF SCIENCE AND TECHNOLOGY TRUST&mc=8220&tn=&am=&cu=INR&url=&mode=02"; // Your UPI Payment URL

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUPIPayment = () => {
    window.location.href = upiUrl; // Opens Google Pay, PhonePe, Paytm, or BHIM
  };

  return (
    <div>
      {/* Pay Fee Button */}
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Pay Fee
      </Button> */}
      <span style={{color:'rgb(0, 112, 243)', cursor:'pointer'}} onClick={handleOpen}>Pay fee</span>

      {/* Payment Dialog with Increased Size */}
      <Dialog
        open={open}
        onClose={(_, reason) => reason !== "backdropClick" && handleClose()}
        disableEscapeKeyDown
        maxWidth="md" // Larger dialog width
        fullWidth
      >
        <DialogTitle style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}>
          Scan & Pay
        </DialogTitle>

        <DialogContent style={{ textAlign: "center", padding: "20px" }}>
          {/* QR Code Image - Bigger Size */}
          <img
            src={qrCodeImage}
            alt="UPI QR Code"
            style={{ width: "300px", height: "auto" }}
          />

          {/* UPI ID */}
          <p style={{ fontSize: "18px", fontWeight: "bold",  color: "#333" }}>
            UPI ID: {upiId}
          </p>

          {/* UPI Payment Button */}
          <Button
            variant="contained"
            color="success"
            onClick={handleUPIPayment}
            size="large"
            style={{  fontWeight: "bold" }}
          >
            Pay via UPI App
          </Button>
        </DialogContent>

        {/* Dialog Actions: Only closes when clicking "Close" */}
        <DialogActions style={{ justifyContent: "center" }}>
          <Button variant="outlined" color="primary" onClick={handleClose} size="large">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Payfee;
