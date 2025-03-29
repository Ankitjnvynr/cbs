import React, {Fragment, useEffect, useState} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus.js';
import BlogSection from '../../components/BlogSection/BlogSectionFull.js';

const BlogPage =() => {
    const [slug,setSlug]=useState("")
    // const slug = new URLSearchParams(window.location.search).get('s');
    useEffect(() => {
        
        const s = new URLSearchParams(window.location.search).get('s')
        setSlug(s)

    }, []);

    

    return(
        <Fragment>
           <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Latest News And Blogs'} pagesub={'Blog'}/> 
            <BlogSection/>
            
            {/* <BlogList/> */}
            <Footer />
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default BlogPage;

