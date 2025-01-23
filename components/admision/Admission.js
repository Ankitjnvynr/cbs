import React, { useState } from "react";
import admissionService from "../../services/admission";
import { toast } from "react-toastify";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    programme: "",
    candidateName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    category: "",
    district: "",
    mobile: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const checkExist = await admissionService.getRecords({email:formData.email});
    if(checkExist.data.totalRecords>0){
      toast.error("Email already exist");
    }else{
      const res = await admissionService.addRecord(formData)
      if(res.code===201){
        toast.success(res.message);
    }else{
      toast.error(res.message);
    }
    console.log(checkExist);
    }
    setLoading(false);
  };

  
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Admission Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Program Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Program Details</h2>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="programme">
                Programme *
              </label>
              <select
                id="programme"
                name="programme"
                value={formData.programme}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Select Branch</option>
                <option value="B.Tech (CE)">B.Tech (CE)</option>
                <option value="B.Tech (CSE)">B.Tech (CSE)</option>
                <option value="B.Tech (EE)">B.Tech (EE)</option>
                <option value="B.Tech (ECE)">B.Tech (ECE)</option>
                <option value="B.Tech (ME)">B.Tech (ME)</option>
                <option value="M.Tech (SE)">M.Tech (EE)</option>
                <option value="M.Tech (M&A)">M.Tech (M&A)</option>
                <option value="M.Tech (ECE)">M.Tech (ECE)</option>
                <option value="M.Tech (CSE)">M.Tech (CSE)</option>
                <option value="M.Tech (CE) (Transp. Eng.)">
                  M.Tech (CE) (Transp. Eng.)
                </option>
                <option value="M.Tech (MD)">M.Tech (MD)</option>
                <option value="M.Tech (CE) (Struct. Eng.)">
                  M.Tech (CE) (Struct. Eng.)
                </option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
          </div>

          {/* Personal Details Section */}
          <div>
            <h2 style={sectionHeadingStyle}>Candidate's Personal Details</h2>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="candidateName">
                Candidate's Name *
              </label>
              <input
                type="text"
                id="candidateName"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            {/* <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="fatherName">
                Father's Name *
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="motherName">
                Mother's Name *
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div> */}
            <div style={formGroupStyle}>
              <label style={labelStyle}>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Choose</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle}>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={inputStyle}
                required
              >
                <option value="">Choose</option>
                <option value="SC">SC</option>
                <option value="Gen">Gen</option>
                <option value="ST">ST</option>
                <option value="OBC">OBC</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="district">
                District *
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="mobile">
                Mobile No. *
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={formGroupStyle}>
              <label style={labelStyle} htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled = {loading} style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;





// Styles
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to right, #ebf8ff, #fff, #e9d8fd)",
  padding: "2rem",
};

const cardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "1rem",
  padding: "2rem",
  maxWidth: "800px",
  width: "100%",
};

const headingStyle = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#2d3748",
  marginBottom: "1rem",
  textAlign: "center",
};

const sectionHeadingStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "#4a5568",
  marginBottom: "0.5rem",
  marginTop: "1.5rem",
  borderBottom: "2px solid #e2e8f0",
  paddingBottom: "0.5rem",
};

const formGroupStyle = {
  marginBottom: "1rem",
};

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: "bold",
  color: "#4a5568",
};

const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  borderRadius: "0.25rem",
  border: "1px solid #cbd5e0",
};

const buttonStyle = {
  padding: "0.75rem 1.5rem",
  backgroundColor: "#2b6cb0",
  color: "#fff",
  border: "none",
  borderRadius: "0.25rem",
  cursor: "pointer",
  fontSize: "1rem",
  marginTop: "1.5rem",
  width: "100%",
};

