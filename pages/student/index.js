import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '/public/images/cbslogo.png';
import Phone from '/public/images/telephone.svg';
import Image from 'next/image';
import hero1 from '/public/images/slider/slider-1abc.jpg';

export default function Index() {
    // Custom styles
    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        objectFit: 'cover',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% black overlay
        zIndex: -1,
    };

    return (
        <>
            {/* Background Image */}
            <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
                <Image src={hero1} alt="Background" layout="fill" objectFit="cover" style={backgroundStyle} />
                <div style={overlayStyle}></div>
            </div>

            {/* Navbar */}
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
        </>
    );
}