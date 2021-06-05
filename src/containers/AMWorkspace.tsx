import React from "react";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

function AMWorkspace() {
  return (
    <div>
      <Layout
        style={{ padding: "0 24px 24px" }}
        className="site-layout-background"
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 450,
            backgroundColor: "#FFE4C4",
            color: "black",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Account manager workspace
        </Content>
      </Layout>
    </div>
  );
}

export default AMWorkspace;
