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
  role: string;
};

const PageAppBar: React.FC<Props> = ({ collapsed, role }) => {
  var path: Object[] = [{}];
  console.log("inpage appbar", role);
  let imageClasses = "sidebar__img";
  if (collapsed) {
    imageClasses = "sidebar__img hide";
  }

  const array = [
    {
      role: "admin",
      routes: [
        {
          option1: "Home",
          route: "/admin/Home",
        },
        {
          option2: "Dashboard",
          route: "/admin/Dashboard",
        },
        {
          option3: "work",
          route: "/admin/work",
        },
      ],
    },
    {
      role: "hr",
      routes: [
        {
          option1: "Home",
          route: "/hr/Home",
        },
        {
          option2: "Dashboard",
          route: "/hr/Dashboard",
        },
        {
          option3: "work",
          route: "/hr/work",
        },
      ],
    },
  ];

  console.log(array.find((arr) => arr.role === role));
  console.log("routes" + array[0].routes);
  var helo = array.find((arr) => arr.role === role)?.routes;
  console.log("routes" + helo?.length);

  //var stringifiedObject = JSON.stringify(helo);
  // for (let i = 0; i < helo?.length; i++) {
  //   console.log(helo[i]);
  // }
  // console.log(stringifiedObject.length);

  // path = array.find((arr) => arr.role === role)?.routes;
  array.map(function (element, index, array) {
    if (array[index].role === role) {
      path = array[index].routes; //array of objects sits into the variable named path
      //you can access the element of array (complete object here) but you can't access key:value pair of object
      //in order to access key and value, make use of javascript Map
      // let convertedMap = new Map(Object.entries(path));
      // console.log("map", convertedMap);
      // console.log("route", path);
      // console.log("path", path[0]);
      // console.log(array[index].routes[0].option1);
      // const value = convertedMap.get("0");
      // console.log(value);
    }
  });

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["home"]}
        >
          <Menu.Item key="image" className="sidebar__item image">
            <img
              src={careator_logo}
              alt="careator-logo"
              className={imageClasses}
            />
          </Menu.Item>
          <Menu.Item
            id="home"
            className="sidebar__item"
            // style={{ backgroundColor: "red" }}
            icon={<HomeOutlined />}
            // key={}
            onClick={() => {
              console.log("in home");
            }}
          >
            <NavLink className="sidebar__item navlink" exact to={"/Home"}>
              hello
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className="sidebar__item"
            key="dashboard"
            icon={<DashboardOutlined />}
          >
            <NavLink className="sidebar__item navlink" exact to="/Dashboard">
              Dashboard
            </NavLink>
          </Menu.Item>
          <SubMenu
            className="sidebar__item"
            key="details"
            icon={<LaptopOutlined />}
            title="Details"
          >
            <Menu.Item key="work">My work</Menu.Item>
            <Menu.Item key="todo">To do</Menu.Item>
            <Menu.Item key="opt2">option2</Menu.Item>
            <Menu.Item key="opt3">option3</Menu.Item>
          </SubMenu>
        </Menu>
        ;
      </Sider>
    </>
  );
};

export default PageAppBar;
