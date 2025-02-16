import React, { useEffect, useState } from 'react'
import LoginLayout from './parts/LoginLayout'
import NoticesList from './parts/NoticesList'
import noticeService from '../../services/noticeServices'
import { Button, LinearProgress, Typography } from '@mui/material'
import NoticeModal from './parts/NoticeModal'

export default function Notices() {
  const [notices,setNotices] = useState([])
  const [noticeData,setNoticeData] =useState({
    title: '',
    link:'',
    expiration_date:'',
    status:true,
    id:''
  })
  const [isLoading,setIsLoading]=useState(true)
  const [update,setUpdate] = useState(false)

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
  const handleOpen = () => {
    setOpen(true)
    setUpdate(false)
  };
  const handleClose = () => setOpen(false);


  return (
    <LoginLayout >
      <NoticeModal  open={open} update={update} handleClose={handleClose} handleOpen={handleOpen} noticeData={noticeData} setNoticeData={setNoticeData} getNotice={getNotice} />
      <Typography  align='center' variant='h5' >Notices</Typography>
      <Button variant='contained' onClick={handleOpen}>Add Notice</Button>
      <hr />
        {
          isLoading?<LinearProgress/>:<NoticesList getNotice={getNotice} setUpdate={setUpdate} setNoticeData={setNoticeData} setOpen={setOpen} rows={notices}  />
        }
    </LoginLayout>
  )
}
