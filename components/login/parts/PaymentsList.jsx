import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import conf from '../../../lib/conf';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function PaymentsList({rows,handleOpen}) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Roll No</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Father Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Total Fee</TableCell>
            <TableCell align="center">Fee Paid Till Date</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Receipt</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Remark</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.rollNo}
              </TableCell>
              <TableCell align="left">{row.candidateName}</TableCell>
              <TableCell align="left">{row.fatherName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="center">{row.mobile}</TableCell>
              <TableCell align="center">{row.totalFees}</TableCell>
              <TableCell align="center">{row.feesPaidTillDate}</TableCell>
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="center">
                <a href={`${conf.apiBaseUri}/uploads/${row.receipt}`} target="_blank">
                  View
                </a>
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                {row.rejection_reason || "N/A"}
              </TableCell>
              <TableCell  align="center">
                <Button onClick={()=>handleOpen(row)} >...</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
