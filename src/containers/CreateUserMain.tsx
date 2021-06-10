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

  realRole: any = [];

  componentDidMount() {
    this.getRole();
  }
  async getRole() {
    try {
      const { data } = await RoleService.getRoles();
      console.log(data);
      this.realRole.push(data);
      this.realRole.map((data: any) => {
        console.log(data);
        if (data.id != 1) {
          console.log(data.id);
          this.setState({ roledata: data });
        }
      });
      // : null;
      // this.state.roledata.map((data: any) => {
      //   data.id != 1 && data.id != 6 ? this.realRole.push(data) : null;
      // });
      // this.setState({ realdata: this.realRole });
      console.log("realRole", this.state.roledata);
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
