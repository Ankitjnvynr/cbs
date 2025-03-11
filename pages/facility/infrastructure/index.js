import React from 'react'
import Infrastructure from '../../../components/facility/Infrastructure'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Navbar from '../../../components/Navbar/Navbar'
import Head from 'next/head'
import PageTitle from '../../../components/pagetitle/PageTitle'
import Footer from '../../../components/footer/Footer'
import Scrollbar from '../../../components/scrollbar/scrollbar'


const index = () => {
  return (
    <>
      <Head>
  <title>
    Best exam preparation strategies for students -CBS Group of institutions
  </title>
  <meta
    name="description"
    content="Get detailed information about examinations at CBS Group of Institutions. Explore exam schedules, guidelines, evaluation procedures, and resources to help students excel in their academic assessments"
  />
  <meta
    name="keywords"
    content="CBS Group of Institutions examination, exam schedule, semester exams, assessment process, exam guidelines, results, grading system, internal assessments, university exams, student evaluation."
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta charset="utf-8" />
  <link rel="canonical" href="https://www.cbscolleges.com/examination" />
</Head>
     <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
    <PageTitle pageTitle={"Insfrastructure "} pagesub={"About"} />
    <Infrastructure/>
    <Footer />
    <Scrollbar />

   </>
  )
}

export default index