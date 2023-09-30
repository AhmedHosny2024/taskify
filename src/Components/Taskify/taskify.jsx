import Nav from '../nav/nav';
import '../../App.css';
import MiniDrawer from '../drower/drower';
import { Container } from './style';
import Main from '../mainPage/main';
import Drower from '../buttomDrower/buttomDrower';
import Users from '../Users/Users';
import Time from '../Attendance/attendance';
import { useSelector } from 'react-redux';
import Me from '../Me/Me';

function Taskify() {
const [main,time,users,me]= useSelector(state=>state.selected)
  return (
    <div className="App">
      <Nav/>
      <Container>
        <MiniDrawer/>
        { (main && <Main/> ) ||
        (time && <Time/>  )
        ||( users && <Users/>) ||( me && <Me/>)}
      </Container>
        <Drower/>
    </div>
  );
}

export default Taskify;
