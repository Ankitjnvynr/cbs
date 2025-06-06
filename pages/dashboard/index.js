// pages/dashboard.js
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "/public/images/bgdash.jpg"; // Background image
import pool from "../../lib/db"; // Database connection
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi"; // Import logout icon
import Link from "next/link";
import Sidebar from "../../components/dashboardComps/Sidebar";

const DashboardPage = ({ alumniData, noticeData }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAlumniData, setShowAlumniData] = useState(false); // State for alumni data display
  const [showNoticeBoard, setShowNoticeBoard] = useState(false); // State for notice board display

  // Debugging to check if alumniData is received
  useEffect(() => {
    console.log("Received Alumni Data:", alumniData);
    console.log("Received Notice Data:", noticeData);
  }, [alumniData, noticeData]);



  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      setIsAuthenticated(true); // Set authenticated if token exists
    } else {
      router.push("/login"); // Redirect if not authenticated
    }

    setLoading(false); // Set loading to false after check
  }, [router]);

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while checking auth
  }

  if (!isAuthenticated) {
    return null; // Avoid rendering if not authenticated
  }

  return (
    <Fragment>
      <div
        style={{ display: "flex", gap: 20, padding: 20 }}
        className="relative min-h-screen flex"
      >
        <Sidebar/>

        {/* Main Content Section */}
        <div className="flex-1 ml-64">
          <div className="relative w-full h-screen">
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
              <h1 className="text-white text-4xl">CBS INSTITUTE</h1>
            </div>

            {/* Alumni Data Table */}
            {showAlumniData && (
              <div
                style={{
                  backdropFilter: "blur(5px)",
                  border: "1px solid gray",
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  minWidth: 180,
                  height: "87vh",
                  width: "88%",
                  background: "rgba(0,0,30,0.3)",
                }}
                className="p-2 table-auto"
              >
                <div style={{ overflowX: "scroll" }}>
                  <table className="table-auto w-full text-white">
                    <caption className="caption-top text-white">
                      Alumni Student List
                    </caption>
                    <thead>
                      <tr>
                        <th className="border p-2">Sr</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Nationality</th>
                        <th className="border p-2">Occupation</th>
                        <th className="border p-2">City</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Mobile</th>
                        <th className="border p-2">Course</th>
                        <th className="border p-2">Branch</th>
                        <th className="border p-2">Roll No</th>
                        <th className="border p-2">Session</th>
                        <th className="border p-2">Current Org Designation</th>
                        <th className="border p-2">Past Org Designation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {!alumniData || alumniData.length === 0 ? (
                        <tr>
                          <td colSpan="13" className="text-center p-4">
                            No alumni data available.
                          </td>
                        </tr>
                      ) : (
                        alumniData.map((alumni, index) => (
                          <tr key={index}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">
                              {alumni.studentName || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.nationality || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.occupation || "N/A"}
                            </td>
                            <td className="border p-2">{alumni.city || "N/A"}</td>
                            <td className="border p-2">
                              {alumni.email || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.mobile || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.course || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.branch || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.rollNo || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.session || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.currentOrgDesignation || "N/A"}
                            </td>
                            <td className="border p-2">
                              {alumni.pastOrgDesignation || "N/A"}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Notice Board Section */}
            {showNoticeBoard && (
              <div
                style={{
                  backdropFilter: "blur(5px)",
                  border: "1px solid gray",
                  borderRadius: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                  minWidth: 1100,
                  height: "87vh",
                  width: "100%",
                  background: "rgba(0,0,30,0.3)",
                }}
                className="p-2 table-auto"
              >
                <h2 className="text-white text-2xl text-center mt-4">
                  Notice Board
                </h2>
                <ul className="text-white p-4">
                  {noticeData.length === 0 ? (
                    <li>No notices available.</li>
                  ) : (
                    noticeData.map((notice, index) => (
                      <li key={index} className="mb-4">
                        <strong>{notice.title}</strong> - {notice.description}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const [alumniRows] = await pool.query(`
      SELECT 
          studentName, nationality, occupation, city, email, mobile, 
          course, branch, rollNo, session, currentOrgDesignation, 
          pastOrgDesignation, createdAt 
      FROM alumni_registration
    `);

    console.log("Alumni Rows:", alumniRows); // Debugging line

    const alumniData = alumniRows.map((alumni) => ({
      ...alumni,
      createdAt: alumni.createdAt ? alumni.createdAt.toISOString() : null,
    }));

    // Dummy notice data for testing
    const noticeData = [
      { title: "Holiday Notice", description: "College will be closed on Friday." },
      { title: "Exam Schedule", description: "Exams start next Monday." }
    ];

    return { props: { alumniData, noticeData } };
  } catch (error) {
    console.error("Database Error:", error);
    return { props: { alumniData: [], noticeData: [] } };
  }
}

export default DashboardPage;
