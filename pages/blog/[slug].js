import React, {Fragment, useEffect, useState} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import { useRouter } from 'next/router'
import blogService from '../../services/BlogService.js';


const BlogPage =() => {
    const [blog,setBlog]=useState(null)
    const router = useRouter()
    
    
    const getBlog = async (slug)=>{
        try {
            const res = await blogService.getBlogBySlug(slug)
            console.log(res)
            if(res.code==200){
                setBlog(res.data)
            }

        } catch (error) {
            
        }
    }

    useEffect(()=>{
        const s = router.query.slug
        getBlog(s)
    },[])




    return(
        <Fragment>
           <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={blog?.title} pagesub={'Blog'}/> 
            <button onClick={()=>{console.log(blog)}} >consle</button>
            <p>Post: {router.query.slug}</p>
            <BlogList/>
            <Footer />
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default BlogPage;

