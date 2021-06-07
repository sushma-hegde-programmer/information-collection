import { ConsoleSqlOutlined } from "@ant-design/icons";
import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import Login from "./containers/login";
import ResetPassword from "./containers/ResetPassword";

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
        <Route path={"/resetPassword"} component={ResetPassword} exact />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
