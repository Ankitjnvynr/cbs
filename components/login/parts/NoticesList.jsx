import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge, Button, Fade, Menu, MenuItem } from "@mui/material";
import { TfiMoreAlt } from "react-icons/tfi";
import noticeService from "../../../services/noticeServices";
import { toast } from "react-toastify";

export default function NoticesList({ rows, setOpen, setUpdate, setNoticeData, getNotice }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null); // Track selected row

  const handleClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleEdit = () => {
    if (!selectedRow) return;
    setOpen(true);
    setUpdate(true);
    setNoticeData({
      title: selectedRow.title,
      link: selectedRow.content,
      expiration_date: selectedRow.expiration_date,
      status: selectedRow.status === "Active",
      id: selectedRow.notice_id,
    });
    handleClose();
  };

  const handleDel = async () => {
    if (!selectedRow) return;
    const res = await noticeService.deleteNotice(selectedRow.notice_id);
    if (res.code === 200) {
      toast.success(res.message);
      getNotice();
    } else {
      toast.error(res.message);
    }
    handleClose();
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sr</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Date Posted</TableCell>
            <TableCell>Expiration Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.notice_id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.content}</TableCell>
              <TableCell>{row.date_posted}</TableCell>
              <TableCell>{row.expiration_date}</TableCell>
              <TableCell align="center">
                <Badge color={row.status === "Active" ? "success" : "warning"} badgeContent={row.status || "Inactive"} />
              </TableCell>
              <TableCell align="center">
                <Button
                  aria-controls={anchorEl ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={Boolean(anchorEl) ? "true" : undefined}
                  onClick={(event) => handleClick(event, row)}
                >
                  <TfiMoreAlt />
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{ "aria-labelledby": "fade-button" }}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleEdit}>Edit</MenuItem>
                  <MenuItem onClick={handleDel}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
