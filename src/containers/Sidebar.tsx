import { Layout, Menu } from 'antd';
import Topnav from "../Components/Topnav"
import {
    
    MenuOutlined,
    DashboardOutlined,
    UserOutlined
} from '@ant-design/icons';


import React from 'react';
import Dashboard from './Dashboard';
import "../Styles/style.css"
const { Header, Sider, } = Layout;

class Sidebar extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    
    render() {    
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">
                    {/* <img src="../../Images/Logo.svg" alt="" className="img" /> */}
                    <Menu mode="inline" defaultSelectedKeys={['1']} className="menu">
                        <Menu.Item>
                            {/* <CopyrightIcon /> */}
                            <img src="../../Images/Logo.svg" alt="" className="img"/>
                        </Menu.Item>
                        {/* <h3>Welcome to Admin</h3> */}
                        <Menu.Item key="1" icon={< DashboardOutlined/>}>
                            My Workspace
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined/>}>
                            Employees
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="navbar">
                    <Header className="toggle">
                        {React.createElement(this.state.collapsed ? MenuOutlined : MenuOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <Topnav/>
                        {/* <AdminPageNavBar/> */}
                    </Header>
                    <Dashboard/>
                </Layout>
            </Layout>
        );
    }
}

export default Sidebar;