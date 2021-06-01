import React, { useState } from "react";
import { Layout, Menu } from "antd";
import ContentPage from "../ContentPage";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import PageNavBar from "./PageNavBar";
import "../../styles/AppBarStyle.css";

const { SubMenu } = Menu;
const { Sider, Header, Content } = Layout;

function PageAppBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ display: "block" }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="image">
            <img src="../../images/Logo.png" alt="" className="img" />
          </Menu.Item>
          <Menu.Item
            icon={<HomeOutlined />}
            key="1"
            onClick={() => {
              console.log("in home");
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item key="sub1" icon={<DashboardOutlined />}>
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
