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
  toggle: () => void;
  grantToggleAllowed: () => void;
};

const PageAppBar: React.FC<Props> = ({
  collapsed,
  role,
  grantToggleAllowed,
  toggle,
}) => {
  console.log("in page appbar");
  console.log("grant toggle allowed function", grantToggleAllowed);
  let imageClasses = "sidebar__img";
  if (collapsed) {
    imageClasses = "sidebar__img hide";
  }
  var index = sidebarOptions.findIndex((item) => item.role === role);

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth="5rem"
        onBreakpoint={(broken) => {
          console.log("broken in sidebar", broken);
          console.log("toggle allowed in sidebar", grantToggleAllowed);
          console.log("collapsed in sidebar", collapsed);
          if(!broken){ if(collapsed){
            toggle();
            grantToggleAllowed()
          }}
          if (collapsed && broken) {grantToggleAllowed(); }
          else if(broken && !collapsed){
            toggle();
            console.log("collapsed is now after hitting breakpoing", collapsed);
            grantToggleAllowed();
            toggle()
          }
        }}
      >       
        {console.log("grant toggle allowed", grantToggleAllowed)}
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
