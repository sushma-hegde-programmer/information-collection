import React from "react";
import { Layout, Menu, Avatar } from "antd";
import { MenuOutlined, MessageOutlined, BellOutlined } from "@ant-design/icons";
//import styles from '../../styles/NavBarStyle.less';

const { Header } = Layout;

function PageNavBar() {
  return (
    <>
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
    </>
  );
}

export default PageNavBar;
