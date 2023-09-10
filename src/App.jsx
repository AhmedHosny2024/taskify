import Nav from './Components/nav/nav';
import './App.css';
import MiniDrawer from './Components/drower/drower';
import Navigation from './Components/navigation/navigation';
import { Container, SecondContainer } from './style';
import Filter from './Components/Filter/filter';
import { Box, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import Data from './Components/Data/Data';

function App() {
  const filter=useSelector(state=>state.filter.filter)

  return (
    <div className="App">
      <Nav/>
      <Container>
        <MiniDrawer/>
        <Box sx={{ width: "-webkit-fill-available", display:"flex",flexDirection:"column"}}>
          <Box>
            <Navigation/>
            <Divider/>
          </Box>
          <SecondContainer>
            {(filter)&&<Filter/>}
            <Data/>
          </SecondContainer>
        </Box>
      </Container>
    </div>
  );
}

export default App;
