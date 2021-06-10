import React from "react";
import Update from "../components/Update";
import { RoleType } from "../types";
import RoleService from "../services/RoleService";
import EmployeeService from "../services/EmployeeService";
import UserService from "../services/UserService";

type Props = {
  location: any;
};
type State = {
  roledata: RoleType[];
  empData: [];
  email: string;
  mobile: number;
  manager: number;
  reporting: [];
  userId: string;
  managerName: string;
  designation: string;
  empDataUpdate: [];
};

class UpdateMain extends React.Component {
  userId = window.location.pathname.split("/")[2];
  state: State = {
    roledata: [],
    empData: [],
    email: "",
    mobile: 0,
    manager: 0,
    reporting: [],
    userId: "",
    managerName: "",
    designation: "",
    empDataUpdate: [],
  };
  componentDidMount() {
    this.getRoles();
    this.getEmployee();
  }
  async getRoles() {
    try {
      const { data } = await RoleService.getRoles();
      console.log(data);
      this.setState({
        roledata: data,
      });
    } catch (e) {
      console.log(e);
    }
  }
  async getEmployee() {
    try {
      const { data } = await EmployeeService.getEmployeeById(this.userId);
      console.log("Updatemain line 52 DATA", data);
      this.setState({ empDataUpdate: data });
      // console.log(this.state.empDataUpdate);
      this.setState({ userId: this.userId });
      // const datatest = await EmployeeService.getEmployeeNameById(parseInt(data.managerId));
      // this.setState({ userId: data.userId["userId"]})
      // this.setState({ email: data.userId["email"] });
      // this.setState({ mobile: data.userId["mobile"] });
      // this.setState({ manager: data.managerId});
      // this.setState({ designation: data.designation });
      // this.setState({ managerName: datatest.data.firstName+" "+datatest.data.lastName})
      // console.log("Email:", this.state.email);
      // console.log("Mobile: ", this.state.mobile);
      // this.setState({ empData: data });
      // console.log("update main line 62 EMPDATA",this.state.empData)
    } catch (e) {
      console.log(e);
    }
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
    // console.log(this.employeeData);
    // const p = this.props.location.params
    // console.log(p);
    return (
      <div>
        <Update
          rolelist={this.state.roledata}
          click={this.roleClick}
          reports={this.state.reporting}
          data={this.state.empDataUpdate}
          emails={this.state.email}
          mobiles={this.state.mobile}
          managers={this.state.manager}
          usersId={this.state.userId}
          managersName={this.state.managerName}
          designations={this.state.designation}
          empDataUpdate={this.state.empDataUpdate}
        />
      </div>
    );
  }
}

export default UpdateMain;
