import { dashboarddata } from "./DashboardData";
import React, { useEffect, useState } from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import Breadcrumbs from "./Breadcrumbs";
import "../styles/DashboardStyle.css";
import DashboardService from "../services/DashboardService";

const { Content } = Layout;

if (dashboarddata[0].role === "Recruiters") {
  var recruiter = dashboarddata[0];
}
if (dashboarddata[1].role === "Acoount Manager") {
  var accManager = dashboarddata[1];
}
if (dashboarddata[2].role === "HR") {
  var hr = dashboarddata[2];
}
if (dashboarddata[3].role === "Leader") {
  var leader = dashboarddata[3];
}

function DashboardContent() {
  const [role, setRole] = useState([])

  useEffect(() => { dashboardGetData() })
  const dashboardGetData = async () => {
    const { data } = await DashboardService.getDashContents()
  //   console.log("data------", data)
    
  }
  // console.log("role------", dashboardGetData);
  return (
    <Row>
      <Layout>
        <Content className="content">
          <Breadcrumbs />
          <div className="background">
            <div className="ant-row dashboard">
              <div className="ant-col ant-col-6">
                <Card
                  className="card"
                  style={{ background: "#e6f7ff" }}
                  hoverable
                >
                  <h1 className="bigNumbers">{role}</h1>
                  <h4>{role}</h4>
                </Card>
              </div>

              <div className="ant-col ant-col-6">
                <Card
                  className="card"
                  style={{ background: "#f4ffb8" }}
                  hoverable
                >
                  <h1 className="bigNumbers">{hr.userCount}</h1>
                  <h4>{hr.role}</h4>
                </Card>
              </div>

              <div className="ant-col ant-col-6">
                <Card
                  className="card"
                  style={{ background: "#ffccc7" }}
                  hoverable
                >
                  <h1 className="bigNumbers">{leader.userCount}</h1>

                  <h4>{leader.role}</h4>
                </Card>
              </div>
              <div className="ant-col ant-col-6">
                <Card
                  className="card"
                  style={{ background: "#d9d9d9" }}
                  hoverable
                >
                  <h1 className="bigNumbers">{accManager.userCount}</h1>
                  <h4>Account Manager</h4>
                </Card>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Row>
  );
}

export default DashboardContent;
