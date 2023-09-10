import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container, Icon, Name, Select, SelectBox, SelectItemDelete, Title, UserContainer, UserData } from './style';
import Notifications from './notification/notifucation';
import { ClickAwayListener } from '@mui/material';


export default function MenuAppBar() {
  const [showList1, setShowList1] = React.useState(false);

  const handleClick1 = () => {
    setShowList1((prev) => !prev);
  };
  
  // handle disable the list when click away
  const handleClickAway1 = () => {
    setShowList1(false);
  };

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
                    <Select>
                      <ClickAwayListener onClickAway={handleClickAway1}>
                        <Box data-testid="sort" sx={{ display: 'flex' }} onClick={() => { handleClick1(); }}>
                          Hosny
                        </Box>
                      </ClickAwayListener>
                    </Select>
                    {showList1 && (
                    <SelectBox data-testid="items" >
                      <SelectItemDelete> Log out </SelectItemDelete>
                    </SelectBox>)}
                    </Name>
                </UserData>
            </UserContainer>
        </Container>
      </AppBar>
    </Box>
  );
}
