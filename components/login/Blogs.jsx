import React, { useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import BlogsList from "./parts/BlogsList";
import { Button } from "@mui/material";

export default function Blogs() {
  const [isLoading, setIsLoading] = useState();
  const [blogs, setBlogs] = useState([]);
  const [ filters,setFilters] = useState({})

  return (
    <LoginLayout>
      <div>
        <Button>Add new</Button>
      </div>
      <BlogsList rows={blogs} />
    </LoginLayout>
  );
}
