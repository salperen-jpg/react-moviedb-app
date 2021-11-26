import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
// import SingleMovie from './Components/SingleMovie';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        {/* <Route path='/movies/:id' children={<SingleMovie />}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
