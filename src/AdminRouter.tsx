import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLayout from "./containers/PageLayout";
import { Redirect } from "react-router-dom";
import AdminWorkspace from "./containers/AdminWorkspace";
import DashboardContent from "./components/DashboardContent";
import EmployeeList from "./containers/EmployeeList";
import CreateUserMain from "./containers/CreateUserMain";
import UpdateMain from "../src/containers/UpdateMain";

type Props = {
  role: string;
};
const AdminRouter: React.FC<Props> = ({ role }) => {
  return (
    <Router>
      <PageLayout role={role}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/Admin/workspace" />;
            }}
          />
          <Route exact path="/Admin/workspace" component={AdminWorkspace} />
          <Route exact path="/Admin/dashboard" component={DashboardContent} />
          <Route
            exact
            path="/Admin/manage-employees"
            component={EmployeeList}
          />
          <Route path={"/createuser"} component={CreateUserMain} />
          <Route path={"/update/:id"} component={UpdateMain} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default AdminRouter;
