import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";
import DashboardContent from "./components/DashboardContent";
import TestContentPage from "./components/TestContentPage";
import PageLayout from "./containers/PageLayout";

type Props = {
  role: string;
};
const AppRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route exact path="/admin/home" component={TestContentPage} />
          <Route exact path="/Dashboard" component={DashboardContent} />
        </Switch>
      </PageLayout>
    </Router>
  );
};
export default AppRouter;
