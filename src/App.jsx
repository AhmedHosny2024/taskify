import Nav from './Components/nav/nav';
import './App.css';
import MiniDrawer from './Components/drower/drower';
import Navigation from './Components/navigation/navigation';
import { Container } from './style';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Container>
        <MiniDrawer/>
        <Navigation/>
      </Container>
    </div>
  );
}

export default App;
