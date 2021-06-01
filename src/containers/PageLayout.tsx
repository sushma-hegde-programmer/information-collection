import React from "react";
import { Layout, Menu } from "antd";
import PageNavBar from "../components/page-layout/PageNavBar";
import PageAppBar from "../components/page-layout/PageAppBar";
import { MenuFoldOutlined } from "@ant-design/icons";
import ContentPage from "../components/ContentPage";

const { Content, Header } = Layout;

function PageLayout({ ...props }) {
  return (
    <Layout>
      <PageAppBar />
      <Layout>
        <Header className="toggle">
          <Menu theme="light" mode="horizontal">
            <Menu.Item>
              {React.createElement(MenuFoldOutlined, {
                className: "trigger",
              })}
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
