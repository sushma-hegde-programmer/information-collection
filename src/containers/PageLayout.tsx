import React from "react";
import { Layout } from "antd";
import PageNavBar from "../components/page-layout/PageNavBar";
import PageAppBar from "../components/page-layout/PageAppBar";

const { Content } = Layout;

function PageLayout({ ...props }) {
  return (
    <>
      <Layout>
        <PageNavBar />
        <Layout className="site-layout-background">
          <PageAppBar />
          <Content
            className="site-layout-background"
            style={{ padding: "0 24px", height: "100vh" }}
            {...props}
          ></Content>
        </Layout>
      </Layout>
    </>
  );
}

export default PageLayout;
