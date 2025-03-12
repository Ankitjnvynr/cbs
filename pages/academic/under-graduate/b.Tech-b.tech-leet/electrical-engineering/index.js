
import React from 'react'
import Navbar from '../../../../../components/Navbar/Navbar'
import PageTitle from '../../../../../components/pagetitle/PageTitle'
import Footer from '../../../../../components/footer/Footer'
import Scrollbar from '../../../../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import ElectricalEngineering from '../../../../../components/acadmics/ElectricalEngineering'
const index = () => {
  return (
    <>
    <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
    <PageTitle pageTitle={"Electrical Engineering"} pagesub={"About"} />
    <ElectricalEngineering/>
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}
  </>
  )
}

export default index