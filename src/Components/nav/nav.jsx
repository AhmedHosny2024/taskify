import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container, Icon, Name, Title, UserContainer, UserData } from './style';
import Notifications from './notification/notifucation';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { IconButton } from '@mui/material';
import httpClinte from '../Login/httpClinte';



export default function MenuAppBar() {

  const logout = async ()=>{
    const res= await httpClinte.post("//localhost:5000/logout")
    
    if(res.status===200)
      window.location.pathname = 'login'
    else if (res.statusCode === 401) {
      window.location.pathname = 'login';
    }

  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Title variant="h4" component="div" >
            Taskify
          </Title>
          <UserContainer>
                <Icon>
                  <Notifications />
                    {/* <NotificationsNoneIcon  color='primary'/> */}
                </Icon>
                <UserData>
                    <Icon>
                        <AccountCircle color='primary' />
                    </Icon>
                    <Name>
                      Hosny
                    </Name>
                  <IconButton onClick={logout}>
                    <LogoutOutlinedIcon color='primary'/>
                  </IconButton>
                </UserData>
            </UserContainer>
        </Container>
      </AppBar>
    </Box>
  );
}
