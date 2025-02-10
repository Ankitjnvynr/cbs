import React, { useState, useEffect } from "react";
import Styles from "./settings.module.css";
import Image from "next/image";
import { Button } from "@mui/material";
import authService from "../../services/auth";
import { toast } from "react-toastify";

export default function Settings() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    last_name: "",
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
        name: response.data.first_name,
        phone: response.data.phone,
        email: response.data.email,
        role: response.data.role,
        last_name: response.data.last_name,
        dob: response.data.dob,
        country: response.data.country,
        state: response.data.state,
        district: response.data.district,
        address: response.data.address,
        picture: response.data.picture,
      });
      console.log(response);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authService.updateMyProfile(
      userId,
      userData.name,
      userData.last_name,
      userData.phone,
      userData.dob,
      userData.country,
      userData.state,
      userData.district,
      userData.address,
      userData.picture
    );

    console.log(response);
    if (response.code === 200 || response.code === 201) {
      toast.success("Profile Updated Successfuly");
      setIsEditing(false);
    }else{
        toast.error("Failed to Update Profile");
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
            userData.picture != null
              ? `${userData?.picture}`
              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          width={70}
          height={70}
          alt="Profile Picture"
        />
        <Button variant="outlined">Change Picture</Button>
      </div>
      <div className={Styles.details}>
        <form onSubmit={handleSubmit} className={Styles.form}>
          <div className={Styles.item}>
            <label htmlFor="name" className={Styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="last_name" className={Styles.label}>
              Last Name:
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={userData.last_name}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="phone" className={Styles.label}>
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="email" className={Styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              disabled
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="dob" className={Styles.label}>
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="country" className={Styles.label}>
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={userData.country}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="state" className={Styles.label}>
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={userData.state}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="district" className={Styles.label}>
              District:
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={userData.district}
              onChange={handleChange}
               
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>
          <div className={Styles.item}>
            <label htmlFor="address" className={Styles.label}>
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
               
              rows={3}
              disabled={!isEditing}
              className={Styles.input}
            />
          </div>

          {isEditing ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={Styles.saveButton}
            >
              Save Profile
            </Button>
          ) : (
            <button
            style={{
              backgroundColor: 'none',
             border:'none',
              borderRadius:'5px',
              padding:'5px 15px',
            }}
              type="button"
              variant="contained"
              color="primary"
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
