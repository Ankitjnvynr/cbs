import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { FaEdit, FaTrash } from 'react-icons/fa';
import conf from '../../../lib/conf';



export default function BlogsList({rows,blogEditor,setUpdateBlog}) {
  const EditBlog = (blog) =>{
    blogEditor(blog)
    setUpdateBlog(blog)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            {/* <TableCell align="right">Description</TableCell> */}
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.length>0 ?
            (
              rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Image height={20} width={30} src={`${conf.apiBaseUri}/uploads/${row.featured_image}`} />
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  {/* <TableCell align="left">{row.content}</TableCell> */}
                  <TableCell align="left">{row.created_at}</TableCell>
                  <TableCell align="right"><span onClick={()=> EditBlog(row)} ><FaEdit  />edit</span> <span><FaTrash /></span></TableCell>
                </TableRow>
              ))
            ):<TableCell align='right'>No data found</TableCell>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
