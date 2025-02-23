"use client"; // Required for Next.js App Router

import { useState } from "react";
import * as XLSX from "xlsx";

export default function ExcelReader() {
  const [data, setData] = useState([]);

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
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="border p-2"
      />

      {data.length > 0 && (
        <table className="mt-4 border-collapse border border-gray-400">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} className="border p-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx} className="border p-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
