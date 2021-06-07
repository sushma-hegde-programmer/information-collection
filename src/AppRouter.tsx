import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardContent from "./components/DashboardContent";
import PageLayout from "./containers/PageLayout";
import ErrorPage from "./components/ErrorPage";
import Login from "./containers/login";
import ResetPassword from "./containers/ResetPassword";
import CreateUserMain from "./containers/CreateUserMain";
import UpdateMain from "./containers/UpdateMain";
import EmployeeList from "./containers/EmployeeList";
import AdminWorkspace from "./containers/AdminWorkspace";
import RecruiterWorkspace from "./containers/RecruiterWorkspace";
import CandidateWorkspace from "./containers/CandidateWorkspace";
import LeaderWorkspace from "./containers/LeaderWorkspace";
import AMWorkspace from "./containers/AMWorkspace";
import HRWorkspace from "./containers/HRWorkspace";
import AdminMangeEmployees from "./containers/AdminMangeEmployees";
import RecruiterDashboard from "./containers/RecruiterDashboard";
import RecruiterManageClients from "./containers/RecruiterManageClients";
import RecruiterManageCandidates from "./containers/RecruiterManageCandidates";
import HRSubmenu1 from "./containers/HRSubmenu1";
import HRSubmenu2 from "./containers/HRSubmenu2";
import AMSubmenu1 from "./containers/AMSubmenu1";
import AMSubmenu2 from "./containers/AMSubmenu2";
import LeaderSubmenu1 from "./containers/LeaderSubmenu1";
import LeaderSubmenu2 from "./containers/LeaderSubmenu2";
import CandidateSubmenu1 from "./containers/CandidateSubmenu1";
import CandidateSubmenu2 from "./containers/CandidateSubmenu2";

type Props = {
  role: string;
};

const AppRouter: React.FC<Props> = ({ role }) => {
  console.log("role", role);
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route path={"/createuser"} component={CreateUserMain} />
          <Route path={"/update"} component={UpdateMain} />

          <Route exact path="/admin/workspace" component={AdminWorkspace} />
          <Route exact path="/admin/dashboard" component={DashboardContent} />
          <Route
            exact
            path="/admin/manage-employees"
            component={EmployeeList}
          />

          <Route
            exact
            path="/recruiter/workspace"
            component={RecruiterWorkspace}
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
            component={RecruiterManageCandidates}
          />

          <Route exact path="/hr/workspace" component={HRWorkspace} />
          <Route exact path="/hr/submenu1" component={HRSubmenu1} />
          <Route exact path="/hr/submenu2" component={HRSubmenu2} />

          <Route
            exact
            path="/account_manager/workspace"
            component={AMWorkspace}
          />
          <Route
            exact
            path="/account_manager/submenu1"
            component={AMSubmenu1}
          />
          <Route
            exact
            path="/account_manager/submenu2"
            component={AMSubmenu2}
          />

          <Route exact path="/leader/workspace" component={LeaderWorkspace} />
          <Route exact path="/leader/submenu1" component={LeaderSubmenu1} />
          <Route exact path="/leader/submenu2" component={LeaderSubmenu2} />

          <Route
            exact
            path="/candidate/workspace"
            component={CandidateWorkspace}
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

          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </PageLayout>
    </Router>
  );
};
export default AppRouter;
