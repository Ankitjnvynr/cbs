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

export default function NoticesList({
  rows,
  setOpen,
  setUpdate,
  setNoticeData,
  getNotice
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = (row) => {
    handleClose();
    setOpen(true);
    setUpdate(true);
    console.log("single row", row);
    setNoticeData({
      title: row.title,
      link: row.content,
      expiration_date: row.expiration_date,
      status: row.status == "Active" ? true : false,
      id: row.notice_id,
    });
  };
  const handleDel = async (row) => {
    const res = await noticeService.deleteNotice(row.notice_id);

    if (res.code == 200) {
      toast.success(res.message);
      getNotice()
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
            <TableRow
              key={row.notice_id} // Use a unique key, like notice_id
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index + 1} {/* Display serial number */}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.content}</TableCell>
              <TableCell>{row.date_posted}</TableCell>
              <TableCell>{row.expiration_date}</TableCell>

              <TableCell align="center">
                <Badge
                  color={row.status == "Active" ? "success" : "warning"}
                  badgeContent={row.status || "Inactive"}
                  max={999}
                ></Badge>
              </TableCell>
              <TableCell align="center">
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <TfiMoreAlt />
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => handleEdit(row)}>Edit</MenuItem>
                  <MenuItem onClick={() => handleDel(row)}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
