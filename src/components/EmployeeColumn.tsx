import { Space, Switch, Tag } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";

const EmployeeColumn = [
  {
    title: "S/No",
    dataIndex: "id",
    key: "id",
    render: (id: any) => `${id.sno}`,
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
    render: (fullName: any) => (!fullName ? "-" : `${fullName}`),
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
      { text: "Admin", value: "1" },
      { text: "Leader", value: "2" },
      { text: "BDM", value: "3" },
      { text: "HR", value: "4" },
      { text: "Recruiter", value: "5" },
    ],
  },

  {
    title: "Actions",
    dataIndex: "id",
    key: "id",
    render: (id: any, record: any) => (
      <>
        <Space align="center" size="large">
          <Link to={`/update/${record.id.userId}`}>
            <EditOutlined style={{ fontSize: "25px" }} />
          </Link>

          <Link
            to={{
              pathname: "/Admin/delete-employee",
              state: { record: record },
            }}
          >
            <DeleteOutlined style={{ fontSize: "25px" }} />
          </Link>
        </Space>
      </>
    ),
  },
];

export default EmployeeColumn;
