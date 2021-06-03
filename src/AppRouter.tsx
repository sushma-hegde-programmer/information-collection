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

const AppRouter: React.FC = (props) => {
  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path="/Home" component={TestContentPage} />
          <Route exact path="/Dashboard" component={DashboardContent} />
        </Switch>
      </PageLayout>
    </Router>
  );
};
export default AppRouter;
