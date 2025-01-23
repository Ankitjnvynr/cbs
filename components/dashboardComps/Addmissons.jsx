import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import bgImage from "/public/images/bgdash.jpg";

const Addmissons = () => {

    const [admissionData, setAdmissionData] = useState([]);



  return (
    <div
      style={{ display: "flex", gap: 20, padding: 20 }}
      className="relative min-h-screen flex "
    >
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div style={{ width: "100%" }} className="flex-1 ml-64 w-full ">
        <div className="relative w-full h-screen ">
          {/* Background Image */}
          <Image
            src={bgImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ zIndex: "-1" }}
          />

          <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <h1 className="text-white text-4xl  ">CBS INSTITUTE</h1>
          </div>

          <div
            style={{
              backdropFilter: "blur(5px)",
              border: "1px solid gray",
              borderRadius: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              minWidth: "60%",
              maxWidth: "100%", 
              height: "87vh",

              background: "rgba(0,0,30,0.7)",
            }}
            className="p-2 table-auto"
          >
            <div style={{ overflowX: "scroll" }}>
              <table className="w-full border-collapse border border-gray-400 text-white text-sm md:text-base">
                <caption className="caption-top text-lg font-semibold mb-2">
                  Admission Student List
                </caption>
                <thead>
                  <tr className="bg-gray-700 text-white">
                    <th className="p-2 border">ID</th>
                    <th className="p-2 border">Programme</th>
                    <th className="p-2 border">Candidate Name</th>
                    <th className="p-2 border">Father Name</th>
                    <th className="p-2 border">Mother Name</th>
                    <th className="p-2 border">Gender</th>
                    <th className="p-2 border">Category</th>
                    <th className="p-2 border">District</th>
                    <th className="p-2 border">Mobile</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Created At</th>
                    <th className="p-2 border">Updated At</th>
                  </tr>
                </thead>
                <tbody>{/* Add dynamic rows here */}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addmissons;
