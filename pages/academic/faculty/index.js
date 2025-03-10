import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import PageTitle from '../../../components/pagetitle/PageTitle'
import Footer from '../../../components/footer/Footer'
import Scrollbar from '../../../components/scrollbar/scrollbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Head from 'next/head'

const index = () => {
  return (
    <>
    <Head>
  <title>Faculty Program-CBS Group of institutions</title>
  <meta
    name="description"
    content="Meet the distinguished faculty at CBS Group of Institutions. Learn from experienced educators, researchers, and industry experts dedicated to mentoring students and driving academic excellence."
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions faculty, experienced professors, academic staff, teaching experts, department Heads, qualified lecturers, research scholars, faculty profiles, student mentors, industry-experienced educators"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="https://www.cbscolleges.com/faculty" />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
    <PageTitle pageTitle={"facaulty"} pagesub={"About"} />
    
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}
  </>
  )
}

export default index