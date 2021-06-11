import React from "react";
import AdminRouter from "./AdminRouter";
import RecruiterRouter from "../RecruiterRouter";
import HRRouter from "./HRRouter";
import AccountManagerRouter from "./AccoutManagerRouter";
import LeaderRouter from "./LeaderRouter";
import CandidateRouter from "./CandidateRouter";
import UserService from "../services/UserService";
import { connect } from "react-redux";
import { AppType, UserSessionType } from "../types";

type State = {
  role: string;
  gotData: boolean;
};

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
      sessionStorage.setItem("lastLogin",JSON.stringify(data[0].lastLogin))
      sessionStorage.setItem("fistName", data[0].firstName);
      sessionStorage.setItem("lastName", data[0].lastName);     
      sessionStorage.setItem("mobile",data[0].mobile);
      sessionStorage.setItem("role",data[0].userRole)
      this.setState({
        role: data[0].userRole,
        gotData: true,
        //You have to fetch the data before rendering, so introduce a new variable to check whether you have got data from backend or not
      });
    } catch (e) {
      console.log("error", e);
    }
  }

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
};
export default connect(mapStoreToProps)(AppRouter);
