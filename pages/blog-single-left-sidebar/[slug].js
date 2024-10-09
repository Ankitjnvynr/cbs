import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
const BlogDetailsLeftSiide =() => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'}/> 
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer />
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;