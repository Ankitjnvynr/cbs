import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useMediaQuery } from '@mui/material';
import { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95vw', sm: 600 },
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function NoticeModal({ open, handleClose, noticeData, setNoticeData, update = false, handleSave }) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        setNoticeData({ ...noticeData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSave(noticeData);
        handleClose();
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
                title: ""
            });
        }
    }, [open]);

    return (
        <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box component="form" onSubmit={handleSubmit} sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {update ? "Update" : "Add New"} Notice
                </Typography>

                <TextField label="Title" fullWidth margin="normal" name="title" value={noticeData?.title} onChange={handleChange} required />
                <TextField label="Content" fullWidth margin="normal" multiline rows={3} name="content" value={noticeData?.content} onChange={handleChange} required />
                <TextField label="Author" fullWidth margin="normal" name="author" value={noticeData?.author} onChange={handleChange} required />
                <TextField label="Date Posted" type="date" fullWidth margin="normal" name="date_posted" value={noticeData?.date_posted} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                <TextField label="Expiration Date" type="date" fullWidth margin="normal" name="expiration_date" value={noticeData?.expiration_date} onChange={handleChange} InputLabelProps={{ shrink: true }} required />
                <TextField label="Priority" fullWidth margin="normal" name="priority" value={noticeData?.priority} onChange={handleChange} required />
                <FormControlLabel control={<Switch checked={noticeData?.status} onChange={handleChange} name="status" />} label="Active" />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button onClick={handleClose} variant='outlined' sx={{ mr: 1 }}>Close</Button>
                    <Button type="submit" variant="contained">Save</Button>
                </Box>
            </Box>
        </Modal>
    );
}