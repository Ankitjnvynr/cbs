import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Image from 'next/image';
// import bgImage from '/public/images/background.jpg'; // Add your background image here
import bgImage from '/public/images/bgdash.jpg'; // Add your background image here

const Sidebar = () => {
    return (
        <div
            style={{
                background: 'rgba(0, 0, 0, 0.3)',  // Transparent background
                backdropFilter: 'blur(3px)',  // Blur effect
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Subtle shadow
                borderRadius: '10px',  // Rounded corners (optional)
                border: '1px solid rgba(255, 255, 255, 0.2)',  // Border for a subtle outline
                padding: '20px',  // Padding inside the element
                width: 'fit-content',
                height: '90vh',
                
                margin:5,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between'
            }}

            className="w-64 bg-gray-800 text-white h-full fixed p-1  ">
            <ul className="mt-10">
                <li className="p-4 hover:bg-gray-700">Dashboard</li>
                <li className="p-4 hover:bg-gray-700">Profile</li>
                <li className="p-4 hover:bg-gray-700">Settings</li>
                {/* <li className="p-4 hover:bg-gray-700">Logout</li> */}
            </ul>
            <ul className="mt-10">
                
                <li
                style={
                    {
                         background:'rgba(0,0,0,0.6)'
                    }
                } className="p-2 hover:bg-gray-700 rounded bg-red-50">Logout</li>
            </ul>

        </div>
    );
};

const DashboardPage = () => {
    return (
        <Fragment>
            <div className="relative min-h-screen flex">
                {/* Sidebar */}


                {/* Main Content with Background */}
                <div className="flex-1 ml-64">
                    <div className="relative w-full h-screen">
                        <Image
                            src={bgImage}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            style={{
                                zIndex: '-1'
                            }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm border  flex items-center justify-center rounded-lg">
                            <h1 className="text-white text-center text-4xl">Welcome to Your </h1>
                        </div>

                       <div style={{
                        display:'flex'
                       }}>
                       <Sidebar />
                       <div
                       style={{
                        background: 'rgba(0, 0, 0, 0.3)',  // Transparent background
                        backdropFilter: 'blur(3px)',  // Blur effect
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Subtle shadow
                        borderRadius: '10px',  // Rounded corners (optional)
                        border: '1px solid rgba(255, 255, 255, 0.2)',  // Border for a subtle outline
                        padding: '20px',  // Padding inside the element
                        flex:'1',
                        height: '90vh',
                        
                        margin:5
                    }}
                       className='p-2'>
                        dfsdfsd
                       </div>
                       </div>
                      
                      
                    </div>
                </div>
            </div>

            <CursorMaus />
        </Fragment>
    );
};

export default DashboardPage;
