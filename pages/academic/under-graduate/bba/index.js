
import React from 'react'
import Navbar from '../../../../components/Navbar/Navbar'
import PageTitle from '../../../../components/pagetitle/PageTitle'
import Footer from '../../../../components/footer/Footer'
import Scrollbar from '../../../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Bba from '../../../../components/acadmics/Bba'
const index = () => {
  return (
    <>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={"bachelor-of-business-administration"} pagesub={"About"} />
   <Bba/>
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}
  </>
  )
}

export default index