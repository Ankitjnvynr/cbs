import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useEffect } from "react";
import admissionService from "../../services/admission";

export default function ReciptList({rows}) {
  

  return (
    <TableContainer component={Paper}>
     
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Total fee</TableCell>
            <TableCell align="right">Recipt</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Remark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.created_at.substr(0,10)}
              </TableCell>
              <TableCell align="right">{row.totalFees}</TableCell>
              <TableCell align="right">{row.receipt}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell style={{maxWidth:100}} align="right ">{row?.rejection_reason} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
