import React, { useEffect, useState } from "react";
import LoginLayout from "./parts/LoginLayout";
import { Pagination, Typography } from "@mui/material";
import MeetingsList from "./parts/MeetingsList";
import meetingService from "../../services/meetings";
import { toast } from "react-toastify";

export default function Meetings() {
  const [loading, setLoading] = useState();
  const [meetings, setMeetings] = useState([]);
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalMeetings, setTotalMeetings] = useState(0);

  const getMeetings = async () => {
    setLoading(true);
    const response = await meetingService.getMeeting(filters);
    console.log(response);
    if (response.success) {
      setMeetings(response.meetings);
      setCurrentPage(response.pagination.current_page);
      setTotalPages(response.pagination.total_pages);
      setTotalMeetings(response.pagination.total_meetings);
    }
  };

  useEffect(() => {
    getMeetings();
  }, []);

  const handlePage = (event,value)=>{
    getMeetings({
        ...filters,
        page: value
    })
  }

  const onUpdateStatus = async (id,newStatus)=>{
    const response = await meetingService.updateMeeting(id,newStatus)
    console.log("response in updateing ",response)
    if(response.success){
        getMeetings()
        toast.success(response.message)
    }else{
        toast.error(response.error)
    }
  }

  return (
    <LoginLayout>
      <Typography>Meetings({totalMeetings})</Typography>
      <MeetingsList onUpdateStatus={onUpdateStatus} rows={meetings} />
      <Pagination onChange={handlePage} page={currentPage}  style={{display:'flex',justifyContent:'center'}} className="my-3" count={totalPages} color="primary" />
    </LoginLayout>
  );
}
