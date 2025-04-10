import React, { useEffect } from 'react'
import LoginLayout from './parts/LoginLayout'
import ContactFormList from './parts/ContactFormList'
import contactService from '../../services/contactServices'
import { CircularProgress } from '@mui/material'

export default function ContactForm() {

  const [contactResponse, setContactResponse] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [ currentPage, setCurrentPage ] = React.useState(1)
  const [filters, setFilters] = React.useState({
    search: ''
  })

  const getContactResponse = async () => {
    setLoading(true)
    const response = await contactService.getRecords()
    console.log(response)
    if(response.code===200){
      setContactResponse(response.data)
      setCurrentPage(response.pagination.current_page)
      setLoading(false)
    }
  }

  useEffect(()=>{
    getContactResponse()
  },[])

  return (
    <LoginLayout>
        <div>hello its contact form page resonse</div>
        {
          loading?<CircularProgress />:<ContactFormList getContactResponse={getContactResponse} rows={contactResponse} currentPage ={currentPage} />
        }
        
    </LoginLayout>
  )
}
