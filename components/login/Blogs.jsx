import React, { useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import BlogsList from "./parts/BlogsList";
import { Button } from "@mui/material";
import BlogEditor from "./parts/BlogEditor";

export default function Blogs() {
  const [isLoading, setIsLoading] = useState();
  const [blogs, setBlogs] = useState([]);
  const [filters, setFilters] = useState({});
  const [isBlogsList, setIsblogList] = useState(true);

  return (
    <LoginLayout>
      <div>
        <Button onClick={() => setIsblogList(false)}>Add new</Button>
      </div>
      {isBlogsList ? <BlogsList rows={blogs} /> : <BlogEditor />}
    </LoginLayout>
  );
}
