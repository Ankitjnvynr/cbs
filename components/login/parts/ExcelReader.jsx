"use client"; // Required for Next.js App Router

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
} from "@mui/material";
import { FiUpload } from "react-icons/fi"; // React Icon for Upload

export default function ExcelReader() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
      const bufferArray = e.target.result;
      const workbook = XLSX.read(bufferArray, { type: "array" });
      const sheetName = workbook.SheetNames[0]; // Read first sheet
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]); // Convert to JSON
      setData(sheetData);
      // setIsModalOpen(false); // Close modal after upload
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  return (
    <Box className="border">
      {/* Button to open modal */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<FiUpload />}
        onClick={() => setIsModalOpen(true)}
      >
        Upload Excel File
      </Button>

      {/* Modal for file upload */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400, md: 500 },
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
          {console.log("data", data)}
          {/* Display Data in Table */}

          {data.length > 0 && (
            <TableContainer component={Paper} sx={{ mt: 3 }}>
              <Table size="small" aria-label="uploaded data">
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
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      {Object.values(row).map((value, idx) => (
                        <TableCell key={idx}>{value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
