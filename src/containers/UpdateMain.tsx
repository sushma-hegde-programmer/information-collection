import React from "react";
import Update from "../components/Update";
<<<<<<< HEAD
import { RoleType } from "../types";
import RoleService from "../services/RoleService";
import EmployeeService from "../services/EmployeeService";
import UserService from "../services/UserService"

type Props = {
  location: any;
};
type State = {
  roledata: RoleType[];
  empData: [];
  email:string;
  mobile: number;
  manager: number;
  reporting: [];
  userId: string;
  managerName: string;
  designation: string;
};

class UpdateMain extends React.Component {
  id = window.location.pathname.split("/")[2];
  state: State = {
    roledata: [],
    empData: [],
    email: "",
    mobile: 0,
    manager: 0,
    reporting: [],
    userId: "",
    managerName: "",
    designation: ""
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
      const { data } = await EmployeeService.getEmployeeById(parseInt(this.id));
      console.log("Updatemain line 52 DATA",data);
      const datatest = await EmployeeService.getEmployeeNameById(parseInt(data.managerId));
      this.setState({ userId: data.userId["userId"]})
      this.setState({ email: data.userId["email"] });
      this.setState({ mobile: data.userId["mobile"] });
      this.setState({ manager: data.managerId});
      this.setState({ designation: data.designation });
      this.setState({ managerName: datatest.data.firstName+" "+datatest.data.lastName})
      console.log("Email:", this.state.email);
      console.log("Mobile: ", this.state.mobile);
      this.setState({ empData: data });
      console.log("update main line 62 EMPDATA",this.state.empData)
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
        <Update rolelist={this.state.roledata} 
                click={this.roleClick} 
                reports={this.state.reporting} 
                data={this.state.empData} 
                emails={this.state.email} 
                mobiles={this.state.mobile} 
                managers={this.state.manager}
                usersId={this.state.userId}
                managersName={this.state.managerName}
                designations={this.state.designation}/>
      </div>
    );
  }
}

export default UpdateMain;
=======
import {RoleType} from "../types";
import RoleService from "../services/RoleService";

type Props = {};
type State = {
    roledata: RoleType[];
};

class UpdateMain extends React.Component {
    state: State = {
        roledata: []
    }
    componentDidMount(){
        this.getRoles();
    }
    async getRoles(){
        try{

            const {data} = await RoleService.getRoles()
            console.log(data);
            this.setState({
                roledata: data
            })
        }catch(e){
            console.log(e);
        }
    }
    render() {
        return(
            <div>
                <Update rolelist={this.state.roledata}/>
            </div>
        );
    }
};

export default UpdateMain;
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
