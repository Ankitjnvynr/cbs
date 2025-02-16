import React, { useEffect, useState } from 'react'
import LoginLayout from './parts/LoginLayout'
import NoticesList from './parts/NoticesList'
import noticeService from '../../services/noticeServices'
import { Button, LinearProgress, Typography } from '@mui/material'
import NoticeModal from './parts/NoticeModal'

export default function Notices() {
  const [notices,setNotices] = useState([])
  const [noticeData,setNoticeData] =useState({})
  const [isLoading,setIsLoading]=useState(true)

  const getNotice = async ()=>{
    const response = await noticeService.getNotices()
    console.log(response)
    if(response.code==200){
      setNotices(response.data)
    }
    setIsLoading(false)
  }

  useEffect(()=>{ 
    getNotice()
  },[])

  // modl js
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <LoginLayout >
      <NoticeModal  open={open} handleClose={handleClose} handleOpen={handleOpen} noticeData={noticeData} setNoticeData={setNoticeData} />
      <Typography  align='center' variant='h5' >Notices</Typography>
      <Button variant='contained' onClick={handleOpen}>Add Notice</Button>
      <hr />
        {
          isLoading?<LinearProgress/>:<NoticesList rows={notices}  />
        }
    </LoginLayout>
  )
}
