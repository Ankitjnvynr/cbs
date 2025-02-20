"use client";

import React, { useState } from "react";
import { TextField, Button, Box, Grid, Paper, Typography, Input } from "@mui/material";
import { styled } from "@mui/material/styles";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const UploadBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #ccc",
  padding: theme.spacing(2),
  textAlign: "center",
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius,
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFeatureImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const blogData = { title, content, tags, seoDescription, metaDescription, slug, metaKeywords, featureImage };
    console.log(blogData);
  };

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Main Content (Title & Editor) */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 3 }}>
          <TextField
            fullWidth
            label="Blog Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <ReactQuill value={content} onChange={setContent} theme="snow" style={{ height: "300px" }} />
        </Paper>
      </Grid>

      {/* Sidebar for SEO and Feature Image */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Feature Image</Typography>
          <UploadBox onClick={() => document.getElementById("fileInput").click()}>
            {featureImage ? <img src={featureImage} alt="Feature" width="100%" /> : "Click to upload an image"}
          </UploadBox>
          <Input type="file" id="fileInput" onChange={handleImageUpload} sx={{ display: "none" }} />

          <TextField fullWidth label="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} sx={{ marginTop: 2 }} />
          <TextField fullWidth label="SEO Description" multiline rows={3} value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} sx={{ marginTop: 2 }} />
          <TextField fullWidth label="Meta Description" multiline rows={2} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} sx={{ marginTop: 2 }} />
          <TextField fullWidth label="Slug (URL)" value={slug} onChange={(e) => setSlug(e.target.value)} sx={{ marginTop: 2 }} />
          <TextField fullWidth label="Meta Keywords (comma-separated)" value={metaKeywords} onChange={(e) => setMetaKeywords(e.target.value)} sx={{ marginTop: 2 }} />

          <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 3 }} onClick={handleSubmit}>
            Save Blog
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BlogEditor;
