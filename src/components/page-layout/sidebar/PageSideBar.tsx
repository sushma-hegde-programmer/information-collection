import React from "react";
import { Layout, Menu } from "antd";
import careator_logo from "../../../images/careator-logo.svg";
import { NavLink } from "react-router-dom";
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

<<<<<<< HEAD
=======
  const item_array = [1, 2];

>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["workspace"]}
        >
          <Menu.Item key="image" className="sidebar__item image">
            <img
              src={careator_logo}
              alt="careator-logo"
              id="logo"
              key="logo"
              className={imageClasses}
            />
          </Menu.Item>
          <Menu.Item
            id="workspace"
            className="sidebar__item workspace"
            icon={<LaptopOutlined />}
            key="workspace"
          >
            <NavLink
              className="sidebar__item navlink"
              exact
              to={`/${role}/workspace`}
            >
              My Workspace
            </NavLink>
          </Menu.Item>
          {/* if you write separate component to display menu Item, <Menu.Item></Menu.Item> should be written in that component
          that menu item will remain selected once it is selected. The ant default class will not be changed even though you select another menu item.
          So if you give background color for selected class that won't be changed even if you select other menu item
          So it is better to write in map function than writing separate component and then importing it inside <Menu></Menu>*/}
          {sidebarOptions[index].routes.map(function (item, i) {
            return (
              <Menu.Item
                id={item.option}
                className="sidebar__item"
                icon={item.icon}
                key={item.option}
              >
                <NavLink
                  className="sidebar__item navlink"
                  exact
                  to={item.route}
                >
                  {item.option}
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    </>
  );
};

export default PageAppBar;
