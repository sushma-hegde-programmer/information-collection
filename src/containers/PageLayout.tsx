import React, { useState } from "react";
import { Layout } from "antd";
import PageSideBar from "../components/page-layout/sidebar/PageSideBar";
import PageNavBar from "../components/page-layout/navbar/PageNavBar";
import "../styles/PageLayout.css";

const { Content, Footer } = Layout;

type Props = {
  role: string;
};

const PageLayout: React.FC<Props> = ({ ...props }) => {
  const { role } = props;
  console.log("role", role);
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    //to children for this parent component are PageSideBar and PageNavBar, pass the properties to both children
    <Layout>
      <PageSideBar collapsed={collapsed} role={role} />
      <Layout>
        <PageNavBar toggle={toggle} />
        <Content className="pagelayout__content" {...props}></Content>
        <Footer className="pagelayout__footer">
          © Careator Technologies. All rights reserved
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
