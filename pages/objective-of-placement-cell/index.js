
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'

import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import ObjectivePlacement from '../../components/objectivePlacement/ObjectivePlacement'

function director() {
  return (
    <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s1"} telephone={Phone} />
            <PageTitle pageTitle={'Objective of Placement Cell'} pagesub={'vision'} />
            <ObjectivePlacement/>
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
  )
}

export default director