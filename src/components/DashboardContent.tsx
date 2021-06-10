import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import Breadcrumbs from "./Breadcrumbs";
import "../styles/DashboardStyle.css";
import constants from "../constants";
import axios from "axios";
const url = `${constants.BASE_URL}/userrole/test`;

const { Content } = Layout;

function DashboardContent() {
  const [roleD, setRole] = useState([]);

  useEffect(() => {
    dashboardGetData();
  }, []);

  const dashboardGetData = async () => {
    const response = await axios.get(url);
    setRole(response.data);
  };

  const colourList: string[] = ["#e6f7ff", "#f4ffb8", "#ffccc7", "#d9d9d9"];
  let counter: number = -1;

  return (
    <Row>
      <Layout>
        <Content className="content">
          <Breadcrumbs />
          <div className="background">
            <div className="ant-row dashboard">
              {roleD.map((val: any, counter) => {
                return (
                  <div className="ant-col ant-col-6">
                    <Card
                      className="card"
                      style={{ background: colourList[counter] }}
                      hoverable
                    >
                      <h1 className="bigNumbers">{val.userCount}</h1>
                      <h6>{val.role}</h6>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Content>
      </Layout>
    </Row>
  );
}

export default DashboardContent;
