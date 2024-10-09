import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-2.svg'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';


const BlogPageFullwidth =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer />
            <Scrollbar/>
            <CursorMaus />
        </Fragment>
    )
};
export default BlogPageFullwidth;

