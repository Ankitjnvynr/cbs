import React, { useState } from 'react'
import LoginLayout from './parts/LoginLayout'
import StudentList from './parts/StudentList'

export default function Students() {

    const [isLoading,setIsLoading]=useState(true)
    const [students,setStudents]=useState([])
    const[filters,setFilters]=useState({})


    const getStudents = async ()=>{
        // const response = 
    }
  return (
    <LoginLayout>
        <StudentList rows={students} />
    </LoginLayout>
  )
}
