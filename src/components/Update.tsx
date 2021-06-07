import { message, Form, Input, Select, Button, Space, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { Typography } from "antd";
import { RoleType } from "../types";
const { Title } = Typography;
const { Option } = Select;

type LayoutType = Parameters<typeof Form>[0]["layout"];

type Props = {
  rolelist: RoleType[];
};

const CreateUser: React.FC<Props> = ({ rolelist }) => {
  const [formLayout] = useState<LayoutType>("vertical");

  const formItemLayout =
    formLayout === "vertical"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 6 },
        }
      : null;

  const onFinish = async (values: any) => {
    const { fname, lname, designation, homenumber, manageId } = values;

    message.success("User Update successfully");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );
  const phoneHome = (
    <Form.Item name="phonehome" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      {console.log(rolelist)}
      <Title level={2}>Update Employee</Title>

      <Form
        {...formItemLayout}
        layout={formLayout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Row>
          <Col xs={24} xl={12}>
            <Form.Item
              label="First name"
              name="fname"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                placeholder="Enter Name"
                style={{
                  width: 400,
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              label="Last name"
              name="lname"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                placeholder="Enter Name"
                style={{
                  width: 400,
                }}
              />
            </Form.Item>
          </Col>

          <Col xs={24} xl={12}>
            <Form.Item
              label="Designation"
              name="designation"
              rules={[
                {
                  required: true,
                  message: "Please input Designation!",
                },
              ]}
            >
              <Input
                placeholder="Enter Designation!"
                style={{
                  width: 400,
                }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item
              name={["your", "email"]}
              label="Email ID"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input
                placeholder="Enter Email"
                style={{
                  width: 400,
                }}
              />
            </Form.Item>
          </Col>

          {/* 
  <Form.Item name={['empid', 'EmployeementID']} label="EmployeementID" rules={[{ 
      required: true,
      type: 'number' }]}
      style={{ display: 'inline-block' }}
      >
    <InputNumber  style={{
            width: 400,  
        }} placeholder="Enter Designation!"  />
  </Form.Item> */}

          <Col xs={24} xl={12}>
            <Form.Item
              label="Mobile number"
              name="mobnumber"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{ width: 400 }}
                placeholder="Enter Phone number"
              />
            </Form.Item>
          </Col>

          <Col xs={24} xl={12}>
            <Form.Item name="home" label="homenumber">
              <Input
                addonBefore={phoneHome}
                style={{ width: 400 }}
                placeholder="Enter Phone number"
              />
            </Form.Item>
          </Col>
          <Col xs={24} xl={12}>
            <Form.Item label="Role" name="role" rules={[{ required: true }]}>
              <Select
                placeholder="please Select"
                style={{
                  width: 400,
                }}
              >
                {rolelist.map((val) => (
                  <Select.Option value={val.description} key={val.id}>
                    {val.role}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} xl={12}>
            <label>Reporting Manager</label>
            <Form.Item name="manageId" rules={[{ required: true }]}>
              <Select
                placeholder="please Select"
                style={{
                  width: 400,
                }}
              >
                <Select.Option value="Recruiter">Recruiter</Select.Option>
                <Select.Option value="Hr">Hr</Select.Option>
                <Select.Option value="AccountManager">
                  AccountManager
                </Select.Option>
                <Select.Option value="Leader">Leader</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Space align="center">
            <Button htmlType="button" onClick={onReset} type="primary" danger>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default CreateUser;
