import { ConsoleSqlOutlined } from "@ant-design/icons";
import React from "react";
<<<<<<< HEAD
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";
=======
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Login from "./containers/login";
import ResetPassword from "./containers/ResetPassword";
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7

type Props = {
  loginAction: () => void;
};

//take the property function loginAction and pass it to login component make isLoggedIn as true once user clicks on login component
const LoginRouter: React.FC<Props> = ({ loginAction }) => {
  console.log("in login router");
  return (
    <Router>
      <Switch>
        <Route
          path={"/"}
          render={(props) => <Login {...props} loginAction={loginAction} />}
        />
<<<<<<< HEAD
=======
        <Route path={"/resetPassword"} component={ResetPassword} exact />
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
      </Switch>
    </Router>
  );
};

export default LoginRouter;
