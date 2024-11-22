import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FiLogOut } from "react-icons/fi"; // Import logout icon

export default function Sidebar() {
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove the token
    localStorage.removeItem("user"); // Remove the token
    router.push("/login"); // Redirect to login page
    console.log("User has logged out"); // Confirm logout
  };
  return (
   <>
   {/* Sidebar Section */}
<div
style={{
  backdropFilter: "blur(5px)",
  border: "1px solid gray",
  borderRadius: 20,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  minWidth: 180,
  height: "95vh",
  background: "rgba(0,0,30,0.3)",
}}
className="w-64 bg-gray-800 text-white h-full fixed p-1"
>
<ul 
style={{
  display:'flex',
  flexDirection:'column',
  gap: 20,
}} className="mt-10 hover:cursor-pointer ">
  <li
    style={{
      // background: "black",
      cursor: "pointer",
    }}
    className="p-4 hover:bg-gray-700 cursor-pointer"
  >
    Dashboard
  </li>

  <li>
    <Link
      style={{
        //  background: "red",
        cursor: "pointer",
      }}
      className="p-4 hover:bg-gray-900 cursor-pointer text-white "
      href="/dashboard/alumni"
    >
      Alumni
    </Link>
  </li>
  <li 
  style={{
    
  }}
  >
    <Link
      style={{
        //  background: "red",
        cursor: "pointer",
      }}
      className="p-4 hover:bg-gray-900 cursor-pointer text-white "
      href="/dashboard/notices"
    >
      Notice Board
    </Link>
  </li>
  
</ul>

<ul className="mt-10">
  <li
    style={{
      background: "black",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}
    onClick={handleLogout}
    className="mb-3 mx-1 p-2 hover:bg-gray-700 rounded bg-red-50"
  >
    <FiLogOut size={20} /> {/* Logout Icon */}
    Logout
  </li>
</ul>
</div>
   </>
  )
}
