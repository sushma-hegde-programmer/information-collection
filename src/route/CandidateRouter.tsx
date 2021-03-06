import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PageLayout from "../containers/PageLayout";
import CandidateSubmenu1 from "../containers/CandidateSubmenu1";
import CandidateSubmenu2 from "../containers/CandidateSubmenu2";
import Workspace from "../containers/Workspace";

type Props = {
  role: string;
};

const CandidateRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/candidate/workspace" />;
            }}
          />
          <Route
            exact
            path="/candidate/workspace"
            component={Workspace}
          />
          <Route
            exact
            path="/candidate/submenu1"
            component={CandidateSubmenu1}
          />
          <Route
            exact
            path="/candidate/submenu2"
            component={CandidateSubmenu2}
          />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default CandidateRouter;
