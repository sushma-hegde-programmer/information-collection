import { Space, Switch, Tag } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";

const EmployeeColumn = [
  {
    title: "S/No",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
    sorter: true,
    render: (fullName: any) => `${fullName.firstname} ${fullName.lastname}`,
  },
  {
    title: "Email Id",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Rept.Mangr",
    dataIndex: "managerName",
    key: "managerName",
    sorter: true,
    render: (fullName: any) => (!fullName ? "No Manager" : `${fullName}`),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (roles: any) => (
      <>
        {roles.map((role: any) => {
          let color = role.length > 5 ? "geekblue" : "green";
          if (role === "Recruiter") {
            color = "volcano";
          }
          if (role === "Leader") {
            color = "cyan";
          }
          if (role === "BDM") {
            color = "geekblue";
          }
          if (role === "ADMIN") {
            color = "magenta";
          }
          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
    filters: [
      { text: "Admin", value: "Admin" },
      { text: "Leader", value: "Leader" },
      { text: "BDM", value: "BDM" },
      { text: "HR", value: "HR" },
      { text: "Recruiter", value: "Recruiter" },
    ],
  },

  {
    title: "Actions",
    dataIndex: "id",
    key: "id",
    render: (id: any) => (
      <>
        <Space align="center" size="large">
          <Link to={`/update/${id}`}>
            <EditOutlined style={{ fontSize: "25px" }} />
          </Link>

          <Link to="/admin">
            <Switch></Switch>
          </Link>
        </Space>
      </>
    ),
  },
];

export default EmployeeColumn;
