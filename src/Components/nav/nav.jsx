import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Container, Icon, Name, Title, UserContainer, UserData } from './style';


export default function MenuAppBar() {

  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Title variant="h4" component="div" >
            Taskify
          </Title>
          <UserContainer>
                <Icon>
                    <NotificationsNoneIcon  color='primary'/>
                </Icon>
                <UserData>
                    <Icon>
                        <AccountCircle color='primary' />
                    </Icon>
                    <Name>
                        Hosny
                    </Name>
                </UserData>
            </UserContainer>
        </Container>
      </AppBar>
    </Box>
  );
}
