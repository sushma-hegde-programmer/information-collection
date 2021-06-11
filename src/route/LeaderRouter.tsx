import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PageLayout from "../containers/PageLayout";
import LeaderWorkspace from "../containers/LeaderWorkspace";
import LeaderSubmenu1 from "../containers/LeaderSubmenu1";
import LeaderSubmenu2 from "../containers/LeaderSubmenu2";

type Props = {
  role: string;
};

const LeaderRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/leader/workspace" />;
            }}
          />
          <Route exact path="/leader/workspace" component={LeaderWorkspace} />
          <Route exact path="/leader/submenu1" component={LeaderSubmenu1} />
          <Route exact path="/leader/submenu2" component={LeaderSubmenu2} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default LeaderRouter;
