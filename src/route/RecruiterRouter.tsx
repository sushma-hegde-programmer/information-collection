import React from "react";
import RecruiterDashboard from "../containers/RecruiterDashboard";
import RecruiterManageClients from "../containers/RecruiterManageClients";
import RecruiterManageCandidates from "../containers/RecruiterManageCandidates";
import PageLayout from "../containers/PageLayout";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Workspace from "../containers/Workspace";

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
              return <Redirect to="/recruiter/workspace" />;
            }}
          />
          <Route
            exact
            path="/recruiter/workspace"
            component={Workspace}
          />
          <Route
            exact
            path="/recruiter/dashboard"
            component={RecruiterDashboard}
          />
          <Route
            exact
            path="/recruiter/manage-clients"
            component={RecruiterManageClients}
          />
          <Route
            exact
            path="/recruiter/manage-candidates"
            component={RecruiterManageClients}
          >
            <RecruiterManageCandidates />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default RecruiterRouter;
