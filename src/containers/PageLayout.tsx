import React, { useState } from "react";
import { Layout } from "antd";
import PageSideBar from "../components/page-layout/PageSideBar";
import PageNavBar from "../components/page-layout/PageNavBar";

const { Content } = Layout;

function PageLayout({ ...props }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    //to children for this parent component are PageSideBar and PageNavBar, pass the properties to both children
    <Layout>
      <PageSideBar collapsed={collapsed} />
      <Layout>
        <PageNavBar toggle={toggle} />
        <Content className="content" {...props}></Content>
      </Layout>
    </Layout>
  );
}

export default PageLayout;
