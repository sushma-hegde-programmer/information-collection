import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

type Props = {
  name: string;
  icon: any;
  route: string;
};
const DisplayItem: React.FC<Props> = ({ name, icon, route }) => {
  var type = "menu";

  function renderOnBasisOfType(type: string) {
    if (type === "menu") {
      return (
        <Menu
          className="sidebar__menu"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item className="sidebar__item" id={name} key={name} icon={icon}>
            <NavLink className="sidebar__item navlink" exact to={route}>
              {name}
            </NavLink>
          </Menu.Item>
        </Menu>
      );
    } //else if (type === "submenu") {
    // return (
    //   <>
    //     <Menu.SubMenu title="Details">
    //       <Menu.Item className="sidebar__item" key="work">
    //         <NavLink className="sidebar__item navlink" exact to="/Work">
    //           Work
    //         </NavLink>
    //       </Menu.Item>
    //     </Menu.SubMenu>
    //   </>
    // );
    // }
  }

  return <div>{renderOnBasisOfType(type)}</div>;
};

export default DisplayItem;
