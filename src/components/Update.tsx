import { message, Form, Input, Select, Button, Space, Col, Row, Card } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import {useHistory} from "react-router";
import { Typography } from "antd";
import { RoleType } from "../types";
import EmployeeService from "../services/EmployeeService";
import UserService from "../services/UserService";
import DisplayBreadcrumb from "../components/content/breadcrumb/DisplayBreadcrumb";
// import getEmployeeById from "../services/EmployeeService";
const { Title } = Typography;
const { Option } = Select;

type LayoutType = Parameters<typeof Form>[0]["layout"];

type Props = {
  rolelist: RoleType[];
  data: any;
  emails: string;
  mobiles: number;
  managers: number;
  click: (value: any) => void;
  reports: [];
  usersId: string;
  managersName: string;
  designations: string;
};

const Update: React.FC<Props> = ({ rolelist, data, emails, mobiles, managers, click, reports, usersId, managersName,designations }) => {
  const [formLayout] = useState<LayoutType>("vertical");
  const [form] = Form.useForm();
  const [empData, changeEmp] = useState();
  const [userData, changeUser] = useState({ mobile: 0 });
  const [initRole, changeRole] = useState(designations);
  const history = useHistory();

  const noRerender = () => {
    if (data != empData) {
      changeEmp(data);
      changeUser(data.userId);
      //console.log("Manager Id",managers);
      console.log("Update line 37", empData)
      console.log("Managers first name: ", managersName);
      form.setFieldsValue({
        fname: data.firstName,
        lname: data.lastName,
        designation: data.designation, 
        mobnumber: mobiles,
        home: data.homePhone,
        email: emails,
        //role: data.managerId = 1 ? "Leadership/Management" : data.managerId = 2 ? "Account Manager" : data.managerId = 3 ? "Human Resource" : data.managerId = 4 ? "Recruiter" : data.managerId = 5 ? "Candidate" : "Admin",
        // manageId: EmployeeService.getEmployeeNameById(data.managerId).then(() => { 
        //   console.log(data);
        // })
        //manageId: managersName
      });
    }
  }; 

  // React.useEffect(() => {
  //   form.setFieldsValue({
  //     fname: "Bamboo",
  //   });
  // }, []);

  noRerender();

  const defaultRole = (desig: string) => {
    console.log("Manager comes in default role", desig);
      if(desig==="leader"){
        return "Leadership/Management"
      }
      else if(desig==="bdm"){
        return "Account Manager/BD/CRM"
      }
      else if(desig==="hr"){
        return "Human Resource"
      }
      else if(desig==="recruiter"){
        return "Recruiter"
      }
      else if(desig==="candidate"){ 
        return "Candidate"
      }
      else {
        return "Administrator"
      }
      
  }

  const formItemLayout =
    formLayout === "vertical"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 6 },
        }
      : null;

  const onFinish = async (values: any) => {
    const {
      fname,
      lname,
      mobnumber,
      home,
      manageId,
      email,
      designation,
      role,
    } = values;

    const data = {
      firstName: fname,
      lastName: lname,
      mobile: mobnumber,
      email: email,
      roleId: role,
      managerId: manageId,
      designation: designation,
      homePhone: home,
      userId : usersId
    };
    console.log("Datasent for updation",data);
    const updateEmp = await UserService.updateEmployee(data); 

    message.success("User Update successfully");
    history.push("/admin/manage-employees");
    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
  console.log(data);
  var breadcrumbText: string[] = ["My Worspace", "Manage Employees", "Update"];
  return (
    <Layout>
    <DisplayBreadcrumb breadcrumbText={breadcrumbText} />
    <Card title="" bordered={true} style={{ width: "100%", margin: 10 }}>
      {console.log(rolelist)}
      <Title level={2}>Update Employee</Title>
      {console.log(designations)}
      <Form
        {...formItemLayout}
        layout={formLayout}
        name="basic"
        initialValues={{
          remember: true,
          // fname: empData.firstName,
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
              name="email"
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
                defaultValue={defaultRole(designations.toLowerCase())}  
                key={designations}
                onSelect={(value) => { 
                  click(value);
                }}
                // onChange={(value) => {
                //   click(value);
                // }}
              >
                {rolelist.map((val) => (
                  <Select.Option value={val.id} key={val.id}>
                    {val.description}
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
                defaultValue={`${managersName}`}  
                key={`${managersName}`} 
              >
                {reports.map((val: any) => (
                    <Select.Option value={val.userId} key={val.id}>
                      {val.firstName + " " + val.lastName}
                    </Select.Option>
                ))}
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
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
    </Layout>
  );
};

export default Update;
