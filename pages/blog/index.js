import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const BlogPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
            <Footer />
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default BlogPage;

