import React, { useState, useEffect } from "react";

const UpdateAdmissionModal = ({ isOpen, onClose, admissionData, onUpdate }) => {
  const [formData, setFormData] = useState({
    candidateName: "",
    programme: "",
    gender: "",
    district: "",
    mobile: "",
    email: "",
  });

  // Populate form with existing admission data
  useEffect(() => {
    if (admissionData) {
      setFormData({
        candidateName: admissionData.candidateName || "",
        programme: admissionData.programme || "",
        gender: admissionData.gender || "",
        district: admissionData.district || "",
        mobile: admissionData.mobile || "",
        email: admissionData.email || "",
      });
    }
  }, [admissionData]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(formData); // Call parent update function
      onClose(); // Close modal after update
    } catch (error) {
      console.error("Error updating admission:", error);
    }
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Update Admission
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            placeholder="Candidate Name"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="programme"
            value={formData.programme}
            onChange={handleChange}
            placeholder="Programme"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="District"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAdmissionModal;
