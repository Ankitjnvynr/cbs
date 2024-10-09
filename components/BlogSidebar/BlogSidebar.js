import React from 'react';
import Link from 'next/link'
import about from '/public/images/blog-details/author.jpg'
import blogs from '../../api/blogs'


import inst1 from "/public/images/instragram/img-1.jpg";
import inst2 from "/public/images/instragram/img-2.jpg";
import inst3 from "/public/images/instragram/img-3.jpg";
import inst4 from "/public/images/instragram/img-4.jpg";
import inst5 from "/public/images/instragram/img-5.jpg";
import inst6 from "/public/images/instragram/img-6.jpg";
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={about} alt="" />
                    </div>
                    <h4>Bernard Rodgers</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <ul>
                            <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Business<span>5</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Design<span>7</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Development<span>3</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Management<span>2</span></Link></li>
                            <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Software<span>8</span></Link></li>
                        </ul>
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.recent} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"><Image src={inst1}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"><Image src={inst2}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"><Image src={inst3}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"><Image src={inst4}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"><Image src={inst5}
                            alt="" /></Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"><Image src={inst6}
                            alt="" /></Link></li>
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Learning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Course</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Business</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Education</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Online</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Technology</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Design</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation">Development</Link></li>
                        <li><Link onClick={ClickHandler} href="/blog-single/15-Secrets-Of-Digital-Transformation"> Business</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
