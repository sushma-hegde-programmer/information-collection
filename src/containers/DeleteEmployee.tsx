import { Button, Col, message, Popconfirm, Radio, RadioChangeEvent, Row, Space } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/typography/Title";
import axios, { AxiosResponse } from "axios";
import React, { SyntheticEvent, useEffect, useState } from "react";
import {Redirect, useLocation} from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import DisplayBreadcrumb from "../components/content/breadcrumb/DisplayBreadcrumb";
import Text from "antd/lib/typography/Text";
import constants  from "../constants";

function DeleteEmployee () {
    let employeeData: any = useLocation();
    console.log(employeeData)
    const role: string = employeeData.state.record.role[0]
    const selectedId: number = employeeData.state.record.id.eid
    const selectedMid: string = employeeData.state.record.id.mid
    const selectedEmail: number = employeeData.state.record.email
    const nameOfSelected:string = `${employeeData.state.record.fullName.firstname} ${employeeData.state.record.fullName.lastname}` 
    let [employees, setEmployees] = useState([]);
    console.log(selectedId)
    
    // const empp = [
    //     {
    //         dateBirth: null,
    //         dateHire: null,
    //         department: null,
    //         designation: "Admin",
    //         email: "mohan@gmail.com",
    //         employeeId: 2,
    //         firstName: "Mohan",
    //         gender: null,
    //         homePhone: "8928929729",
    //         lastName: "k",
    //         managerId: "29dc04ff-433b-4988-b641-447a108fb5f7",
    //         managerName: "Sourav barman",
    //         managerRole: "Admin",
    //         mobile: "498753487534",
    //         userRole: "HR",
    //     },
    //     {
    //         dateBirth: null,
    //         dateHire: null,
    //         department: null,
    //         designation: "Admin",
    //         email: "Pradeep@gmail.com",
    //         employeeId: 2,
    //         firstName: "Pradeep",
    //         gender: null,
    //         homePhone: "8928929729",
    //         lastName: "R",
    //         managerId: "lkadjlss-433b-4988-b641-447a108fb5f7",
    //         managerName: "Sourav barman",
    //         managerRole: "Admin",
    //         mobile: "498753487534",
    //         userRole: "HR",
    //     }
    // ]


    useEffect(() => {
    
        const getData = async (role: string) => {
        // const { data } = await EmployeeService.deleteEmployees(role)
        try {
            const { data } = await EmployeeService.getEmployeesByRole(role)
            // console.log(data, "inside async")
            let listData:any = [];
            data.map((value: any) => {

                const listRow: {} = {
                    firstName: value.firstName,
                    lastName: value.lastName,
                    email: value.email,
                    managerId: value.managerId,
                    userRole: value.userRole,
                    employeeId: value.employeeId
                }
                
                const pushRowToTable = () => {
                    listData.push(listRow);
                };

                pushRowToTable();
            })
                await setEmployees(listData);
            }
            catch (error) {
                console.log(error)
            }      
        }
        
        getData(role)
        // const data2 = getData(role)
             
    },[]);

    const excludeSelected=((value:any)=>value.email != selectedEmail )
    
    const filteredEmployees = employees.filter(excludeSelected);
    console.log(employees,"employeestate")
    // console.log(selectedEmail, "emailllllll")
    
    filteredEmployees.map((val: any, key: number) => { console.log(val.firstName,'role') })

    // const data2 = getData(role).then((res) => { return res })

    // console.log(listData,'after calling')

    var breadcrumbText: string[] = ["Admin", "Delete Employees"];

    let assignedId:number = 0;
    let assignedManagerId: string = '';
    let radioChecked: boolean = false;
    
    const radioChange=((id:number, managerId:string) => {
        console.log(id, managerId,'radiochange')
        assignedId = id
        assignedManagerId = managerId
        radioChecked = true;
    })

    const deleteEmployee = (async(sid:number) => {
        const { data } = await EmployeeService.deleteEmployee(sid)
    })

    const AssignEmployee = (async(id:number, mid:string) => {
        const { data } = await EmployeeService.assignEmployee(id,mid)
    })

    const handleDelete = (async () => {
        // console.log(assignedManagerId, assignedId)
        try {
            if (radioChecked==false) {
            message.info('Please select the new Employee');;
            }
            else {
                await deleteEmployee(selectedId);
                await AssignEmployee(assignedId, selectedMid);
                return(<Redirect push to='/Admin/manage-employees' />)
            }
        } catch (error) {
            console.log(error)
        }
        
    })

    if (filteredEmployees.length == 0) {
        return (
            <>
                <Layout
                    style={{ padding: "0 24px 24px" }}
                    className="site-layout-background">
                    <DisplayBreadcrumb breadcrumbText={breadcrumbText} />
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 450,
                            backgroundColor: "white",
                            color: "black",
                            fontSize: "50px",
                            textAlign: "center",
                        }}
                    >
                        <Row justify='center' align='middle' gutter={16}>
                            <Col span={12}>
                                <Title level={2}>
                                    No other Employee of same role, Please add employee.
                                </Title>
                                
                            </Col>
                        
                        </Row>
                    </Content>
                </Layout>
            </>
        )
    }

    else {

        return (
            <>
                {/* {arr[0]} */}
                <Layout
                    style={{ padding: "0 24px 24px" }}
                    className="site-layout-background"
                >
                    <DisplayBreadcrumb breadcrumbText={breadcrumbText} />
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 450,
                            backgroundColor: "white",
                            color: "black",
                            fontSize: "50px",
                            textAlign: "center",
                        }}
                    >
                        <Row justify='center' align='middle' gutter={16}>
                            <Col span={12}>
                                <Title level={2}>
                                    Select new Employee for
                                </Title>
                            
                            </Col>
                        
                        </Row>

                        <Row justify='center' align='middle' gutter={16}>
                            <Col span={12}>
                                <Title level={3}>
                                    {nameOfSelected}
                                </Title>
                            
                            </Col>
                        
                        </Row>

                        <Row justify='center' align='middle' gutter={16}>
                            <Col span={12} >
                                {/* {emp} */}
                            
                                <Radio.Group>
                                    <Space direction="vertical">
                                        {filteredEmployees.map((value: any, key: number) => {
                                            return (
                                                <Radio value={key} onChange={() => radioChange(value.employeeId, value.managerId)}> <Text strong>{value.firstName} (Role-{value.userRole})</Text></Radio>
                                            )
                                        })}
                                    </Space>
                                </Radio.Group>
                            </Col>
                        </Row>
                        <Row justify='center' align='middle' gutter={16}>
                            <Col span={12}>
                                <Popconfirm title='Are you sure you want to delete and reassign' onConfirm={() => handleDelete()}>
                                    <Button type="primary" style={{ width: '400px' }} danger>
                                        Delete and assign new Employee
                                </Button>
                                </Popconfirm>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            
            </>
        )
    }
}

export default DeleteEmployee;