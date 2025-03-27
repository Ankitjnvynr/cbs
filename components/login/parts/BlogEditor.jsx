"use client";

import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  CircularProgress,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill").then((mod) => mod.default), { ssr: false });
import "react-quill/dist/quill.snow.css";

import   uploadService  from "../../../services/uploaService"
import blogService from "../../../services/BlogService";
import conf from "../../../lib/conf";
import { toast } from "react-toastify";



const styles = {
  container: { display: "flex", flexDirection: "row-reverse", gap: "10px",  justifyContent: "center" },
  editorContainer: { flex: 1, padding: "20px", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  sidebar: { width: "300px", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  quillEditor: { height: "70%",  borderRadius: "10px" , maxHeight:"60vh" },
  uploadBox: { border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", borderRadius: "10px", backgroundColor: "#fff", transition: "0.3s" },
};

const UploadBox = styled(Box)(({ theme }) => ({
  ...styles.uploadBox,
  "&:hover": { borderColor: "#007bff", backgroundColor: "#f0f8ff" },
}));

const BlogEditor = ({updateBlog,setUpdateBlog,getBlogs,setIsblogList}) => {
  const [formData, setFormData] = useState({
    title: "",
    slug:"",
    content: "",
    author: "CBS Group",
    author_bio: "",
    status: "draft",
    keywords: "",
    categories: "",
    meta_description: "",
    meta_title: "",
    reading_time: "",
    is_featured: false,
    canonical_url: "",
    featured_image: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isUpdating,setIsUpdating] = useState(false)

  useEffect (()=>{
    if(updateBlog){
      setFormData(updateBlog)
      setIsUpdating(true)
      console.log(formData)
    }
  },[])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prevFormData) => {
      const updatedData = { 
        ...prevFormData, 
        [name]: type === "checkbox" ? checked : value 
      };
  
      // If the title is being updated, update the slug as well
      if (name === "title") {
        updatedData.slug = value.toLowerCase().replace(/\s+/g, "-"); // Convert to a URL-friendly slug
      }
      console.table(formData)
  
      return updatedData;
    });
  
    console.table(formData); // Note: React state updates are asynchronous; this may log outdated data
  };
  

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
   

    try {
      setIsUploading(true);
      const response = await uploadService.upload(file,formData.featured_image)
      console.log(response)      

      if (response.newFileName) {
        setUploadedFileName(`${conf.apiBaseUri}/uploads/${response.newFileName}`);
        setFormData({ ...formData, featured_image: response.newFileName });
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {

      console.table(formData)
       

      const response = isUpdating ? await blogService.updateBlog(formData) :await blogService.createBlog(formData)
      console.log("Blog saved:", response);
      if(response.code == 201 || response.code == 200){
        toast.success("blog saved successfully!")
        getBlogs()
        setUpdateBlog(null)
        setIsblogList(true)

      }else{
        if(response.code == 404){
          toast.error(response.message)
        }else{

        }
      }
    } catch (error) {
      
      console.log("Failed to save blog:", error);
      toast.error(error.message)
    }
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.sidebar}>
        <Typography variant="h6">Blog Settings</Typography>
        <TextField size="small" label="Keywords" name="keywords" value={formData.keywords} onChange={handleChange} fullWidth sx={{ marginBottom: "10px" }} />
        <TextField size="small" label="Categories" name="categories" value={formData.categories} onChange={handleChange} fullWidth sx={{ marginBottom: "10px" }} />
        <TextField size="small" label="Meta Description" name="meta_description" value={formData.meta_description} onChange={handleChange} fullWidth sx={{ marginBottom: "10px" }} multiline rows={2} />
         <TextField size="small" select label="Status" name="status" value={formData.status} onChange={handleChange} fullWidth sx={{ marginBottom: "10px" }}>
          <MenuItem value="draft">Draft</MenuItem>
          <MenuItem value="published">Published</MenuItem>
          <MenuItem value="archived">Archived</MenuItem>
        </TextField>
        <FormControlLabel control={<Checkbox name="is_featured" checked={formData.is_featured} onChange={handleChange} />} label="Featured" />
        <UploadBox>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} id="file-upload" />
          <label htmlFor="file-upload">{isUploading ? <CircularProgress size={24} /> : "Upload Feature Image"}</label>
          {formData.featured_image && <img src={`${conf.apiBaseUri}/uploads/${formData.featured_image}`} alt="Feature" style={{ marginTop: "10px", width: "100%" }} />}
        </UploadBox>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }} onClick={handleSubmit}>Save Blog</Button>
        <Button variant="contained" disabled color="primary" fullWidth sx={{ marginTop: "20px" }} onClick={handleSubmit}>Save Blog</Button>
      </Box>
      <Box sx={styles.editorContainer}>
      <TextField size="small" label="Title" name="title" value={formData.title} onChange={handleChange} fullWidth sx={{ marginBottom: "1px" }} />
        <Typography >Slug: {formData.slug}</Typography>
        <Typography variant="h6">Blog Content</Typography>

        <ReactQuill value={formData.content} onChange={(value) => setFormData({ ...formData, content: value })} style={styles.quillEditor} />
      </Box>
    </Box>
  );
};

export default BlogEditor;
