import React, { Component } from "react";
import PropTypes from "prop-types";
import CandidateTable from "../components/CandidateTable";
import Layout from "antd/lib/layout/layout";
import { Breadcrumb, Button, Space } from "antd";
import Search from "antd/lib/transfer/search";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
// const { Content } = Layout;

export default class RecruiterManageCandidates extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  onSearch = () => {
    console.log("hello");
  };

  render() {
    return (
      <>
        <Layout
          style={{ padding: "0 24px 24px" }}
          // className="site-layout-background"
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          {/* <Content
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
        > */}
          <div style={{ backgroundColor: "white", padding: "24px 0 0 24px" }}>
            <h5>Candidate</h5>
            {/* <Search
            placeholder="Search"
            // onSearch={this.onSearch}
            // enterButton
          /> */}
            {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} /> */}
            <Space>
              <Link to="#">
                <Button type="primary">
                  <PlusOutlined />
                  Add Candidate
                </Button>
              </Link>
            </Space>

            <CandidateTable candidateData={this.dataSource} />
          </div>
          {/* </Content> */}
        </Layout>
      </>
    );
  }
}
