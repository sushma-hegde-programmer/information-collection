import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import careator_logo from "../../../images/careator-logo.svg";
// import careator_logo from "../../images/careator-logo.svg";
import { NavLink } from "react-router-dom";
import DisplayItem from "./DisplayItem";
import sidebarOptions from "./SidebarOptions";
import "./PageSideBar.css";

const { SubMenu } = Menu;
const { Sider } = Layout;

type Props = {
  collapsed: boolean;
  role: string;
};

const array = [
  {
    role: "admin",
    routes: [
      {
        option: "Home",
        icon: <HomeOutlined />,
        route: "/admin/Home",
      },
      {
        option: "Dashboard",
        route: "/admin/Dashboard",
      },
      {
        option: "work",
        route: "/admin/work",
      },
    ],
  },
  {
    role: "HR",
    routes: [
      {
        option: "Home",
        route: "/hr/Home",
      },
      {
        option: "Dashboard",
        route: "/hr/Dashboard",
      },
      {
        option: "work",
        route: "/hr/work",
      },
    ],
  },
];
const PageAppBar: React.FC<Props> = ({ collapsed, role }) => {
  let imageClasses = "sidebar__img";
  if (collapsed) {
    imageClasses = "sidebar__img hide";
  }

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["home"]}
        >
          {array.map(function (item, index, arr) {
            if (array[index].role === role)
              return (
                <>
                  <Menu.Item key="image" className="sidebar__item image">
                    <img
                      src={careator_logo}
                      alt="careator-logo"
                      className={imageClasses}
                    />
                  </Menu.Item>
                  <DisplayItem
                    name={sidebarOptions[index].routes[0].option}
                    icon={sidebarOptions[index].routes[0].icon}
                    route={sidebarOptions[index].routes[0].route}
                  />
                  <DisplayItem
                    name={sidebarOptions[index].routes[1].option}
                    icon={sidebarOptions[index].routes[1].icon}
                    route={sidebarOptions[index].routes[1].route}
                  />
                  <DisplayItem
                    name={sidebarOptions[index].routes[2].option}
                    icon={sidebarOptions[index].routes[2].icon}
                    route={sidebarOptions[index].routes[2].route}
                  />
                </>
              );
          })}
        </Menu>
        ;
      </Sider>
    </>
  );
};

export default PageAppBar;
