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
  const [updateBlog,setUpdateBlog] = useState(null);


const getBlogs = async ()=>{
  try {
    setIsLoading(true)
    const response = await blogService.getBlogs(filters);
    console.log("blogs:", response);
    setBlogs(response.data)
    setIsLoading(false)
  } catch (error) {
    console.log("Error fetching blogs:", error);
    setIsLoading(false)
  }
}

  useEffect(()=>{
    setIsLoading(true)
    getBlogs()    
  },[])

  const blogEditor = (blog=null) =>{
    setIsblogList(false)
  }

  return (
    <LoginLayout>
      <div>
        {
          isBlogsList?<Button onClick={() => blogEditor}>Add new</Button>:<Button onClick={() => setIsblogList(true)}>All blogs</Button>
        }
        
        
      </div>
      {isBlogsList ? isLoading?"loading...":<BlogsList blogEditor={blogEditor} setUpdateBlog={setUpdateBlog} rows={blogs} /> : <BlogEditor updateBlog = {updateBlog} />}
    </LoginLayout>
  );
}
