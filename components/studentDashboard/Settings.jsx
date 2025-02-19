import React, { useState, useEffect } from 'react';
import Styles from './settings.module.css';
import Image from 'next/image';
import { Button } from '@mui/material';
import authService from '../../services/auth';
import uploadService from '../../services/uploaService';
import { toast } from 'react-toastify';

export default function Settings() {
  const [userData, setUserData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    last_name: '',
    dob: '',
    country: '',
    state: '',
    district: '',
    address: '',
    picture: '',
  });

  const [userId, setUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await sessionStorage.getItem('user');
      const userData = JSON.parse(user);
      setUserId(userData.id);
      const response = await authService.getMyProfile(userData.id);
      setUserData({
        name: response.data.first_name,
        phone: response.data.phone,
        email: userData.email,
        role: response.data.role,
        last_name: response.data.last_name,
        dob: response.data.dob,
        country: response.data.country,
        state: response.data.state,
        district: response.data.district,
        address: response.data.address,
        picture: response.data.picture,
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
      userData.country,
      userData.state,
      userData.district,
      userData.address,
      userData.picture
    );

    if (response.code === 200 || response.code === 201) {
      toast.success('Profile Updated Successfully');
      setIsEditing(false);
    } else {
      toast.error('Failed to Update Profile');
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

        // Update state with new picture
        setUserData((prevState) => ({
          ...prevState,
          picture: newPicture,
        }));

        // Update profile with the new picture immediately
        await authService.updateMyProfile(
          userId,
          userData.name,
          userData.last_name,
          userData.phone,
          userData.dob,
          userData.country,
          userData.state,
          userData.district,
          userData.address,
          newPicture // Send new picture filename
        );

        toast.success("Profile picture updated successfully");
      } else if(response.code==415) {
        toast.error("please upload jpg, png");
        e.target.value = ''
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
    <div style={{ height: '100%', display: 'flex', flexWrap: 'wrap' }} className="border overflow-y-auto">
      <div className={Styles.picture}>
        <Image
          className={Styles.picc}
          src={
            userData.picture
              ? `https://cbsdelhi.in/uploads/${userData?.picture}`
              : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'
          }
          width={70}
          height={70}
          alt="Profile Picture"
        />
        <input
          type="file"
          accept="image/jpeg, image/png"
          style={{ display: 'none' }}
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
              Father:
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
              DOB:
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

          {isEditing ? (
            <Button  type="submit" variant="contained" color="primary" className={`${Styles.saveButton} mt-2`}>
              Save Profile
            </Button>
          ) : (
            <button
              style={{
                backgroundColor: 'none',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 15px',
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
