import Nav from './Components/nav/nav';
import './App.css';
import MiniDrawer from './Components/drower/drower';
import { Container } from './style';
import Main from './Components/mainPage/main';
import Drower from './Components/buttomDrower/buttomDrower';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Container>
        <MiniDrawer/>
        <Main/>
      </Container>
        <Drower/>
    </div>
  );
}

export default App;
