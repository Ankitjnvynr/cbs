import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge, Button } from "@mui/material";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";


export default function NoticesList({ rows }) {
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
            <TableCell>Priority</TableCell>
            <TableCell align="center" >Status</TableCell>
            <TableCell>Action</TableCell>
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
              <TableCell>{row.priority}</TableCell>
              <TableCell align="center" >
                <Badge
                  color={row.status == "Active" ? "success" : "warning"}
                  badgeContent={row.status}
                  max={999}
                ></Badge>
              </TableCell>
              <TableCell>
                <Button style={{marginRight:10}} className="mr-2" variant="contained" color="success" >
                <CiEdit />
                </Button>
                <Button variant="outlined" color="warning"><MdDeleteOutline /></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
