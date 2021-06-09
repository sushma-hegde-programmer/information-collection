import {
  Row,
  Table,
  Tag,
  Switch,
  Col,
  Space,
  Button,
  Typography,
  Layout,
  Breadcrumb,
} from "antd";
import React from "react";
import "antd/dist/antd.css";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Search from "antd/lib/input/Search";
import EmployeeColumn from "../components/EmployeeColumn";
import { TableColumn } from "../types";

import DisplayBreadcrumb from "../components/content/breadcrumb/DisplayBreadcrumb";
import EmployeeBreadcrumb from "../components/EmployeeBreadcrumb";
import "../styles/EmployeeList.css";
import "../styles/Employee.css";
const { Title } = Typography;

const { Content } = Layout;
type State = {
  employeelist: [];
  pagination: {
    current: number;
    pageSize: number;
  };
  loading: boolean;
  order: string;
  field: string;
  query: string;
  role: string;
};

class EmployeeList extends React.Component<State> {
  state: State = {
    employeelist: [],
    pagination: {
      current: 1,
      pageSize: 4,
    },
    loading: false,
    order: "ASC",
    field: "Id",
    query: "",
    role: "",
  };

  componentDidMount() {
    this.getData(
      this.state.pagination,
      this.state.field,
      this.state.order,
      this.state.query,
      this.state.role
    );
  }

  async fetchEmployee() { }

  async getData(
    pagination: object,
    field: string,
    order: string,
    query: string,
    role: string
  ) {
    try {
      let tabledata: any = [];
      //pagination added
      let pagingdata: any = [];

      pagingdata = Object.values(pagination);

      const { data } = await EmployeeService.getEmployees(
        field,
        order,
        query,
        role
      );
      data.map((value: any, key: any) => {
        console.log(value.firstName, "iteration", key);
        const tabledatarow: any = {
          fullName: { firstname: value.firstName, lastname: value.lastName },
          email: value.email,
          id: key + 1,
          managerName: value.managerName,
          role: [value.userRole],
        };

        const pushRowToTable = () => {
          tabledata.push(tabledatarow);
        };

        pushRowToTable();
      });
      console.log(tabledata + "tablerow");
      tabledata.forEach((table: any) => console.log(table));

      this.setState({
        employeelist: tabledata,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleTableChange = async (pagination: any, filters: any, sorter: any) => {
    const sorterCaps = sorter.order == "ascend" ? "ASC" : "DESC";
    //pagination added
    let pagingdata: any = [];

    pagingdata = Object.values(pagination);
    this.state.pagination.current = pagingdata[0];

    console.log(this.state.pagination.current);

    if (sorter.field == "fullName") {
      sorter.field = "firstName";
    }
    //filters added
    if (filters.role == null) filters.role = "";
    else {
      let RoleValue: string;

      RoleValue = "";

      filters.role.forEach(function (value: any) {
        RoleValue += "'" + value + "',";
      });
      RoleValue += "''";
      filters.role = RoleValue;
      console.log(RoleValue);
    }

    await this.setState({
      field: sorter.field,

      // role: filters.field,
      order: sorterCaps,
    });

    this.getData(
      pagination,
      this.state.field,
      this.state.order,
      this.state.query,
      filters.role
    );

    console.log(this.state.role);
    console.log(filters.role);
    console.log(this.state.pagination.pageSize);
    console.log(sorter.field);
  };

  onSearch = async (value: any) => {
    console.log(value + "search value");
    console.log(this.state.role + "role value");
    await this.setState({ query: value });
    this.setState({ loading: true });
    this.getData(
      this.state.pagination,
      this.state.field,
      this.state.order,
      this.state.query,
      this.state.role
    );
    this.setState({ loading: false });
  };

  render() {
    const { employeelist, pagination, loading } = this.state;
    var breadcrumbText: string[] = ["My Worspace", "Manage Employees"];

    return (
      <>
        <Layout>
          <Content style={{ padding: "0 50px" }}>
            <DisplayBreadcrumb breadcrumbText={breadcrumbText} />
            <div className="employee-list">
              <Row align="middle" justify="space-between">
                <Col span={8}>
                  <Title level={2}>Employees</Title>
                </Col>
                <div className="space"></div>
                <Col span={11} offset={14} className="space">
                  <Space>
                    <Search
                      placeholder=" search"
                      onSearch={this.onSearch}
                      enterButton
                    />
                    <Space>
                      <Link to="/createuser">
                        <Button type="primary">
                          <PlusOutlined />
                          Add User
                        </Button>
                      </Link>
                    </Space>
                  </Space>
                </Col>

                {/* <Col span={8} >
                        
                    </Col> */}
              </Row>
              <Row>
                <Col span={24}>
                  <Table
                    dataSource={employeelist}
                    columns={EmployeeColumn}
                    pagination={pagination}
                    onChange={this.handleTableChange}
                    loading={loading}
                  />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}

export default EmployeeList;
