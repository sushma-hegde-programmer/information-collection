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

  // console.log(array.find((arr) => arr.role === role));
  // console.log("routes" + array[0].routes);
  // var helo = array.find((arr) => arr.role === role)?.routes;
  // console.log("routes" + helo?.length);

  //var stringifiedObject = JSON.stringify(helo);
  // for (let i = 0; i < helo?.length; i++) {
  //   console.log(helo[i]);
  // }
  // console.log(stringifiedObject.length);

  // path = array.find((arr) => arr.role === role)?.routes;
  array.map(function (element, index, array) {
    if (array[index].role === role) {
      path = array[index].routes; //array of objects sits into the variable named path
      // you can access the element of array (complete object here) but you can't access key:value pair of object
      // in order to access key and value, make use of javascript Map
      // let convertedMap = new Map(Object.entries(path));
      // console.log("map", convertedMap);
      console.log("route", path);
      console.log("path", path[0]);
      // console.log("path option",path[0].option1)
      console.log(array[index].routes[0].option);
      console.log(array[index].routes[0].route);
      console.log(array[index].routes[1].option);
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
                  <Menu.Item
                    id="home"
                    className="sidebar__item"
                    icon={array[index].routes[0].icon}
                    key={array[index].routes[0].option}
                    onClick={() => {
                      console.log("in home");
                    }}
                  >
                    <NavLink
                      className="sidebar__item navlink"
                      exact
                      to={array[index].routes[0].route}
                    >
                      {array[index].routes[0].option}
                    </NavLink>
                  </Menu.Item>

                  <Menu.Item
                    className="sidebar__item"
                    key={array[index].routes[1].option}
                    icon={<DashboardOutlined />}
                  >
                    <NavLink
                      className="sidebar__item navlink"
                      exact
                      to={array[index].routes[1].route}
                    >
                      Dashboard
                    </NavLink>
                  </Menu.Item>
                  <DisplayItem
                    name={array[index].routes[2].option}
                    route={array[index].routes[2].route}
                  />
                  <DisplayItem
                    name={array[index].routes[2].option}
                    route={array[index].routes[2].route}
                  />
                  <DisplayItem
                    name={array[index].routes[2].option}
                    route={array[index].routes[2].route}
                  />

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
