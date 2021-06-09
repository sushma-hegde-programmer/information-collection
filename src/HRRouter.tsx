import React from "react";
import PageLayout from "./containers/PageLayout";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import HRSubmenu1 from "./containers/HRSubmenu1";
import HRSubmenu2 from "./containers/HRSubmenu2";
import HRWorkspace from "./containers/HRWorkspace";

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
              return <Redirect to="/HR/workspace" />;
            }}
          />
          <Route exact path="/HR/workspace" component={HRWorkspace} />
          <Route exact path="/HR/submenu1" component={HRSubmenu1} />
          <Route exact path="/HR/submenu2" component={HRSubmenu2} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default HRRouter;
