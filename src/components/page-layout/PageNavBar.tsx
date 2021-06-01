import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { MenuOutlined, MessageOutlined, BellOutlined } from "@ant-design/icons";
import "../../styles/NavBarStyle.css";

const { Header } = Layout;

function PageNavBar() {
  return (
    <Header className="navbar_header" style={{ backgroundColor: "#87bce8" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        style={{ backgroundColor: "#87bce8" }} //float: "right"
        mode="horizontal"
      >
        <Menu.Item
          key="1"
          icon={<MenuOutlined style={{ fontSize: "170%" }} />}
        ></Menu.Item>

        <Menu.Item
          key="2"
          icon={<BellOutlined style={{ fontSize: "170%" }} />}
        ></Menu.Item>
        <Menu.Item
          key="3"
          icon={<MessageOutlined style={{ fontSize: "170%" }} />}
        ></Menu.Item>
        <Avatar
          size="large"
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        >
          S
        </Avatar>
      </Menu>
    </Header>
  );
}

export default PageNavBar;
