import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import careator_logo from "../../images/careator-logo.svg";
import { NavLink } from "react-router-dom";
import "./PageSideBar.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

type Props = {
  collapsed: boolean;
};

const PageAppBar: React.FC<Props> = ({ collapsed }) => {
  console.log("collapsed");
  let imageClasses = "sidebar__img";
  if (collapsed) {
    imageClasses = "sidebar__img hide";
  }

  const displayOptions = [
    {
      role: "admin",
      options: [
        {
          option1: "Home",
          route: "http://localhost:3000/admin/Home",
        },
        {
          option2: "My work",
          route: "http://localhost:3000/admin/Work",
        },
      ],
    },
  ];

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["home"]}
        >
          <Menu.Item key="image">
            <img
              src={careator_logo}
              alt="careator-logo"
              className={imageClasses}
            />
          </Menu.Item>
          <Menu.Item
            icon={<HomeOutlined />}
            key={displayOptions[0].options[0].option1}
            onClick={() => {
              console.log("in home");
            }}
          >
            <NavLink exact to="/Home">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            <NavLink exact to="/Dashboard">
              Dashboard
            </NavLink>
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
