import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Drawer, Item, ItemIcone, Text } from './style';
import { useDispatch, useSelector } from 'react-redux';
// import { Setting, Home, DrawerAction } from '../../Redux/Actions/drowerActions';
import { Home, changeDrower,Setting } from '../../Redux/drowerSlice';

export default function MiniDrawer() {
  const drower =useSelector(state=>state.drower.drower)
  const selected = useSelector(state=>state.drower.selected)
  const dispatch =useDispatch()

  const selectSetting = () => {
    // Setting(dispatch)
    dispatch(Setting())
  };
  const selectHome= () => {
    // Home(dispatch)
    dispatch(Home())
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

            <ListItem key={"Setting"} disablePadding sx={{ display: 'block' }} onClick={selectSetting}>
            <Item open={drower} selected={selected[1]}>
              <ItemIcone open ={drower}>
                <SettingsOutlinedIcon sx={{ color: selected[1] ? "#1890FF" : "black" }}/>
              </ItemIcone>
              <Text primary={"Setting"} sx={{ color: selected[1] ? "#1890FF" : "black",opacity: drower?1:0 }}/>
            </Item>
          </ListItem>

        </List>
      </Drawer>
  );
}