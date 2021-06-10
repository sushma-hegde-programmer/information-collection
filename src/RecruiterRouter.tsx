import React from "react";
import RecruiterDashboard from "./containers/RecruiterDashboard";
import RecruiterManageClients from "./containers/RecruiterManageClients";
import RecruiterManageCandidates from "./containers/RecruiterManageCandidates";
import PageLayout from "./containers/PageLayout";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import RecruiterWorkspace from "./containers/RecruiterWorkspace";

type Props = {
  role: string;
};

const RecruiterRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/Recruiter/workspace" />;
            }}
          />
          <Route
            exact
            path="/Recruiter/workspace"
            component={RecruiterWorkspace}
          />
          <Route
            exact
            path="/Recruiter/dashboard"
            component={RecruiterDashboard}
          />
          <Route
            exact
            path="/Recruiter/manage-clients"
            component={RecruiterManageClients}
          />
          <Route
            exact
            path="/Recruiter/manage-candidates"
            // component={RecruiterManageCandidates}
          >
            <RecruiterManageCandidates />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default RecruiterRouter;
