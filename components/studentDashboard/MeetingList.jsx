import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LinearProgress } from '@mui/material';


export default function MeetingList({rows,loading}) {
  
  return loading ?(
    <LinearProgress />
  ):
   (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{textWrap:'nowrap'}} >Zoom Meet Id</TableCell>
            <TableCell style={{textWrap:'nowrap'}} >Passcode</TableCell>
            <TableCell style={{textWrap:'nowrap'}}  >Time</TableCell>
            <TableCell style={{textWrap:'nowrap'}}  align="left">Booked at</TableCell>
            <TableCell style={{textWrap:'nowrap'}}  align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
           
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.meetingId}
              </TableCell>
              <TableCell align="left">{row.meetingPassword}</TableCell>
              <TableCell align="left">{row.meetingTime } <a target='_blank' href={row.meetingUrl}>Join_Now</a> </TableCell>
              <TableCell align="left">{row.created_at}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
