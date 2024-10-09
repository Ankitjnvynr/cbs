import React from "react";
import Link from "next/link";
import blogs from '../../api/blogs'
import SectionTitle from "../SectionTitle/SectionTitle";
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {




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
                                    <Image src={blog.screens} alt="" />
                                    <span>{blog.catagory}</span>
                                </div>
                                <div className="content">
                                    <ul className="date">
                                        <li>{blog.create_at}</li>
                                        <li>{blog.name}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/${blog.slug}`}>{blog.title}</Link></h2>
                                    <div className="link">
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/${blog.slug}`}><span>Check Result</span>
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










