import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import {Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Vintage 228</h1>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
