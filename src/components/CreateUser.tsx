import { message, Form, Input, Select, Button, Space, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import UserService from "../services/UserService";
import { Typography } from "antd";
import { RoleType, UserType, EmployeeType } from "../types";
import { validateLocaleAndSetLanguage } from "typescript";
import { OmitProps } from "antd/lib/transfer/ListBody";
const { Title } = Typography;
const { Option } = Select;
type LayoutType = Parameters<typeof Form>[0]["layout"];

type Props = {
    rolelist: RoleType[];
    click: (value: any) => void;
    reports: [];
};

const CreateUser: React.FC<Props> = ({ rolelist, click, reports }) => {
    const [formLayout] = useState<LayoutType>("vertical");
    const [email, changeEmail] = useState("");
    const [mobile, changeMob] = useState(0);
    const [report, changeReport] = useState([]);

    const formItemLayout =
        formLayout === "vertical"
            ? {
                  labelCol: { span: 4 },
                  wrapperCol: { span: 6 },
              }
            : null;

    const onFinish = async (values: any) => {
        console.log(values);
        const {
            fname,
            lname,
            mobphone,
            homenumber,
            manageId,
            email,
            designation,
            role,
        } = values;

        console.log(fname, lname);
        const data = {
            firstName: fname,
            lastName: lname,
            mobile: mobphone,
            email: email,
            roleId: role,
            managerId: manageId,
            designation: designation,
            homePhone: homenumber,
        };
        const test1 = () => {
            console.log("test1 start");
            const employee = UserService.createEmployee(data);
            console.log("test1 end");
        };
        const test1ok = test1();
        message.success("User Create successfully");
    };

    const createUser = (e: any) => {
        console.log(email, mobile);
        const data = {
            firstName: "arsh",
            lastName: "salim",
            mobile: mobile,
            email: email,
            roleId: 4,
            managerId: 100,
            designation: "HR",
            homePhone: 2446553,
        };
        if (email && mobile) {
            const user = UserService.createUser(data);
        }
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

    const emailChange = (e: any) => {
        changeEmail(e.target.value);
    };

    const mobileChange = (e: any) => {
        changeMob(e.target.value);
    };

    const getEmployee = async (value: any) => {
        const empdata: any = await UserService.getEmployee(value);
        console.log(empdata);
        changeReport(empdata.data);
        console.log(report);
    };

    const getValue = (val: any) => {
        click(val);
    };

    return (
        <Content
            className="site-layout-background"
            style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
            }}
        >
            <Title level={2}>Create Employee</Title>

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
                    <Col xs={24} xl={11}>
                        <Form.Item
                            label="First Name"
                            name="fname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter First Name",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter First Name"
                                style={{
                                    width: 400,
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={13}>
                        <Form.Item
                            label="Last Name"
                            name="lname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Last Name",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter Last Name"
                                style={{
                                    width: 400,
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={11}>
                        <Form.Item
                            label="Designation"
                            name="designation"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Designation",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter Designation"
                                style={{
                                    width: 400,
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={13}>
                        <Form.Item
                            name="email"
                            label="Email ID"
                            rules={[
                                {
                                    required: true,
                                    type: "email",
                                    message: "Please Enter Email Id",
                                },
                            ]}
                        >
                            <Input
                                placeholder="Enter Email Id"
                                style={{
                                    width: 400,
                                }}
                                onChange={(e) => {
                                    emailChange(e);
                                }}
                                onBlur={(e) => {
                                    createUser(e);
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={11}>
                        <Form.Item
                            name="mobphone"
                            label="Mobile Number"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Mobile Number",
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{ width: 400 }}
                                placeholder="Enter Mobile Number"
                                onChange={(e) => {
                                    mobileChange(e);
                                }}
                                onBlur={(e) => {
                                    createUser(e);
                                }}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={13}>
                        <Form.Item label="Phone Number" name="homenumber">
                            <Input
                                addonBefore={phoneHome}
                                style={{ width: 400 }}
                                placeholder="Enter Phone Number"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={11}>
                        <Form.Item
                            label="Role"
                            name="role"
                            rules={[
                                {
                                    required: true,
                                    message: "Please Select Role",
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select Role"
                                style={{ width: 400 }}
                                onSelect={(value) => {
                                    click(value);
                                }}
                            >
                                {rolelist.map((val) => (
                                    <Select.Option value={val.id} key={val.id}>
                                        {" "}
                                        {val.description}{" "}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} xl={13}>
                        <Form.Item
                            name="manageId"
                            label="Reporting Manager"
                            rules={[
                                {
                                    message: "Please Select Reporting Manager",
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select Reporting Manager"
                                style={{ width: 400 }}
                            >
                                {reports.map((val: any) => (
                                    <Select.Option
                                        value={val.userId}
                                        key={val.id}
                                    >
                                        {val.firstName + " " + val.lastName}
                                    </Select.Option>
                                ))}
                                {/* <Select.Option></Select.Option> */}
                            </Select>
                            {/* {reports.map((val: any) => 
                  <div key={val.id}>{val.firstName}</div>   
              )} */}
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Space align="center">
                        <Button
                            htmlType="button"
                            onClick={onReset}
                            type="primary"
                            danger
                        >
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Content>
    );
};

export default CreateUser;
