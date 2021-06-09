import React from "react";
import { Layout, Breadcrumb } from "antd";
import DisplayBreadcrumb from "../components/content/breadcrumb/DisplayBreadcrumb";
const { Content } = Layout;

function AdminWorkspace() {
  var breadcrumbText: string[] = ["My Workspace"];
  return (
    <div>
      <Layout
        style={{ padding: "0 24px 24px" }}
        className="site-layout-background"
      >
        <DisplayBreadcrumb breadcrumbText={breadcrumbText} />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 450,
            backgroundColor: "rgb(217 214 212)",
            color: "black",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Admin workspace
        </Content>
      </Layout>
    </div>
  );
}

export default AdminWorkspace;
