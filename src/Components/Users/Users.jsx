import { Box, Divider } from '@mui/material';
import React from 'react';
import Header from './Header/Header';
import AllUsers from './AllUsers/AllUsers';
import { SecondContainer, Title } from './style';
import Main from '../mainPage/main';
import Time from '../Attendance/attendance';
import { useSelector } from 'react-redux';


function Users() {
  const page=useSelector(state=>state.search)
  const name=useSelector(state=>state.name)
  return (
<Box sx={{ width: "-webkit-fill-available", display:"flex",flexDirection:"column"}}>
    <Box>
    {(!page[0]&&!page[1])?
        (
        <>
        <Header/>
        <Divider/>
        </>
        ):(<Title variant="h6" component="div" >
        {name}
       </Title>)}
    </Box>
    <SecondContainer>
            {(!page[0]&&!page[1]&&<AllUsers />)||            
            (page[0]&&<Main/>)||
            (page[1]&&<Time/>)}
    </SecondContainer>
</Box>
  );
}

export default Users;
