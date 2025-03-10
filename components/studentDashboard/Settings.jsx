import React, { useState, useEffect } from "react";
import Styles from "./settings.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import authService from "../../services/auth";
import uploadService from "../../services/uploaService";
import { toast } from "react-toastify";

export default function Settings() {
  const [userData, setUserData] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    role: "",
    father_name: "",
    mother_name: "",
    course_name: "",
    dob: "",
    country: "",
    state: "",
    district: "",
    address: "",
    picture: "",
  });

  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await sessionStorage.getItem("user");
      const userData = JSON.parse(user);
      setUserId(userData.id);
      const response = await authService.getMyProfile(userData.id);

      setUserData({
        name: response.data.first_name || "",
        last_name: response.data.last_name || "",
        phone: response.data.phone || "",
        email: response.data.email || "",
        role: response.data.role || "",
        father_name: response.data.father_name || "",
        mother_name: response.data.mother_name || "",
        course_name: response.data.course_name || "",
        dob: response.data.dob || "",
        country: response.data.country || "",
        state: response.data.state || "",
        district: response.data.district || "",
        address: response.data.address || "",
        picture: response.data.picture || "",
      });
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const updateData = async () => {
    const response = await authService.updateMyProfile(
      userId,
      userData.name,
      userData.last_name,
      userData.phone,
      userData.dob,
      userData.father_name,
      userData.mother_name,
      userData.course_name,
      userData.country,
      userData.state,
      userData.district,
      userData.address,
      userData.picture
    );

    if (response.code === 200 || response.code === 201) {
      toast.success("Profile Updated Successfully");
      setIsEditing(false);
    } else {
      toast.error("Failed to Update Profile");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateData();
  };

  const uploadProfilePic = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;

      const response = await uploadService.upload(file, userData.picture);

      if (response.code === 200) {
        const newPicture = response.newFileName;

        setUserData((prevState) => ({
          ...prevState,
          picture: newPicture,
        }));

        await authService.updateMyProfile(
          userId,
          userData.name,
          userData.last_name,
          userData.phone,
          userData.dob,
          userData.father_name,
          userData.mother_name,
          userData.course_name,
          userData.country,
          userData.state,
          userData.district,
          userData.address,
          newPicture
        );

        toast.success("Profile picture updated successfully");
      } else if (response.code == 415) {
        toast.error("Please upload jpg, png");
        e.target.value = "";
      }
    } catch (error) {
      console.error("Error uploading profile picture:", error);
      toast.error("Error uploading profile picture");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div
      style={{ height: "100%", display: "flex", flexWrap: "wrap" }}
      className="border overflow-y-auto"
    >
      <div className={Styles.picture}>
        <Image
          className={Styles.picc}
          src={
            userData.picture
              ? `https://cbsdelhi.in/uploads/${userData.picture}`
              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          width={70}
          height={70}
          alt="Profile Picture"
        />
        <input
          type="file"
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
          id="upload-profile-pic"
          onChange={uploadProfilePic}
        />
        <label htmlFor="upload-profile-pic">
          <Button variant="outlined" component="span">
            Change Picture
          </Button>
        </label>
      </div>
      <div className={Styles.details}>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <div className={Styles.item}>
            <label className={Styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label className={Styles.label}>Last Name:</label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label className={Styles.label}>Father's Name:</label>
            <input
              type="text"
              name="father_name"
              value={userData.father_name}
              onChange={handleChange}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label className={Styles.label}>Mother's Name:</label>
            <input
              type="text"
              name="mother_name"
              value={userData.mother_name}
              onChange={handleChange}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label className={Styles.label}>Course:</label>
            <input
              type="text"
              name="course_name"
              value={userData.course_name}
              onChange={handleChange}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label className={Styles.label}>DOB:</label>
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>

          {isEditing ? (
            <Button type="submit" variant="contained" color="primary" className={`${Styles.saveButton} mt-2`}>
              Save Profile
            </Button>
          ) : (
            <button
              type="button"
              onClick={handleEditClick}
              className={Styles.editButton}
            >
              Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}