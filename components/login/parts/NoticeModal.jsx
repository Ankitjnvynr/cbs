import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import noticeService from "../../../services/noticeServices";
import { toast } from "react-toastify";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95vw", sm: 600 },
  maxWidth: "90vw",
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function NoticeModal({
  open,
  handleClose,
  noticeData,
  setNoticeData,
  update = false,
  getNotice,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setNoticeData({
      ...noticeData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    if (update) {
      const response = await noticeService.updateNotice(
        noticeData.id,
        noticeData.title,
        noticeData.link,
        noticeData.expiration_date,
        noticeData.status ? "Active" : "Inactive"
      );
      console.log(response);
      if (response.code == 200) {
        getNotice();
        toast.success(response.message);
      }
    } else {
      const response = await noticeService.createNotice(
        noticeData.title,
        noticeData.link,
        noticeData.expiration_date,
        noticeData.status ? "Active" : "Inactive"
      );
      console.log(response);
      getNotice();
    }
    handleClose();
    setIsLoading(false);
  };

  useEffect(() => {
    if (!open) {
      setNoticeData({
        author: "",
        content: "",
        date_posted: "",
        expiration_date: "",
        priority: "",
        status: false,
        title: "",
      });
    }
  }, [open]);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" onSubmit={handleSubmit} sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {update ? "Update" : "Add New"} Notice
        </Typography>

        <TextField
          label="Title"
          fullWidth
          margin="normal"
          name="title"
          value={noticeData?.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Link"
          fullWidth
          margin="normal"
          multiline
          rows={2}
          name="link"
          value={noticeData?.link}
          onChange={handleChange}
          required
        />

        <TextField
          label="Expiration Date"
          type="date"
          fullWidth
          margin="normal"
          name="expiration_date"
          value={noticeData?.expiration_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        {/* <TextField
          label="Priority"
          fullWidth
          margin="normal"
          name="priority"
          value={noticeData?.priority}
          onChange={handleChange}
          required
        /> */}
        <FormControlLabel
          control={
            <Switch
              checked={noticeData.status}
              onChange={handleChange}
              name="status"
            />
          }
          label={noticeData.status ? "Active" : "Inactive"}
        />

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button onClick={handleClose} variant="outlined" sx={{ mr: 1 }}>
            Close
          </Button>
          <Button disabled={isLoading} type="submit" variant="contained">
            {isLoading ? "please Wait..." : "Save"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
