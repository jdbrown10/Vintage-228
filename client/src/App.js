import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import {Switch, Route, Link} from "react-router-dom";
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <div className="w-20 d-flex justify-content-center align-items-center mx-auto">
        <h1>Vintage 228</h1>
        <Link className="m-3 btn btn-primary" to="/">Shop</Link>
        <Link className="m-3 btn btn-info" to="/create">Add a Product</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path ="/create">
          <Create/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
