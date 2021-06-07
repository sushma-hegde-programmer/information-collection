import React from "react";
import Update from "../components/Update";
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