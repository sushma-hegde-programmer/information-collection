import React from "react";
import PageLayout from "./containers/PageLayout";
import TestContentPage from "./components/TestContentPage";
import "./App.css";
import { MessageOutlined, BellOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import AdminPageNavBar from "./components/page-layout/AdminPageNavBar";

function App() {
  //const role=//from backend
  return (
    // <div>
    //   <PageLayout>
    //     <TestContentPage />
    //   </PageLayout>
    // </div>

    <AdminPageNavBar />

    // <div>
    //   <h1 className="hello">hello</h1>
    // </div>

    // <Menu>
    //   <Menu.Item
    //     className="men_it"
    //     icon={<MessageOutlined style={{ fontSize: "40%", color: "blue" }} />}
    //   ></Menu.Item>
    // </Menu>
  );
}

export default App;
