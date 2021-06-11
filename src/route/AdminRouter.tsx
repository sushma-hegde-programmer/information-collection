import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLayout from "../containers/PageLayout";
import { Redirect } from "react-router-dom";
import AdminWorkspace from "../containers/AdminWorkspace";
import DashboardContent from "../components/DashboardContent";
import EmployeeList from "../containers/EmployeeList";
import CreateUserMain from "../containers/CreateUserMain";
import UpdateMain from "../containers/UpdateMain";
import DeleteEmployee from "../containers/DeleteEmployee";

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
              return <Redirect to="/admin/workspace" />;
            }}
          />
          <Route exact path="/admin/workspace" component={AdminWorkspace} />
          <Route exact path="/admin/dashboard" component={DashboardContent} />
          <Route
            exact
            path="/admin/manage-employees"
            component={EmployeeList}
          />
          <Route
            exact
            path="/admin/delete-employee"
            component={DeleteEmployee}
          />
          <Route path={"/createuser"} component={CreateUserMain} />
          <Route path={"/update/:id"} component={UpdateMain} />
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default AdminRouter;
