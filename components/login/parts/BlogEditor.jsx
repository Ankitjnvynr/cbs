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
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

const ReactQuill = dynamic(() => import("react-quill").then((mod) => mod.default), { ssr: false });
import "react-quill/dist/quill.snow.css";

import uploadService from "../../../services/uploaService";
import blogService from "../../../services/BlogService";
import conf from "../../../lib/conf";
import Image from "next/image";

const styles = {
  container: { display: "flex", flexDirection: "row-reverse", gap: "10px", justifyContent: "center" },
  editorContainer: { flex: 1, padding: "20px", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  sidebar: { width: "300px", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },
  quillEditor: { height: "70%", borderRadius: "10px", maxHeight: "60vh" },
  uploadBox: { border: "2px dashed #ccc", padding: "20px", textAlign: "center", cursor: "pointer", borderRadius: "10px", backgroundColor: "#fff", transition: "0.3s" },
};

const UploadBox = styled(Box)(({ theme }) => ({
  ...styles.uploadBox,
  "&:hover": { borderColor: "#007bff", backgroundColor: "#f0f8ff" },
}));

const BlogEditor = ({ updateBlog, setUpdateBlog, getBlogs, setIsblogList }) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
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
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSaveBtn, setIsSaveBtn] = useState(false);
  const [slugExists, setSlugExists] = useState(false);
  const [initialSlug, setInitialSlug] = useState("");

  useEffect(() => {
    if (updateBlog) {
      setFormData({
        ...updateBlog,
        content: decodeHtmlEntities(updateBlog.content),
      });
      setInitialSlug(updateBlog.slug);
      setIsUpdating(true);
    }
  }, [updateBlog]);

    const decodeHtmlEntities = (text) => {
      const txt = document.createElement("textarea");
      txt.innerHTML = text;
      return txt.value;
    };

  const checkSlugAvailability = async (slug) => {
    if (slug === initialSlug) {
      setSlugExists(false);
      setIsSaveBtn(true);
      return;
    }
    try {
      const res = await blogService.getBlogBySlug(slug);
      if (res.code !== 404) {
        setSlugExists(true);
        setIsSaveBtn(false);
      } else {
        setSlugExists(false);
        setIsSaveBtn(true);
      }
    } catch (error) {
      console.log("Error checking slug:", error);
      setSlugExists(false);
      setIsSaveBtn(true);
    }
  };

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setIsSaveBtn(true);
    setFormData((prevFormData) => {
      const updatedData = { 
        ...prevFormData, 
        [name]: type === "checkbox" ? checked : value 
      };

      if (name === "title") {
        const newSlug = value.toLowerCase().replace(/\s+/g, "-");
        updatedData.slug = newSlug;
        checkSlugAvailability(newSlug);
      }

      return updatedData;
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const response = await uploadService.upload(file, formData.featured_image);

      if (response.newFileName) {
        setFormData({ ...formData, featured_image: response.newFileName });
        setIsSaveBtn(true);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.content || !formData.featured_image) {
      toast.error("Title, Content, and Feature Image are required.");
      return;
    }

    try {
      const response = isUpdating ? await blogService.updateBlog(formData) : await blogService.createBlog(formData);

      if (response.code === 201 || response.code === 200) {
        toast.success("Blog saved successfully!");
        getBlogs();
        setUpdateBlog(null);
        setIsblogList(true);
      } else {
        if (response.code === 404) {
          toast.error(response.message);
        }
      }
    } catch (error) {
      console.log("Failed to save blog:", error);
      toast.error(error.message);
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
        <label style={{width:'100%'}} htmlFor="file-upload">
        <UploadBox>
          <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} id="file-upload" />
          {isUploading ? <CircularProgress size={24} /> : "Upload Feature Image"}
        <Image style={{width:"100%"}} width={200} height={100} src={`${conf.apiBaseUri}/uploads/${formData.featured_image}`} />
        </UploadBox>
        </label>
        <Button variant="contained" color="primary" fullWidth sx={{ marginTop: "20px" }} onClick={handleSubmit} disabled={!isSaveBtn || slugExists}>
          Save Blog
        </Button>
      </Box>
      <Box sx={styles.editorContainer}>
        <TextField required size="small" label="Title" name="title" value={formData.title} onChange={handleChange} fullWidth sx={{ marginBottom: "1px" }} />
        <Typography sx={{ color: slugExists ? "red" : "black" }}>Slug: {formData.slug}</Typography>
        {slugExists && <Typography color="red">This slug is already taken.</Typography>}
        <Typography variant="h6">Blog Content</Typography>
        <ReactQuill value={formData.content} onChange={(value) => {
          setFormData({ ...formData, content: value })
          setIsSaveBtn(true)
        }
          } style={styles.quillEditor} />
      </Box>
    </Box>
  );
};

export default BlogEditor;
