"use client";

import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
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

export default function BlogEditor() {
  return (
    <div>BlogEditor</div>
  )
}

