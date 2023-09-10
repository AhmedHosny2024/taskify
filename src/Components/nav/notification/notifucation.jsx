import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Date, Disc, IteamHeader, Select, SelectBox, SelectItem, SelectItemDelete, Text } from './style';
import { Box, ClickAwayListener } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import Display from '../../Data/dispay/display';


export default function Notifications(){
    const today=useSelector(state=>state.todo.today)
    const missed=useSelector(state=>state.todo.yesterday)

    const handleClick1 = () => {
      setShowList1((prev) => !prev);
    };
  
    // handle disable the list when click away
    const handleClickAway1 = () => {
      setShowList1(false);
    };
    const [showList1, setShowList1] = useState(false);
  
  return (
    <>
    <Select>
        <ClickAwayListener onClickAway={handleClickAway1}>
          <Box data-testid="sort" sx={{ display: 'flex' }} onClick={() => { handleClick1(); }}>
            <NotificationsNoneIcon color='primary'/>
          </Box>
        </ClickAwayListener>
      </Select>
      {showList1 && (
      <SelectBox
      subheader={<li />}
      >
        <li>
          <ul>
            <IteamHeader color="#1677ff">Today</IteamHeader>
            {today.map((data,index) => (
              <>
                <SelectItem key={index} onClick={()=>{document.getElementById("show"+data.id).click();console.log("clicked");}}>
                  <Text>{data.title}</Text>
                  <Disc>{data.disc.substring(0,20)}</Disc>
                </SelectItem>
                {/* <Display data={data} display="none"/> */}
              </>
            ))}
          </ul>
        </li>
        <li >
          <ul>
            <IteamHeader color="red">Missed</IteamHeader>
            {missed.map((item,index) => (
                <SelectItemDelete key={index} onClick={()=>{document.getElementById("show"+item.id).click();console.log("clicked");}}>
                  <Text>{item.title}</Text>
                  <Date>{item.date}</Date>
                </SelectItemDelete>
            ))}
          </ul>
        </li>
    </SelectBox>
      )}
    </>
  );
};