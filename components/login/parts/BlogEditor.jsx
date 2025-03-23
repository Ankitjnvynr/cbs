"use client";

import React, { useState } from "react";
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

const styles = {
  container: { display: "flex", flexDirection: "row-reverse", gap: "10px",  justifyContent: "center" },
  editorContainer: { flex: 1, padding: "20px", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  sidebar: { width: "300px", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  quillEditor: { height: "70%", borderRadius: "10px" },
  uploadBox: { border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", borderRadius: "10px", backgroundColor: "#fff", transition: "0.3s" },
};

const UploadBox = styled(Box)(({ theme }) => ({
  ...styles.uploadBox,
  "&:hover": { borderColor: "#007bff", backgroundColor: "#f0f8ff" },
}));

const BlogEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    author_bio: "",
    status: "draft",
    keywords: "",
    categories: "",
    meta_description: "",
    meta_title: "",
    reading_time: "",
    is_featured: false,
    canonical_url: "",
    featureImage: null,
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      const response = await axios.post("YOUR_API_UPLOAD_ENDPOINT", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.newfilename) {
        setUploadedFileName(response.data.newfilename);
        setFormData({ ...formData, featureImage: response.data.fileUrl });
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("YOUR_API_BLOG_CREATE_ENDPOINT", formData);
      console.log("Blog saved:", response.data);
    } catch (error) {
      console.error("Failed to save blog:", error);
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
          {formData.featureImage && <img src={formData.featureImage} alt="Feature" style={{ marginTop: "10px", width: "100%" }} />}
        </UploadBox>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }} onClick={handleSubmit}>Save Blog</Button>
      </Box>
      <Box sx={styles.editorContainer}>
      <TextField size="small" label="Title" name="title" value={formData.title} onChange={handleChange} fullWidth sx={{ marginBottom: "10px" }} />

        <Typography variant="h6">Blog Content</Typography>

        <ReactQuill value={formData.content} onChange={(value) => setFormData({ ...formData, content: value })} style={styles.quillEditor} />
      </Box>
    </Box>
  );
};

export default BlogEditor;
