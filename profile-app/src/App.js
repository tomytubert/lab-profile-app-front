import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from './view/HomePage';
import SignUp from './view/SignUp';
function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
