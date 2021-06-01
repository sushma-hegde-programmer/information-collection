import React, { useState } from "react";
import { Layout, Menu } from "antd";
import PageNavBar from "../components/page-layout/PageNavBar";
import PageSideBar from "../components/page-layout/PageSideBar";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
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
          <Menu mode="horizontal" className="menu">
            <Menu.Item>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Menu.Item>
            <PageNavBar />
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
