import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { ButtomDrower } from './style';
import { useDispatch } from 'react-redux';
import { Attendance, Home, Me, Users } from '../../Redux/drowerSlice';
import { CancelUser } from '../../Redux/IdsSlice';

export default function Drower() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case "Home":
        selectHome()
        break;
      case "Me":
        selectMe()
        break;
      case "Attendence":
        selectAttendance()
        break;
      case "Users":
        selectUsers()
        break;
    
      default:
        break;
    }
  };
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
  const selectMe= () => {
    // Home(dispatch)
    dispatch(Me())
    dispatch(CancelUser())
  };
  const selectUsers= () => {
    // Home(dispatch)
    dispatch(Users())
    dispatch(CancelUser())

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
        label="Me"
        value="Me"
        icon={<PermIdentityOutlinedIcon />}
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
