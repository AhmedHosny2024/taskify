import { Box, Divider } from '@mui/material';
import React from 'react';
import Header from './Header/Header';
import AllUsers from './AllUsers/AllUsers';
import { SecondContainer, Title } from './style';
import Main from '../mainPage/main';
import Time from '../Attendance/attendance';
import { useSelector } from 'react-redux';
const data=[
    {
        id:1,
        name:"Ahmed Hosny",
        profile:'https://nationaltoday.com/wp-content/uploads/2022/04/Cristiano-Ronaldo-Birthday-1200x834.jpg.webp',
    },
    {
        id:2,
        name:"Ahmed",
        profile:'https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/master/w_1920,c_limit/Rosen-Messi-Miami.jpg',
    },
]

function Users() {
  const page=useSelector(state=>state.Ids.search)
  return (
<Box sx={{ width: "-webkit-fill-available", display:"flex",flexDirection:"column"}}>
    <Box>
    {(page[0]||page[1])?
        (<Title variant="h6" component="div" >
            Users
        </Title>):(
        <>
        <Header/>
        <Divider/>
        </>
        )}
    </Box>
    <SecondContainer>
            {(!page[0]&&!page[1]&&<AllUsers data={data}/>)||            
            (page[0]&&<Main/>)||
            (page[1]&&<Time/>)}
    </SecondContainer>
</Box>
  );
}

export default Users;
