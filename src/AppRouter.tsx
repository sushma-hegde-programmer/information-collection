import React from "react";
<<<<<<< HEAD
import AdminRouter from "./AdminRouter";
import RecruiterRouter from "./RecruiterRouter";
import HRRouter from "./HRRouter";
import AccountManagerRouter from "./AccoutManagerRouter";
import LeaderRouter from "./LeaderRouter";
import CandidateRouter from "./CandidateRouter";
import UserService from "./services/UserService";
import { connect } from "react-redux";
import { AppType, UserSessionType } from "./types";
=======
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
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7

type State = {
  role: string;
  gotData: boolean;
};
<<<<<<< HEAD
=======

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
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7

type Props = {
  userData: UserSessionType;
};

class AppRouter extends React.Component<Props, State> {
  state: State = {
    role: "",
    gotData: false,
  };

  componentDidMount() {
    this.getData();
  }

  async getData() {
    if (this.props.userData.user?.userId !== null) {
      var id: any = this.props.userData.user?.userId;    
    }
    try {      
      const { data } = await UserService.getUserDetailsById(id);
      console.log("data", data);
      this.setState({
        role: data[0].userRole,
        gotData: true,
        //You have to fetch the data before rendering, so introduce a new variable to check whether you have got data from backend or not
      });
    } catch (e) {
      console.log("error", e);
    }
  }

<<<<<<< HEAD
  render() {
    switch (this.state.role) {
      case "Admin":
        return (
          <>{this.state.gotData && <AdminRouter role={this.state.role} />}</>
        );
        break;
      case "Recruiter":
        return (
          <>
            {this.state.gotData && <RecruiterRouter role={this.state.role} />}
          </>
        );
        break;
      case "HR":
        return <>{this.state.gotData && <HRRouter role={this.state.role} />}</>;
        break;
      case "BDM":
        return (
          <>
            {this.state.gotData && (
              <AccountManagerRouter role={this.state.role} />
            )}
          </>
        );
        break;
      case "Leader":
        return (
          <>{this.state.gotData && <LeaderRouter role={this.state.role} />}</>
        );
        break;
      case "Candidate":
        return (
          <>
            {this.state.gotData && <CandidateRouter role={this.state.role} />}
          </>
        );
        break;
      default:
        return null;
    }
  }
}
const mapStoreToProps = (store: AppType) => {
  return {
    userData: store.userSession,
  };
=======
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
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
};
export default connect(mapStoreToProps)(AppRouter);
