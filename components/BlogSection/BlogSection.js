import React, { useEffect, useState } from "react";
import Link from "next/link";
import blogs from './blogs'
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";
import blogService from "../../services/BlogService";
import conf from "../../lib/conf";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {
    const [loading, setLoading] = React.useState(true);
    const [blogs, setBlogs] = React.useState([]);
    const [filters, setFilters] = useState({
        slug:"",
        category:"",
        keyword:"",
        status:"published",
        page:1,
        limit:3,
  });
    

    const getblogs = async ()=>{
        const response = await blogService.getBlogs(filters)
        console.log("res from blogs",response)
        if(response.code === 200){
            setBlogs(response.data)
        }
    }

    useEffect(()=>{
        getblogs()
    },[])




    return (

        <section className="blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <SectionTitle subtitle="-----------" title="Our Latest News" />
                    </div>
                </div>
                <div className="row">
                    {blogs.map((blog, bkye) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card">
                                <div className="image">
                                    <Image width={300} height={200} src={`${conf.apiBaseUri}/uploads/${blog.featured_image}`} alt="" />
                                    <span>{blog.categories}</span>
                                </div>
                                <div className="content">
                                    <ul className="date">
                                        <li>{blog.created_at}</li>
                                        <li>{blog.categories}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} href={`/blog?s=${blog.slug}`} as={`/blog?s=${blog.slug}`}>{blog.title}</Link></h2>
                                    <div className="link">
                                        <Link onClick={ClickHandler} href={`/blog?s=${blog.slug}`} as={`/blog?s=${blog.slug}`}><span>Read more</span>
                                            <i className="ti-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                <div style={{textAlign:'center'}}>
                <Link onClick={ClickHandler} href={`/blogs`} as={`/blogs`}> <h4><span>View All</span>
                <i className="ti-arrow-right"></i></h4></Link>
                </div>
                </div>
            </div>
        </section>

    );
}

export default BlogSection;










