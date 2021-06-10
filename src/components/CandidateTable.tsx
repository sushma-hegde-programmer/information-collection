import { Table, Tag } from "antd";
import React from "react";

type Props = {
  candidateData: any;
};

const CandidateTable: React.FC<Props> = ({ candidateData }) => {
  const columns = [
    {
      title: "S/No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      filters: [
        {
          text: "John",
          value: "John",
        },
        {
          text: "Mike",
          value: "Mike",
        },
      ],
      onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile No",
      dataIndex: "mobileno",
      key: "mobileno",
    },
    {
      title: "Client Name",
      dataIndex: "clientname",
      key: "clientname",
      sorter: (a: any, b: any) => a.clientname - b.clientname,
    },
    {
      title: "Status",
      dataIndex: "age",
      key: "age",

      render: (age: any) => (
        <>
          {age > 40 ? (
            <Tag color={"green"} key={age}>
              {age}
            </Tag>
          ) : (
            <Tag color={"geekblue"} key={age}>
              {age}
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];
  return (
    <>
      <Table dataSource={candidateData} columns={columns} />
    </>
  );
};
export default CandidateTable;
