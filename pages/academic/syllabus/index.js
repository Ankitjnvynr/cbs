import React from 'react'
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
  <title>Syllabus -CBS Group of institutions</title>
  <meta
    name="description"
    content="Access the latest syllabus at CBS Group of Institutions. Explore detailed course structures, subject outlines, and learning objectives designed to equip students with industry-relevant skills and knowledge"
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions syllabus, course curriculum, academic syllabus, program structure, subject details, semester-wise syllabus, study materials, university curriculum, exam topics, learning modules"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="https://www.cbscolleges.com/syllabus" />
</Head>
    <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
    <PageTitle pageTitle={"Syllabus"} pagesub={"About"} />
   
    <Footer />
    <Scrollbar />
    {/* <CursorMaus /> */}
  </>
  )
}

export default index