import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge, CircularProgress, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ReciptViewModal from "./layout/ReciptViewModal";

export default function ReciptList({ rows }) {
  const [isViewrRecipt, setIsViewrecipt] = useState(false);
  const [reciptForView, setReciptForView] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const viewRecipt = (reciptFileName) => {
    setIsViewrecipt(true);
    setReciptForView(reciptFileName);
  };

  return (
    <>
      <ReciptViewModal
        isViewrRecipt={isViewrRecipt}
        reciptForView={reciptForView}
        setIsViewrecipt={setIsViewrecipt}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="center">Total fee</TableCell>
              <TableCell align="center">Recipt</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Remark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <CircularProgress />
                    <Typography ml={2}>Loading...</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography>No data found</Typography>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.created_at.substr(0, 10)}
                  </TableCell>
                  <TableCell align="center">{row.totalFees}</TableCell>
                  <TableCell
                    onClick={() => viewRecipt(row.receipt)}
                    align="center"
                    style={{ cursor: "pointer" }}
                  >
                    {row.receipt}
                  </TableCell>
                  <TableCell align="center">
                    <Badge
                      color={
                        row.status === "approved"
                          ? "success"
                          : row.status === "pending"
                          ? "warning"
                          : "error"
                      }
                      badgeContent={row.status}
                      max={999}
                    />
                  </TableCell>
                  <TableCell style={{ maxWidth: 100 }} className="text-red-700" align="right">
                    {row?.rejection_reason}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}