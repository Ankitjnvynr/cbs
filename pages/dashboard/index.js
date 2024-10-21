// pages/dashboard.js
import React, { Fragment } from 'react';
import Image from 'next/image';
// import CursorMaus from '../../components/CursorMaus';
import bgImage from '/public/images/bgdash.jpg'; // Background image
import pool from '../../lib/db'; // Database connection

const DashboardPage = ({ alumniData }) => {
    console.log('Alumni Data in Component:', alumniData); // Debug log for alumni data

    return (
        <Fragment>
            <div
                style={{
                    display: 'flex',
                    gap: 20,
                    padding: 20
                }} className="relative min-h-screen flex">
                {/* Sidebar Section */}
                <div
                    style={{
                        backdropFilter: 'blur(5px)',
                        border: '1px solid gray',
                        borderRadius: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        overflow: 'hidden',
                        minWidth: 180,
                        height: '95vh',
                        background: 'rgba(0,0,30,0.3)'
                    }}
                    className="w-64 bg-gray-800 text-white h-full fixed p-1">
                    <ul className="mt-10">
                        <li className="p-4 hover:bg-gray-700">Dashboard</li>
                        <li className="p-4 hover:bg-gray-700">Profile</li>
                        <li className="p-4 hover:bg-gray-700">Settings</li>
                    </ul>
                    <ul className="mt-10">
                        <li className="p-2 hover:bg-gray-700 rounded bg-red-50">Logout</li>
                    </ul>
                </div>

                {/* Main Content Section */}
                <div


                    className="flex-1 ml-64">
                    <div className="relative w-full h-screen">
                        {/* Background Image */}
                        <Image
                            src={bgImage}
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            style={{ zIndex: '-1' }}
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center rounded-lg">
                            <h1 className="text-white text-4xl">CBS INSTITUTE DASHBOARD</h1>
                        </div>

                        <div style={{

                            backdropFilter: 'blur(5px)',
                            border: '1px solid gray',
                            borderRadius: 20,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            overflow: 'hidden',
                            minWidth: 180,
                            height:'87vh',
                            width:'88%',

                            background: 'rgba(0,0,30,0.3)'
                        }}

                            className="p-2 table-auto">
                            <div style={{
                                 overflowX:'scroll',
                                //  maxWidth:'90%',
                            }}>
                                <table className="table-auto w-full text-white">
                                    <caption class="caption-top text-white">
                                        Alumni Student List
                                    </caption>
                                    <thead>
                                        <tr>
                                            <th className="border p-2">Sr</th>
                                            <th className="border p-2">Name</th>
                                            <th className="border p-2">Nationality</th>
                                            <th className="border p-2">Occupation</th>
                                            <th className="border p-2">City</th>
                                            <th className="border p-2">Email</th>
                                            <th className="border p-2">Mobile</th>
                                            <th className="border p-2">Course</th>
                                            <th className="border p-2">Branch</th>
                                            <th className="border p-2">Roll No</th>
                                            <th className="border p-2">Session</th>
                                            <th className="border p-2">Current Org Designation</th>
                                            <th className="border p-2">Past Org Designation</th>
                                            {/* <th className="border p-2">Created At</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {alumniData.length === 0 ? (
                                            <tr>
                                                <td colSpan="13" className="text-center p-4">
                                                    No alumni data available.
                                                </td>
                                            </tr>
                                        ) : (
                                            alumniData.map((alumni, index) => {
                                                console.log(`Rendering Alumni Row ${index}:`, alumni); // Debug log for each row
                                                return (
                                                    <tr key={alumni.id}>
                                                        <td className="border p-2">{index+1}</td>
                                                        <td className="border p-2">{alumni.studentName || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.nationality || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.occupation || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.city || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.email || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.mobile || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.course || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.branch || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.rollNo || 'N/A'}</td>
                                                        <td className="border p-2">{alumni.session || 'N/A'}</td>
                                                        <td className="border p-2">
                                                            {alumni.currentOrgDesignation || 'N/A'}
                                                        </td>
                                                        <td className="border p-2">
                                                            {alumni.pastOrgDesignation || 'N/A'}
                                                        </td>
                                                        {/* <td className="border p-2">{alumni.createdAt || 'N/A'}</td> */}
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <CursorMaus /> */}
        </Fragment>
    );
};

export async function getServerSideProps() {
    try {
        const [rows] = await pool.query(`
            SELECT 
                studentName, 
                nationality, 
                occupation, 
                city, 
                email, 
                mobile, 
                course, 
                branch, 
                rollNo, 
                session, 
                currentOrgDesignation, 
                pastOrgDesignation, 
                createdAt 
            FROM alumni_registration
        `);

        console.log('Fetched Alumni Data from DB:', rows); // Debug log for fetched data

        const alumniData = rows.map((alumni) => ({
            ...alumni,
            createdAt: alumni.createdAt ? alumni.createdAt.toISOString() : null,
        }));

        return { props: { alumniData } };
    } catch (error) {
        console.error('Database Error:', error);
        return { props: { alumniData: [] } };
    }
}

export default DashboardPage;
