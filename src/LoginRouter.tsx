import { ConsoleSqlOutlined } from "@ant-design/icons";
import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./containers/login";

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
      </Switch>
    </Router>
  );
};

export default LoginRouter;
