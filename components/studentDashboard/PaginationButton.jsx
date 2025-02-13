import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButton({count,page,getReciptList}) {
  const handleChange = (event, value) => {
    getReciptList(value)
  };
  return (
    <Stack style={{display:'flex',justifyContent:'center', alignItems:'center'}} className=' my-3 ' spacing={2}>
     
      <Pagination count={count} page={page} onChange={handleChange} variant="outlined" color="primary" />
     
    </Stack>
  );
}