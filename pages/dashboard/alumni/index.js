// pages/dashboard.js
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "/public/images/bgdash.jpg"; // Background image
import pool from "../../../lib/db"; // Database connection
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi"; // Import logout icon
import Link from "next/link";

const DashboardPage = ({ alumniData }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token
    router.push("/login"); // Redirect to login page
    console.log("User has logged out"); // Confirm logout
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

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
        {/* Sidebar Section */}
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
            height: "95vh",
            background: "rgba(0,0,30,0.3)",
          }}
          className="w-64 bg-gray-800 text-white h-full fixed p-1"
        >
          <ul 
          style={{
            display:'flex',
            flexDirection:'column',
            gap: 20,
          }} className="mt-10 hover:cursor-pointer ">
            <li
              style={{
                // background: "black",
                cursor: "pointer",
              }}
              className="p-4 hover:bg-gray-700 cursor-pointer"
            >
              Dashboard
            </li>

            <li>
              <Link
                style={{
                  //  background: "red",
                  cursor: "pointer",
                }}
                className="p-4 hover:bg-gray-900 cursor-pointer text-white "
                href="/dashboard/alumni"
              >
                Alumni
              </Link>
            </li>
            <li 
            style={{
              
            }}
            >
              <Link
                style={{
                  //  background: "red",
                  cursor: "pointer",
                }}
                className="p-4 hover:bg-gray-900 cursor-pointer text-white "
                href="/dashboard/notices"
              >
                Notice Board
              </Link>
            </li>
            
          </ul>

          <ul className="mt-10">
            <li
              style={{
                background: "black",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
              onClick={handleLogout}
              className="mb-3 mx-1 p-2 hover:bg-gray-700 rounded bg-red-50"
            >
              <FiLogOut size={20} /> {/* Logout Icon */}
              Logout
            </li>
          </ul>
        </div>

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
                    {alumniData.length === 0 ? (
                      <tr>
                        <td colSpan="13" className="text-center p-4">
                          No alumni data available.
                        </td>
                      </tr>
                    ) : (
                      alumniData.map((alumni, index) => (
                        <tr key={alumni.id}>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const [rows] = await pool.query(`
            SELECT 
                studentName, nationality, occupation, city, email, mobile, 
                course, branch, rollNo, session, currentOrgDesignation, 
                pastOrgDesignation, createdAt 
            FROM alumni_registration
        `);

    const alumniData = rows.map((alumni) => ({
      ...alumni,
      createdAt: alumni.createdAt ? alumni.createdAt.toISOString() : null,
    }));

    return { props: { alumniData } };
  } catch (error) {
    console.error("Database Error:", error);
    return { props: { alumniData: [] } };
  }
}

export default DashboardPage;
