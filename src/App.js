import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import TeamList from "./components/TeamList/TeamList";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/teamList">
            <TeamList></TeamList>
          </Route>
          <Route path="/teamDetails/:id">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
