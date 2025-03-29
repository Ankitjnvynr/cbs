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

    const [blogs,setBlogs]=useState([])
  const [filters, setFilters] = useState({
        slug:"",
        category:"",
        keyword:"",
        status:"",
        page:1,
        limit:10,
  });

    const getBlogs = async ()=>{
        const res = await blogService.getBlogs(filters)
        console.log(res)
        if(res.code==200){
            setBlogs(res.data)
        }
    }

    useEffect(() => {
        getBlogs()
        
    }, []);




    return (

        <section className="blog-section section-padding">
            <div className="container">
                
                <div className="row">
                    {blogs.map((blog, bkye) => (
                        <div  className="col col-lg-4 col-md-6 col-12" key={bkye}>
                            <div  className="blog-card ">
                                <div className="image">
                                    <Image style={{aspectRatio:16/9}} width={300} height={200} src={`${conf.apiBaseUri}/uploads/${blog.featured_image}`} alt="" />
                                    <span>{blog.categories}</span>
                                </div>
                                <div className="content">
                                    <ul className="date">
                                        <li>{blog.created_at}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} href={`blog?s=/${blog.slug}`} as={`blog?s=${blog.slug}`}>{blog.title}</Link></h2>
                                    <div className="link">
                                        <Link onClick={ClickHandler} href={`blog?s=/${blog.slug}`} as={`blog?s=${blog.slug}`}><span>Read more</span>
                                            <i className="ti-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}

export default BlogSection;










