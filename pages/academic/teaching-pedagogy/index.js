
import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import PageTitle from '../../../components/pagetitle/PageTitle'
import Footer from '../../../components/footer/Footer'
import Teaching from '../../../components/acadmics/Teaching'
import Scrollbar from '../../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
const index = () => {
  return (
    <>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={"Teaching-Pedagogy"} pagesub={"About"} />
   
    
     <Teaching/>
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}
  </>
  )
}

export default index