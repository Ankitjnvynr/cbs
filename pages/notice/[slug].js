import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Logo from '/public/images/cbslogo.png'

import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Phone from '/public/images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';

export default function SingleNotice() {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <Fragment>
    <Navbar Logo={Logo} telephone={Phone} hclass={"wpo-site-header s1"} />
   
    <div style={{
        paddingTop:155,
        marginTop:0
    }}>
          <div>
            {slug}
          </div>
    </div>
  
    <Footer />
    <Scrollbar /> 
    <CursorMaus/> 
</Fragment>
  )
}
