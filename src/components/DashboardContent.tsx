<<<<<<< HEAD
import { data } from "./DashboardData";
import React from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import Breadcrumbs from "./Breadcrumbs";
import "../styles/DashboardStyle.css";

const { Content } = Layout;

if (data[0].role === "Recruiters") {
  var recruiter = data[0];
}
if (data[1].role === "Acoount Manager") {
  var accManager = data[1];
}
if (data[2].role === "HR") {
  var hr = data[2];
}
if (data[3].role === "Leader") {
  var leader = data[3];
}

function DashboardContent() {
  return (
    <Row>
      <Layout>
        <Content className="content">
          <Breadcrumbs />
          <div className="background">
            <div className="ant-row">
              <div className="ant-col ant-col-6">
                <Card
                  className="card"
                  style={{ background: "#e6f7ff" }}
                  hoverable
                >
                  <h1 className="bigNumbers">{recruiter.userCount}</h1>
                  <h4>{recruiter.role}</h4>
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
=======
import { data } from "../data";
import React from 'react'
import { Layout, Breadcrumb, Row, Card } from "antd";
import Breadcrumbs from "./Breadcrumbs"

const { Content } = Layout;


if (data[0].role === "Recruiters") {
    var recruiter = data[0];
}
if (data[1].role === "Acoount Manager") {
    var accManager = data[1];
}
if (data[2].role === "HR") {
    var hr = data[2];
}
if (data[3].role === "Leader") {
    var leader = data[3];
}

function DashboardContent() {
    return (
        <Row>
            <Layout>
                <Content className="content">
                   <Breadcrumbs/>
                    <div className="background">
                        <div className="ant-row">
                            <div className="ant-col ant-col-6">
                                <Card
                                    className="card"
                                    style={{ background: "#e6f7ff" }}
                                    hoverable
                                >
                                    <h1 className="bigNumbers">{recruiter.userCount}</h1>
                                    <h4>{recruiter.role}</h4>
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

    )
>>>>>>> 4692081473fc8481a927df6c200e3fa74f99b5bd
}

export default DashboardContent;
