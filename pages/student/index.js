import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '/public/images/cbslogo.png'
import Phone from '/public/images/telephone.svg'
import Image from 'next/image'
import hero1 from "/public/images/slider/slider-1abc.jpg";

export default function index() {
    return (

        <>

            <div className="">
                <Image src={hero1} alt="" />
            </div>

            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />

        </>
    )
}
