import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import conf from "../../../lib/conf";
import { Badge, Button, Menu, MenuItem, Typography } from "@mui/material";
import { FiMoreHorizontal } from "react-icons/fi";

export default function StudentList({ rows }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sr</TableCell>
            <TableCell align="left">Student</TableCell>
            <TableCell align="left">Roll No</TableCell>

            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Course</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, sr) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {sr + 1}
              </TableCell>
              <TableCell align="left" style={{ display: "flex", gap: 10 }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                  src={
                    row.picture
                      ? conf.apiBaseUri + "/uploads/" + row.picture
                      : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                  }
                  alt=""
                />
                <span>
                  <Typography>{row.first_name}</Typography>
                  <Typography variant="caption">{row.email}</Typography>
                </span>
              </TableCell>
              <TableCell align="left">{row.rollno || "N/A"}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.course_name}</TableCell>
              <TableCell align="center">
                {row.is_verified == 1 ? (
                  <Badge badgeContent="Verified" color="success" />
                ) : (
                  <Badge color="error" badgeContent="Not_Verified" />
                )}
              </TableCell>
              <TableCell align="center">
                <Button onClick={handleClick}>
                  <FiMoreHorizontal />
                </Button>
                <div>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
