import React, {Fragment, useEffect, useState} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import blogService from '../../services/BlogService.js';
import Error from '../../components/404/404.js';

const BlogPage =() => {
    const [slug,setSlug]=useState("")
    // const slug = new URLSearchParams(window.location.search).get('s');
    

    const [isBlog,setIsBlog]=useState(false)

    const [blog,setBlog]=useState()
        
        const getBlog = async (slug)=>{
            const response = await blogService.getBlogBySlug(slug)
            console.log(response)
            if(response.code == 200){
                setBlog(response.data)
                setIsBlog(true)
                
            }
        }
    

        useEffect(() => {
        
            const s = new URLSearchParams(window.location.search).get('s')
            setSlug(s)
            getBlog(s)
    
        }, []);
   

    

    return(
        <Fragment>
           <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={isBlog?blog.title:"404"} pagesub={'Blog'}/> 
            {/* <p>{}</p> */}
            {/* <button onClick={()=>{console.log(slug)}} >get the params</button> */}
            {/* <BlogList/> */}
            {
                isBlog?<BlogList blog = {blog} blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>:<Error/>
            }
            
            <Footer />
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default BlogPage;

