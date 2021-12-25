import { Container } from '@mui/material';
import './App.css';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Switch>
            <Route exact path="/">
              <SignUp />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
