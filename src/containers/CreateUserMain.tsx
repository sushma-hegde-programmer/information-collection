import React from "react";
import CreateUser from "../components/CreateUser";
import { RoleType, UserType, EmployeeType } from "../types";
import RoleService from "../services/RoleService";
import UserService from "../services/UserService";
import { couldStartTrivia } from "typescript";

type State = {
  roledata: RoleType[];
  reporting: [];
};
type Props = {};
const sample = 0;
class CreateUserMain extends React.Component {
  state: State = {
    roledata: [],
    reporting: [],
  };
  componentDidMount() {
    this.getRole();
  }
  async getRole() {
    try {
      const { data } = await RoleService.getRoles();
      console.log(data);
      this.setState({
        roledata: data,
      });
    } catch (e) {}
  }
  async getManager() {
    try {
    } catch (e) {}
  }
  roleClick = async (val: any) => {
    console.log("clicked", val);
    const emp = await UserService.getEmployee(val);
    console.log(emp);
    this.setState({
      reporting: emp.data,
    });
    console.log("reporting manager", this.state.reporting);
  };
  render() {
    return (
      <div>
        <CreateUser
          rolelist={this.state.roledata}
          click={this.roleClick}
          reports={this.state.reporting}
        />
      </div>
    );
  }
}

export default CreateUserMain;
