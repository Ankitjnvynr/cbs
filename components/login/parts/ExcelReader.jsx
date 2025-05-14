"use client"; // Required for Next.js App Router

import conf from "../../../lib/conf";
import { useState } from "react";
import * as XLSX from "xlsx";
import {
  Button,
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  TablePagination,
} from "@mui/material";
import { FiUpload } from "react-icons/fi"; // React Icon for Upload

export default function ExcelReader() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  // Add pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const isMobile = useMediaQuery("(max-width:600px)");

  // Handle file upload and process the Excel file
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = async (e) => {
      const bufferArray = e.target.result;
      const workbook = XLSX.read(bufferArray, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Read first sheet
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        defval: "",
      });

      // Save the sheet data to state for display purposes
      setData(sheetData);
      // Reset pagination to the first page after new upload
      setPage(0);

      // Upload each record (single object) one by one
      await uploadDataToBackend(sheetData);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  // Upload function processes each record
  const uploadDataToBackend = async (dataArray) => {
    let successCount = 0;
    let failureCount = 0;
    let counter = 1;

    for (const record of dataArray) {
      // Create a shallow copy and remove the "id" field if it exists
      const recordToUpload = { ...record };
      if (recordToUpload.hasOwnProperty("id")) {
        delete recordToUpload.id;
      }

      // Optionally modify email to ensure uniqueness, if needed
      if (recordToUpload.email) {
        const emailParts = recordToUpload.email.split("@");
        if (emailParts.length === 2) {
          recordToUpload.email = `${emailParts[0]}_${counter}@${emailParts[1]}`;
        } else {
          recordToUpload.email = `${recordToUpload.email}_${counter}`;
        }
        counter++;
      }

      try {
        const response = await fetch(`${conf.apiBaseUri}/api/v1/alumni`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recordToUpload),
        });

        if (!response.ok) {
          failureCount++;
          console.error(
            "Failed uploading record:",
            recordToUpload,
            "Status:",
            response.status
          );
        } else {
          successCount++;
        }
      } catch (error) {
        failureCount++;
        console.error("Error uploading record:", recordToUpload, error);
      }
    }

    // Set an aggregated upload status message
    setUploadStatus(
      `Upload complete: ${successCount} record(s) successful, ${failureCount} record(s) failed.`
    );
  };

  // Pagination handler: change page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Pagination handler: change rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box className="border" sx={{ gap: 2 }}>
      {/* Button to open modal */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<FiUpload />}
        onClick={() => setIsModalOpen(true)}
      >
        {!isMobile && "Upload Excel File"}
      </Button>

      {/* Modal for file upload and data display */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95vw", sm: "95vw", md: "95vw" },
            maxHeight: "90vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Upload Excel File
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            Please ensure the Excel file follows this format:
          </Typography>
          <ul style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
            <li>First row should have column names.</li>
            <li>Data should be structured properly.</li>
            <li>Supported formats: .xlsx, .xls</li>
          </ul>

          <input
            accept=".xlsx, .xls"
            style={{ display: "none" }}
            id="upload-excel"
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="upload-excel">
            <Button variant="contained" component="span" fullWidth>
              Select File
            </Button>
          </label>

          {/* Show upload status */}
          {uploadStatus && (
            <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
              {uploadStatus}
            </Typography>
          )}

          {/* Display Data in Table with Pagination */}
          {data.length > 0 && (
            <>
              <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Table size="medium" aria-label="uploaded data">
                  <TableHead>
                    <TableRow>
                      {Object.keys(data[0]).map((key) => (
                        <TableCell key={key} sx={{ fontWeight: "bold" }}>
                          {key}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, index) => (
                        <TableRow key={index}>
                          {Object.values(row).map((value, idx) => (
                            <TableCell key={idx}>
                              {value ? value.toString() : ""}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                component="div"
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 25, 50]}
              />
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
