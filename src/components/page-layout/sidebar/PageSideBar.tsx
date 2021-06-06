import React from "react";
import { Layout, Menu } from "antd";
import careator_logo from "../../../images/careator-logo.svg";
import { NavLink } from "react-router-dom";
import DisplayItem from "./DisplayItem";
import sidebarOptions from "./SidebarOptions";
import { LaptopOutlined } from "@ant-design/icons";
import "./PageSideBar.css";

const { Sider } = Layout;

type Props = {
  collapsed: boolean;
  role: string;
};

const PageAppBar: React.FC<Props> = ({ collapsed, role }) => {
  let imageClasses = "sidebar__img";
  if (collapsed) {
    imageClasses = "sidebar__img hide";
  }
  var index = sidebarOptions.findIndex((item) => item.role === role);

  const array = [1, 2, 3];

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="image" className="sidebar__item image">
            <img
              src={careator_logo}
              alt="careator-logo"
              className={imageClasses}
            />
          </Menu.Item>
          <Menu.Item
            id="1"
            className="sidebar__item"
            icon={<LaptopOutlined />}
            key="1"
            onClick={() => {
              console.log("in home");
            }}
          >
            <NavLink
              className="sidebar__item navlink"
              exact
              to={sidebarOptions[index].routes[0].route}
            >
              My Workspace
            </NavLink>
          </Menu.Item>
          <Menu.Item
            id="3"
            className="sidebar__item"
            icon={<LaptopOutlined />}
            key="2"
            onClick={() => {
              console.log("in home");
            }}
          >
            <NavLink
              className="sidebar__item navlink"
              exact
              to={sidebarOptions[index].routes[0].route}
            >
              My Workspace
            </NavLink>
          </Menu.Item>

          {array.map(function (item, i) {
            console.log("i", i);
            console.log(sidebarOptions[index].routes[i].route);
            return (
              <Menu.Item
                id={sidebarOptions[index].routes[i].option}
                className="sidebar__item"
                icon={sidebarOptions[index].routes[i].icon}
                key={item}
              >
                <NavLink
                  className="sidebar__item navlink"
                  exact
                  to={sidebarOptions[index].routes[i].route}
                >
                  {sidebarOptions[index].routes[i].option}
                </NavLink>
              </Menu.Item>
            );
          })}
          {/* <DisplayItem
            name={sidebarOptions[index].routes[0].option}
            icon={sidebarOptions[index].routes[0].icon}
            route={sidebarOptions[index].routes[0].route}
          /> */}
          {/* <DisplayItem
            name={sidebarOptions[index].routes[1].option}
            icon={sidebarOptions[index].routes[1].icon}
            route={sidebarOptions[index].routes[1].route}
          />
          <DisplayItem
            name={sidebarOptions[index].routes[2].option}
            icon={sidebarOptions[index].routes[2].icon}
            route={sidebarOptions[index].routes[2].route}
          /> */}
        </Menu>
      </Sider>
    </>
  );
};

export default PageAppBar;
