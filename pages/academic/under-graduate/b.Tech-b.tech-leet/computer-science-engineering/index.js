import React from 'react'
// import Navbar from '../../../../../components/Navbar/Navbar'
// import PageTitle from '../../../../../components/pagetitle/PageTitle'
// import Footer from '../../../../../components/footer/Footer'
// import Scrollbar from '../../../../../components/scrollbar/scrollbar'
import Navbar from '../../../../../components/Navbar/Navbar'
import PageTitle from '../../../../../components/pagetitle/PageTitle'
import Footer from '../../../../../components/footer/Footer'
import Scrollbar from '../../../../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import ComputerScienceEngineering from '../../../../../components/acadmics/ComputerScienceEngineering'
const index = () => {
  return (
    <>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={"Computer Science Engineering"} pagesub={"About"} />
   <ComputerScienceEngineering/>
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}
  </>
  )
}

export default index