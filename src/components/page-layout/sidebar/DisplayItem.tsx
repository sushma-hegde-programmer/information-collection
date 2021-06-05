import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  DashboardOutlined,
  HomeOutlined,
  LaptopOutlined,
} from "@ant-design/icons";

type Props = {
  name: string;
  icon: any;
  route: string;
};
const DisplayItem: React.FC<Props> = ({ name, icon, route }) => {
  console.log("icon is -----------", icon);

  console.log(name, route);
  var type = "menu";
  const a = 10;

  function renderOnBasisOfType(type: string) {
    if (type === "menu") {
      return (
        <Menu>
          <Menu.Item className="sidebar__item" key={name} icon={icon}>
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
