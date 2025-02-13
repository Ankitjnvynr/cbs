import React, { useEffect, useState } from "react";
import Styles from "./Admissions.module.css";
import { toast } from "react-toastify";
import authService from "../../services/auth";
import uploadService from "../../services/uploaService";
import admissionService from "../../services/admission";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    rollNo: "",
    branch: "",
    year: "",
    mobileNo: "",
    whatsappNo: "",
    email: "",
    totalFees: "",
    feesPaidTillDate: "",
    receipt: null,
  });
  const [oldFileName,setOldFileName] = useState('')
  const [isDisabled,  setIsDisabled] = useState(false);


  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getUseBasicDetail = async () => {
      const user = JSON.parse(sessionStorage.getItem("user"));
      const response = await authService.getMyProfile(user?.id);
      // console.log(response.data);
      const data = response.data;

      setFormData({
        ...formData,
        email: user?.email,
        name: data?.first_name,
        mobileNo: data?.phone,
        fatherName: data?.last_name,
      });
    };
    try {
      getUseBasicDetail();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, receipt: e.target.files[0] });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (
        !formData[field] ||
        (typeof formData[field] === "string" && !formData[field].trim())
      ) {
        newErrors[field] = `${field
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setIsDisabled(true)
    e.preventDefault();
    if (validateForm()) {
      

      const response = await uploadService.upload(formData.receipt,oldFileName);
      // console.log(response);
      if (response.code == 200) {
        setOldFileName(response.newFileName)
        const res = await admissionService.addRecord({
          programme: formData.branch,
          rollNo: formData.rollNo,
          branch: formData.branch,
          year: formData.year,
          candidateName: formData.name,
          fatherName: formData.fatherName,
          motherName: "nil",
          gender: "nil",
          category: "nil",
          district: "nil",
          mobile: formData.mobileNo,
          whatsapp: formData.whatsappNo,
          email: formData.email,
          totalFees: formData.totalFees,
          feesPaidTillDate: formData.feesPaidTillDate,
          receipt: response.newFileName,
        });
        console.log(res)
        if (res.code == 200 || res.code == 201) {
          toast.success("Reciept send seccessfuly");
          e.target.reset()
        } else {
          toast.error(res.message);
        }
      }else{
        toast.error(response.message)
      }
    } else {
      toast.error("Enter Required Fields");
    }
    setIsDisabled(false)
  };

  return (
    <form
      className={Styles.admissionForm}
      id="admissionForm"
      onSubmit={handleSubmit}
    >
      {["name", "fatherName", "rollNo", "email"].map((field) => (
        <div className={Styles.field} key={field}>
          <label htmlFor={field}>
            {field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}{" "}
            *:
          </label>
          <input
            disabled={field == "email"}
            
            type="text"
            id={field}
            value={formData[field]}
            onChange={handleChange}
          />
          {errors[field] && (
            <span className={Styles.error}>{errors[field]}</span>
          )}
        </div>
      ))}
      <div className={Styles.field}>
        <label htmlFor="branch">Branch *:</label>
        <select id="branch" value={formData.branch} onChange={handleChange}>
          <option value="">Choose</option>
          <option value="BTECH">BTECH</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="MCA">MCA</option>
          <option value="MTECH">MTECH</option>
          <option value="MBA">MBA</option>
        </select>
        {errors.branch && <span className={Styles.error}>{errors.branch}</span>}
      </div>
      <div className={Styles.field}>
        <label htmlFor="year">Year *:</label>
        <select id="year" value={formData.year} onChange={handleChange}>
          <option value="">Choose</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
        </select>
        {errors.year && <span className={Styles.error}>{errors.year}</span>}
      </div>
      {["mobileNo", "whatsappNo", "totalFees", "feesPaidTillDate"].map(
        (field) => (
          <div className={Styles.field} key={field}>
            <label htmlFor={field}>
              {field
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}{" "}
              *:
            </label>
            <input
              type="text"
              id={field}
              value={formData[field]}
              onChange={handleChange}
              pattern="^[0-9]+$"
            />
            {errors[field] && (
              <span className={Styles.error}>{errors[field]}</span>
            )}
          </div>
        )
      )}
      <div className={Styles.field}>
        <label htmlFor="receipt">Upload receipt of fees paid *:</label>
        <input type="file" id="receipt" onChange={handleFileChange} />
        {errors.receipt && (
          <span className={Styles.error}>{errors.receipt}</span>
        )}
      </div>
      <button disabled={isDisabled} type="submit" className={Styles.submitButton}>
        {isDisabled?"Sending...":"Submit"}
      </button>
    </form>
  );
}
