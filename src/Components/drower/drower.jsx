import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Drawer, Item, ItemIcone, Text } from './style';
import { useDispatch, useSelector } from 'react-redux';
// import { Setting, Home, DrawerAction } from '../../Redux/Actions/drowerActions';
import { Home, changeDrower, Users, Attendance } from '../../Redux/drowerSlice';
import { CancelUser } from '../../Redux/IdsSlice';

export default function MiniDrawer() {
  const drower =useSelector(state=>state.drower.drower)
  const selected = useSelector(state=>state.drower.selected)
  const dispatch =useDispatch()

  const selectAttendance= () => {
    // Setting(dispatch)
    dispatch(Attendance())
    dispatch(CancelUser())

  };
  const selectHome= () => {
    // Home(dispatch)
    dispatch(Home())
    dispatch(CancelUser())
  };
  const selectUsers= () => {
    // Home(dispatch)
    dispatch(Users())
    dispatch(CancelUser())

  };
  
  const handleDrawer = () => {
    // DrawerAction(dispatch)
    dispatch(changeDrower())
  };
  return (
    
      <Drawer variant="permanent" data-testid="drower" open={drower} onMouseEnter={handleDrawer} onMouseLeave= {handleDrawer}>
        <List>
            <ListItem key={"Home"} disablePadding sx={{ display: 'block' }} onClick={selectHome}>
              <Item open={drower} selected={selected[0]} data-testid="mouseEnter">
                <ItemIcone open ={drower}>
                 <HomeOutlinedIcon sx={{ color: selected[0] ? "#1890FF" : "black" }}/> 
                </ItemIcone>
                <Text primary={"Home"} sx={{ color: selected[0] ? "#1890FF" : "black",opacity: drower?1:0 }} />
              </Item>
            </ListItem>

            <ListItem key={"Attendence"} disablePadding sx={{ display: 'block' }} onClick={selectAttendance}>
            <Item open={drower} selected={selected[1]}>
              <ItemIcone open ={drower}>
                <CalendarMonthOutlinedIcon sx={{ color: selected[1] ? "#1890FF" : "black" }}/>
              </ItemIcone>
              <Text primary={"Attendance"} sx={{ color: selected[1] ? "#1890FF" : "black",opacity: drower?1:0 }}/>
            </Item>
          </ListItem>
            <ListItem key={"Users"} disablePadding sx={{ display: 'block' }} onClick={selectUsers}>
            <Item open={drower} selected={selected[2]}>
              <ItemIcone open ={drower}>
                <GroupsOutlinedIcon sx={{ color: selected[2] ? "#1890FF" : "black" }}/>
              </ItemIcone>
              <Text primary={"Users"} sx={{ color: selected[2] ? "#1890FF" : "black",opacity: drower?1:0 }}/>
            </Item>
          </ListItem>

        </List>
      </Drawer>
  );
}