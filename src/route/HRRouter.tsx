import React from "react";
import PageLayout from "../containers/PageLayout";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import HRSubmenu1 from "../containers/HRSubmenu1";
import HRSubmenu2 from "../containers/HRSubmenu2";
import Workspace from "../containers/Workspace";

type Props = {
  role: string;
};

const HRRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/hr/workspace" />;
            }}
          />
          <Route exact path="/hr/workspace" component={Workspace} />
          <Route exact path="/hr/submenu1" component={HRSubmenu1} />
          <Route exact path="/hr/submenu2" component={HRSubmenu2} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default HRRouter;
