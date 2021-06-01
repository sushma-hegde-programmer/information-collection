import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import "../../styles/AppBarStyle.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

type Props = {
  collapsed: boolean;
};

const PageAppBar: React.FC<Props> = ({ collapsed }) => {
  console.log("collapsed");
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
          defaultSelectedKeys={["home"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="image">
            <img src="../../images/Logo.png" alt="" className="img" />
          </Menu.Item>
          <Menu.Item
            icon={<HomeOutlined />}
            key="home"
            onClick={() => {
              console.log("in home");
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="details" icon={<LaptopOutlined />} title="Details">
            <Menu.Item key="work">My work</Menu.Item>
            <Menu.Item key="todo">To do</Menu.Item>
            <Menu.Item key="opt2">option2</Menu.Item>
            <Menu.Item key="opt3">option3</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
};

export default PageAppBar;
