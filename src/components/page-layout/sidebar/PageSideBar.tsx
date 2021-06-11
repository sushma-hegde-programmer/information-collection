import React from "react";
import { Layout, Menu } from "antd";
import careator_logo from "../../../images/careator-logo.svg";
import { NavLink } from "react-router-dom";
import sidebarOptions from "./SidebarOptions";
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
  let imageClasses = "sidebar__img";
  let sidebarItemClass ="sidebar__item";  
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
          if(!broken){ if(collapsed){
            toggle();
            grantToggleAllowed();
          }}
          if (collapsed && broken) {grantToggleAllowed(); }
          else if(broken && !collapsed){
            toggle();           
            grantToggleAllowed();
            toggle();
          }
        }}
      >           
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
          {/* if you write separate component to display menu Item, <Menu.Item></Menu.Item> should be written in that component
          that menu item will remain selected once it is selected. The ant default class will not be changed even though you select another menu item.
          So if you give background color for selected class that won't be changed even if you select other menu item
          So it is better to write in map function than writing separate component and then importing it inside <Menu></Menu>*/}
          {sidebarOptions[index].routes.map(function (item, i) {
            return (
              <Menu.Item
                id={item.option}
                className={`${sidebarItemClass} ${item.option}`}
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
