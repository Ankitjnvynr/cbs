"use client";

import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// Styles
const styles = {
  container: { display: "flex", flexDirection: "row", gap: "20px", padding: "30px", justifyContent: "center" },
  editorContainer: { flex: 1, padding: "20px", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  sidebar: { width: "300px", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  quillEditor: { height: "300px", borderRadius: "10px" },
  uploadBox: { border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", borderRadius: "10px", backgroundColor: "#fff", transition: "0.3s" },
};

// Styled Upload Box
const UploadBox = styled(Box)(({ theme }) => ({
  ...styles.uploadBox,
  "&:hover": { borderColor: "#007bff", backgroundColor: "#f0f8ff" },
}));

const BlogEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [featureImage, setFeatureImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  // Image Upload Function
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
        setFeatureImage(URL.createObjectURL(file));
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  // Save/Update Blog Function
  const handleSaveBlog = async () => {
    const blogData = { title, content, tags, seoDescription, metaDescription, slug, metaKeywords, featureImage: uploadedFileName };

    try {
      const response = await axios.post("YOUR_API_BLOG_SAVE_ENDPOINT", blogData);
      console.log("Blog saved:", response.data);
    } catch (error) {
      console.error("Error saving blog:", error);
    }
  };

  return (
    <Box sx={styles.container}>
      {/* Blog Title & Editor */}
      <Paper sx={styles.editorContainer}>
        <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: "bold", color: "#333" }}>
          Create New Blog
        </Typography>
        <TextField fullWidth label="Blog Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} sx={{ marginBottom: 2 }} />
        <ReactQuill value={content} onChange={setContent} theme="snow" style={styles.quillEditor} />
      </Paper>

      {/* Sidebar Section */}
      <Paper sx={styles.sidebar}>
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>Feature Image</Typography>
        <UploadBox onClick={() => document.getElementById("fileInput").click()}>
          {isUploading ? (
            <CircularProgress />
          ) : featureImage ? (
            <img src={featureImage} alt="Feature" width="100%" style={{ borderRadius: "10px" }} />
          ) : (
            "Click to upload an image"
          )}
        </UploadBox>
        <input type="file" id="fileInput" onChange={handleImageUpload} style={{ display: "none" }} />

        <TextField fullWidth label="Tags" value={tags} onChange={(e) => setTags(e.target.value)} sx={{ marginTop: 2 }} />
        <TextField fullWidth label="SEO Description" multiline rows={2} value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} sx={{ marginTop: 2 }} />
        <TextField fullWidth label="Meta Description" multiline rows={2} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} sx={{ marginTop: 2 }} />
        <TextField fullWidth label="Slug (URL)" value={slug} onChange={(e) => setSlug(e.target.value)} sx={{ marginTop: 2 }} />
        <TextField fullWidth label="Meta Keywords" value={metaKeywords} onChange={(e) => setMetaKeywords(e.target.value)} sx={{ marginTop: 2 }} />

        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 3, borderRadius: "8px" }} onClick={handleSaveBlog}>
          Save Blog
        </Button>
      </Paper>
    </Box>
  );
};

export default BlogEditor;
