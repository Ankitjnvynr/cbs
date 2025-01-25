import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import bgImage from "/public/images/bgdash.jpg";
import admissionService from "../../services/admission";
import debounce from "lodash.debounce";
import UpdateAdmissionModal from "./UpdateAdmissionModal";

const Admissions = () => {
  const [admissionData, setAdmissionData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAdmission, setSelectedAdmission] = useState(null);


  const openModal = (admission) => {
    setSelectedAdmission(admission);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAdmission(null);
    setModalOpen(false);
  };


  const onUpdateAdmission = async (updatedData) => {
    try {
      const response = await fetch(`${admissionApiUrl}/${updatedData._id}`, {
        method: "PUT", // Assuming update uses PUT method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update admission.");
      }

      // Refresh the admission list after updating
      fetchAdmissions();
    } catch (error) {
      console.error("Error updating admission:", error);
    }
  };



  // Fetch Data Function
  const fetchData = useCallback(async (query = {}) => {
    try {
      const res = await admissionService.getRecords(query);
      if (res?.data?.data) {
        setAdmissionData(res.data.data);
      } else {
        setAdmissionData([]); // Fallback to empty array if data is undefined
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setAdmissionData([]); // Reset data on error
    }
  }, []);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);




    // Debounced Search Handler (fixes input issue)
    const debouncedFetchData = useCallback(
      debounce((query) => {
        fetchData(query);
      }, 300), // Adjust debounce delay if needed
      [fetchData]
    );


  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value); // Update UI immediately
    debouncedFetchData({ 
      candidateName: value,
      district: value,
      mobile: value, 
      district: value,
      category: value,
      programme: value,
    }); // Delay API request
  };

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
            <table className="w-full border-collapse border border-gray-400 text-white text-sm md:text-base">
              <caption className="caption-top text-lg text-white font-semibold mb-2">
                Admission Student List 
                <input 
                  onInput={handleSearch} 
                  value={searchQuery} 
                  style={{ marginLeft: 30 }} 
                  type="search" 
                  placeholder="Search" 
                  className="p-1 border border-gray-400 rounded " 
                />
              </caption>
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Programme</th>
                  <th className="p-2 border">Student Name</th>
                  <th className="p-2 border">Gender</th>
                  <th className="p-2 border">Place</th>
                  <th className="p-2 border">Mobile</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Created At</th>
                  <th className="p-2 border">action</th>
                </tr>
              </thead>
              <tbody>
                {admissionData.length > 0 ? (
                  admissionData.map((admission) => (
                    <tr key={admission.id}>
                      <td className="p-2 border">{admission.id}</td>
                      <td className="p-2 border">{admission.programme}</td>
                      <td className="p-2 border">{admission.candidateName}</td>
                      <td className="p-2 border">{admission.gender}</td>
                      <td className="p-2 border">{admission.district}</td>
                      <td className="p-2 border">{admission.mobile}</td>
                      <td className="p-2 border">{admission.email}</td>
                      <td className="p-2 border">{admission.created_at}</td>
                      <td className="p-2 border">
                <button
                  onClick={() => openModal(admission)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
              </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="p-4 text-center text-gray-300">
                      No admissions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            
   {/* Update Modal */}
            <UpdateAdmissionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        admissionData={selectedAdmission}
        onUpdate={onUpdateAdmission}
      />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
