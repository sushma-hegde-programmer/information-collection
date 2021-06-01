import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { MessageOutlined, BellOutlined } from "@ant-design/icons";
import "../../styles/NavBarStyle.css";

function PageNavBar() {
  return (
    <>
      <Menu.Item
        key="bell"
        icon={<BellOutlined className="nav-icon" />}
      ></Menu.Item>
      <Menu.Item
        key="msg"
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
    </>
  );
}

export default PageNavBar;
