import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PageLayout from "./containers/PageLayout";
import CandidateSubmenu1 from "./containers/CandidateSubmenu1";
import CandidateSubmenu2 from "./containers/CandidateSubmenu2";
import CandidateWorkspace from "./containers/CandidateWorkspace";

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
              return <Redirect to="/Candidate/workspace" />;
            }}
          />
          <Route
            exact
            path="/Candidate/workspace"
            component={CandidateWorkspace}
          />
          <Route
            exact
            path="/Candidate/submenu1"
            component={CandidateSubmenu1}
          />
          <Route
            exact
            path="/Candidate/submenu2"
            component={CandidateSubmenu2}
          />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default CandidateRouter;
