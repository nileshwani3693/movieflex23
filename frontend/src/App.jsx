import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import Netflix from "./pages/netflix/Netflix"
import Movieflixshow from "./pages/movieflix show/Movieflixshow";
import Views from "./pages/views/Views";


const App = () => {
  const {user} =useContext(AuthContext) ;
  return (
  <Router>
  <Switch>
  <Route exact path="/">
      {user ? <Netflix /> : <Redirect to="/register" />}
    </Route>
    <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
      </Route>
      <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
      {user && (
          <>
    
    <Route path="/movies">
      <Home type="movie"/>
    </Route>
    <Route path="/series">
      <Home type="series"/>
    </Route>
    <Route path="/watch">
      <Watch/>
    </Route>
    <Route path="/movieflix">
      <Home/>
    </Route>
    <Route path="/movieflix-show">
      <Movieflixshow/>
    </Route>
    <Route path="/views">
      <Views/>
    </Route>
    </>
      )}
  </Switch>
  </Router>
  );
};

export default App;