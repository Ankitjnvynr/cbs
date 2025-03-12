
import React from 'react'
import Navbar from '../../../../../components/Navbar/Navbar'
import PageTitle from '../../../../../components/pagetitle/PageTitle'
import Footer from '../../../../../components/footer/Footer'
import Scrollbar from '../../../../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CivilEngineering from '../../../../../components/acadmics/CivilEngineering'
const index = () => {
  return (
    <>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={"Civil engineering"} pagesub={"About"} />
   
   <CivilEngineering/>
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}

  </>
  )
}

export default index