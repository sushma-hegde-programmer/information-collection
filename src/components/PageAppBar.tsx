import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function PageAppBar() {
  return (
    <>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item icon={<HomeOutlined />} key="1" title="Home">
            Home
          </Menu.Item>
          <Menu.Item key="sub1" icon={<DashboardOutlined />} title="Dashboard">
            Dashboard
          </Menu.Item>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Details">
            <Menu.Item key="3">My work</Menu.Item>
            <Menu.Item key="6">To do</Menu.Item>
            <Menu.Item key="7">option2</Menu.Item>
            <Menu.Item key="8">option3</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}

export default PageAppBar;
