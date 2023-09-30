import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { Drawer, Item, ItemIcone, Text } from './style';
import { useDispatch, useSelector } from 'react-redux';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Attendance, CancelUser, Home, Me, Users, changeDrower, setlastId } from '../../Redux/dataSlice';
// import { Setting, Home, DrawerAction } from '../../Redux/Actions/drowerActions';

export default function MiniDrawer() {
  const drower =useSelector(state=>state.drower)
  const selected = useSelector(state=>state.selected)
  const Id=useSelector(state=>state.MyId)
  const role=useSelector(state=>state.role)
  const dispatch =useDispatch()

  const selectAttendance= () => {
    // Setting(dispatch)
    dispatch(setlastId(Id))
    dispatch(Attendance())
    dispatch(CancelUser())

  };
  const selectHome= () => {
    // Home(dispatch)
    dispatch(setlastId(Id))
    dispatch(Home())
    dispatch(CancelUser())
  };
  const selectMe= () => {
    // Home(dispatch)
    dispatch(setlastId(Id))
    dispatch(Me())
    dispatch(CancelUser())
  };
  const selectUsers= () => {
    // Home(dispatch)
    dispatch(setlastId(Id))
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

            <ListItem key={"Me"} disablePadding sx={{ display: 'block' }} onClick={selectMe}>
              <Item open={drower} selected={selected[3]} data-testid="mouseEnter">
                <ItemIcone open ={drower}>
                 <PermIdentityOutlinedIcon sx={{ color: selected[3] ? "#1890FF" : "black" }}/> 
                </ItemIcone>
                <Text primary={"Me"} sx={{ color: selected[3] ? "#1890FF" : "black",opacity: drower?1:0 }} />
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
          {role==="Admin" && <ListItem key={"Users"} disablePadding sx={{ display: 'block' }} onClick={selectUsers}>
            <Item open={drower} selected={selected[2]}>
              <ItemIcone open ={drower}>
                <GroupsOutlinedIcon sx={{ color: selected[2] ? "#1890FF" : "black" }}/>
              </ItemIcone>
              <Text primary={"Users"} sx={{ color: selected[2] ? "#1890FF" : "black",opacity: drower?1:0 }}/>
            </Item>
          </ListItem>}

        </List>
      </Drawer>
  );
}