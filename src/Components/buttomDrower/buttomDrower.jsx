import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { ButtomDrower } from './style';

export default function Drower() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ButtomDrower>
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Attendence"
        value="Attendence"
        icon={<CalendarMonthOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Users"
        value="Users"
        icon={<GroupsOutlinedIcon />}
      />
    </BottomNavigation>
    </ButtomDrower>
  );
}
