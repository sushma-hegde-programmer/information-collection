import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  route: string;
};
const DisplayItem: React.FC<Props> = ({ name, route }) => {
  var type = "menu";
  const a = 10;

  function renderOnBasisOfType(type: string) {
    if (type === "submenu") {
      return (
        <Menu>
          <Menu.Item className="sidebar__item" key="work">
            <NavLink className="sidebar__item navlink" exact to="/Work">
              Work
            </NavLink>
          </Menu.Item>
        </Menu>
      );
    } else if (type === "submenu") {
      return (
        <>
          <Menu.SubMenu title="Details">
            <Menu.Item className="sidebar__item" key="work">
              <NavLink className="sidebar__item navlink" exact to="/Work">
                Work
              </NavLink>
            </Menu.Item>
          </Menu.SubMenu>
        </>
      );
    }
  }

  return <div>{renderOnBasisOfType(type)}</div>;
};

export default DisplayItem;
