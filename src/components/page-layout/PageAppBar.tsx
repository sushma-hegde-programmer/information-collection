import React from "react";
import { Layout, Menu } from "antd";
import ContentPage from "../ContentPage";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

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
          <Menu.Item
            icon={<HomeOutlined />}
            key="1"
            title="Home"
            onClick={() => {
              console.log("in home");
              ContentPage();
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item key="sub1" icon={<DashboardOutlined />} title="Dashboard">
            Dashboard
          </Menu.Item>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Details">
            <Menu.Item key="work">My work</Menu.Item>
            <Menu.Item key="todo">To do</Menu.Item>
            <Menu.Item key="opt">option2</Menu.Item>
            <Menu.Item key="8">option3</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}

export default PageAppBar;
