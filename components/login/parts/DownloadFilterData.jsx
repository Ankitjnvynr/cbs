"use client"; // Required for Next.js App Router

import * as XLSX from "xlsx";
import { Box, Button } from "@mui/material";
import { FiDownload } from "react-icons/fi"; // Download Icon
import alumniService from "../../../services/alumni";

export default function DownloadFilterData({ filters }) {
  const handleDownload = async (type) => {
    try {
      let dataToDownload = [];
      let totalRecords = 0;

      if (type === "filtered") {
        // First call: Get total number of filtered records
        const countResponse = await alumniService.getRecords(0, 1, filters);
        if (countResponse.code === 200) {
          totalRecords = countResponse.pagination.total;
        } else {
          alert("Error fetching filtered record count.");
          return;
        }
        // Second call: Fetch all filtered records using the total count
        const response = await alumniService.getRecords(0, totalRecords, filters);
        if (response.code === 200) {
          dataToDownload = response.data;
        } else {
          alert("Error fetching filtered data.");
          return;
        }
      } else {
        // For full data: First get the total count without filters
        const countResponse = await alumniService.getRecords(0, 1, {});
        if (countResponse.code === 200) {
          totalRecords = countResponse.pagination.total;
        } else {
          alert("Error fetching record count.");
          return;
        }
        // Second call: Fetch all full records
        const response = await alumniService.getRecords(0, totalRecords, {});
        if (response.code === 200) {
          dataToDownload = response.data;
        } else {
          alert("Error fetching full data.");
          return;
        }
      }

      if (dataToDownload.length === 0) {
        alert("No data available for download!");
        return;
      }

      // Convert the JSON data to an Excel worksheet
      const worksheet = XLSX.utils.json_to_sheet(dataToDownload);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Alumni_Data");

      // Trigger the Excel file download
      XLSX.writeFile(workbook, `Alumni_Data_${type}.xlsx`);
    } catch (error) {
      console.error("Error downloading data:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FiDownload />}
        onClick={() => handleDownload("filtered")}
      >
        Download Filtered Data
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        startIcon={<FiDownload />}
        onClick={() => handleDownload("all")}
      >
        Download Full Data
      </Button>
    </Box>
  );
}
