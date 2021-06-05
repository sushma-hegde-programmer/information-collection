import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Login from "./components/Login";
import TestContentPage from "./components/TestContentPage";

function LoginRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" component={TestContentPage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default LoginRouter;
