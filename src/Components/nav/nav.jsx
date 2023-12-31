import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container, Icon, Name, Title, UserContainer, UserData } from './style';
import Notifications from './notification/notifucation';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { IconButton } from '@mui/material';
import httpClinte from '../Login/httpClinte';
import { useDispatch } from 'react-redux';
import { CancelUser, Me, resetState, setdeps, setroles } from '../../Redux/dataSlice';
import Departments from '../Departments';
import ROles from '../RoleServer';
import { useSelector } from 'react-redux';



export default function MenuAppBar() {
  const dispatch=useDispatch()
  const selectMe= () => {
    // Home(dispatch)
    dispatch(Me())
    dispatch(CancelUser())
  };
  const name=useSelector(state=>state.myname)
  const [deps, error, statusCode]=Departments();
    const [rol, error2, statusCode2]=ROles();

    const dispatich=useDispatch()
    React.useEffect(()=>{
        const department = deps?.map((str) => ({ value: str.id, label: str.name }))
        dispatich(setdeps(department))
    },[deps])
    React.useEffect(()=>{
        const role = rol?.map((str,index) => ({ value: str.id, label: str.name  }))
        dispatich(setroles(role))
    },[rol])

  const logout = async ()=>{
    // const res= await httpClinte.post("//localhost:5000/logout")
    
    // if(res.status===200)
    //   window.location.pathname = 'login'
    // else if (res.statusCode === 401) {
    //   window.location.pathname = 'login';
    // }
    dispatch(resetState())

  }
  const id=useSelector(state=>state.MyId)
  React.useEffect(()=>{
    if(id===0){
      window.location.pathname = 'login'
    }
  },[id])
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
                {/* on click user info  */}
                  <UserData onClick={selectMe} sx={{cursor:"pointer"}}> 
                    <Icon>
                        <AccountCircle color='primary' />
                    </Icon>
                    <Name>
                      {name}
                    </Name>
                    </UserData>
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
