import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Login from "./components/Login";

//take the prop isLoggedIn and pass it to login component make isLoggedIn as true once user clicks on login component
function LoginRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default LoginRouter;
