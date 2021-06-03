import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import PageNavBar from "../components/page-layout/PageNavBar";
import PageSideBar from "../components/page-layout/PageSideBar";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  BellOutlined,
} from "@ant-design/icons";
import "../styles/AppBarStyle.css";

const { Content, Header } = Layout;

function PageLayout({ ...props }) {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };
  return (
    <Layout>
      <PageSideBar collapsed={collapsed} />
      <Layout>
        <Header className="header">
          <Menu mode="horizontal" className="menu" style={{ float: "right" }}>
            <Menu.Item>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Menu.Item>
            <Menu.Item
              className="nav-menu-item"
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
            {/* <PageNavBar /> */}
          </Menu>
        </Header>
        <Content
          className="site-layout-background"
          style={{ padding: "0 24px", height: "100vh" }}
          {...props}
        ></Content>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
