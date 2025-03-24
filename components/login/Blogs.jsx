import React, { useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import BlogsList from "./parts/BlogsList";
import { Button } from "@mui/material";
import BlogEditor from "./parts/BlogEditor";
import { useEffect } from "react";
import blogService from "../../services/BlogService";

export default function Blogs() {
  const [isLoading, setIsLoading] = useState();
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState({
        slug:"",
        category:"",
        keyword:"",
        status:"",
        page:1,
        limit:10,
  });
  const [isBlogsList, setIsblogList] = useState(true);


const getBlogs = async ()=>{
  try {
    const response = await blogService.getBlogs(filters);
    console.log("blogs:", response);
    setBlogs(response.data)
  } catch (error) {
    console.log("Error fetching blogs:", error);
  }
}

  useEffect(()=>{
    setIsLoading(true)
    getBlogs()    
  },[])

  return (
    <LoginLayout>
      <div>
        <Button onClick={() => setIsblogList(false)}>Add new</Button>
      </div>
      {isBlogsList ? <BlogsList rows={blogs} /> : <BlogEditor />}
    </LoginLayout>
  );
}
