import React, { useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import BlogsList from "./parts/BlogsList";
import { Button, Pagination, TextField } from "@mui/material";
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
  const [totalPages,setTotalPages] = useState(1)
  const [pagination,setPagination]= useState({})

  const handlePageChange = (event, value) => {
    setFilters({
      ...filters,
      page: value,
    });
  };


const getBlogs = async ()=>{
  try {
    setIsLoading(true)
    const response = await blogService.getBlogs(filters);
    console.log("blogs:", response);
    setBlogs(response.data)
    setIsLoading(false)
    setTotalPages(response.pagination.total_pages)
    setPagination(response.pagination)
  } catch (error) {
    console.log("Error fetching blogs:", error);
    setIsLoading(false)
  }
}

  useEffect(()=>{
    setIsLoading(true)
    getBlogs()    
  },[filters])

  const blogEditor = (blog=null) =>{
    setIsblogList(false)
    console.log("hii")
  }

  return (
    <LoginLayout>
      <div>
        {
          isBlogsList?<Button onClick={() => {
            setIsblogList(false)
            setUpdateBlog(null)
          }}>Add new</Button>:<Button onClick={() => setIsblogList(true)}>All blogs</Button>
        }

        <TextField variant="standard"  placeholder="serach ..." size="small" />
        
        
      </div>
      {isBlogsList ? isLoading?"loading...":<BlogsList blogEditor={blogEditor} setUpdateBlog={setUpdateBlog} rows={blogs} /> : <BlogEditor setUpdateBlog={setUpdateBlog} setIsblogList={setIsblogList} getBlogs={getBlogs} updateBlog = {updateBlog} />}
    
 {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={filters.page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    
    </LoginLayout>
  );
}
