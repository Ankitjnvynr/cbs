// pages/dashboard.js
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "/public/images/bgdash.jpg"; // Background image
import pool from "../../../lib/db"; // Database connection
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi"; // Import logout icon
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa"; // Import edit, delete, and add icons
import Link from "next/link";
import Sidebar from "../../../components/dashboardComps/Sidebar";
import CreateNotice from "../../../components/dashboardComps/CreateNotice";
import { IoMdCloseCircle } from "react-icons/io";

const DashboardPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNotice,setEditNotice] = useState({})

  const fetchNotices = async () => {
    try {
      const response = await fetch("/api/notices");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNotices(data.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const handleEdit =(notice)=>{
    // console.log(notice);
    setIsModalOpen(true);
    setEditNotice(notice)
    
  }

  useEffect(() => {
    fetchNotices(); // Fetch notices when the component mounts
  }, []);

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

  // Handler for delete action
  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this notice?");
    if (confirmed) {
      try {
        const response = await fetch(`/api/notices`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
        if (response.ok) {
          alert("Notice deleted successfully");
          fetchNotices(); // Refresh the notices after deletion
        } else {
          alert("Failed to delete notice");
        }
      } catch (error) {
        console.error("Error deleting notice:", error);
      }
    }
  };

  return (
    <Fragment>
      {/* new addon form for  notices */}

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            zIndex: 1100,
            width: "100%",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="fixed inset-0 flex items-center  justify-center z-50 bg-opacity-90 backdrop-blur-sm transition-opacity duration-300 ease-in-out "
        >
          <div
            style={{
              color: "white",
              margin: "auto",
              marginTop: "10%",
              background: "rgba(255,255,255,0.9)",
              transform: "translateY(-50%)",
              maxWidth: "80%",
              padding:20,
              color:'white'
            }}
            className="p-6  shadow-lg w-1/3 animate-fade-in rounded"
          >
            <span
              onClick={() => setIsModalOpen(false)}
              className=" text-right float-end text-lg "
            >
              <IoMdCloseCircle color="black" size={30} />
            </span>
            
            <CreateNotice editNotice={editNotice} onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}

      <div
        style={{ display: "flex", gap: 20, padding: 20 }}
        className="relative min-h-screen flex "
      >
        <Sidebar />

        {/* Main Content Section */}
        <div className="flex-1 ml-64">
          <div className="relative w-full h-screen  flex">
            {/* Background Image */}
            <Image
              src={bgImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
              style={{ zIndex: "-1" }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center rounded-lg ">
              <h1 className="text-white text-4xl">CBS INSTITUTE</h1>
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
                // width: "88%",
                background: "rgba(0,0,30,0.3)",
              }}
              className="p-2 table-auto flex flex-1"
            >
              <div className="absolute top-4 right-4 flex-1 ">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center bg-blue-600 p-2 rounded shadow hover:bg-blue-700 transition"
                >
                  <FaPlus className="mr-2" /> Create New
                </button>
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
                  minWidth: "80vw",
                  height: "75vh",
                  // width: "88%",
                  background: "rgba(0,0,30,0.3)",
                  fontSize: "0.8rem",
                }}
                className="p-2 table-auto flex-1 "
              >
                <div style={{ overflowX: "scroll" }}>
                  <table className="table-auto w-full text-white">
                    <caption className="caption-top text-white">
                      Notices List
                    </caption>
                    <thead>
                      <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Content</th>
                        <th className="border p-2">Author</th>
                        <th className="border p-2">Date Posted</th>
                        <th className="border p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {notices.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="text-center p-4">
                            No notices available.
                          </td>
                        </tr>
                      ) : (
                        notices.map((notice, index) => (
                          <tr key={notice.notice_id}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">
                              {notice.title || "N/A"}
                            </td>
                            <td className="border p-2">
                              {notice.content || "N/A"}
                            </td>
                            <td className="border p-2">
                              {notice.author || "N/A"}
                            </td>
                            <td className="border p-2">
                              {new Date(
                                notice.date_posted
                              ).toLocaleDateString() || "N/A"}
                            </td>
                            <td className="border p-2 flex space-x-2">
                              <button
                                onClick={()=>handleEdit(notice)}
                                className="text-blue-500"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDelete(notice.notice_id)}
                                className="text-red-500"
                              >
                                <FaTrash />
                              </button>
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
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeIn 0.3s forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Fragment>
  );
};

export async function getServerSideProps() {
  try {
    const [rows] = await pool.query(`
      SELECT notice_id, title, content, author, date_posted 
      FROM notice_board
    `);

    const notices = rows.map((notice) => ({
      ...notice,
      date_posted: notice.date_posted ? notice.date_posted.toISOString() : null,
    }));

    return { props: { notices } };
  } catch (error) {
    console.error("Database Error:", error);
    return { props: { notices: [] } };
  }
}

export default DashboardPage;
