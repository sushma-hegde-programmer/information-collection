import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AMSubmenu1 from "./containers/AMSubmenu1";
import AMSubmenu2 from "./containers/AMSubmenu2";
import AMWorkspace from "./containers/AMWorkspace";
import PageLayout from "./containers/PageLayout";

type Props = {
  role: string;
};

const AccoutManagerRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/BDM/workspace" />;
            }}
          />
          <Route exact path="/BDM/workspace" component={AMWorkspace} />
          <Route exact path="/BDM/submenu1" component={AMSubmenu1} />
          <Route exact path="/BDM/submenu2" component={AMSubmenu2} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default AccoutManagerRouter;
