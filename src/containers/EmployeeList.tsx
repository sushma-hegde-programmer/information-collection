import { Row, Table, Tag, Switch, Col, Space, Button, Typography  } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Search from 'antd/lib/input/Search';
import EmployeeColumn from '../components/EmployeeColumn'
import { TableColumn } from '../types';
const { Title } = Typography;



type State = {
    employeelist:[],
    pagination: {
        current: number,
        pageSize:number
    },
    loading: boolean,
    order: string,
    field: string,
    query:string,
}
    
class EmployeeList extends React.Component<State> {
    state: State = {
        employeelist: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
        order: "ASC",
        field: "Id",
        query:""
        
    }

    componentDidMount() {
        this.getData(this.state.pagination, this.state.field, this.state.order, this.state.query);
    }

    async fetchEmployee() {
        
    }

    async getData(pagination:object, field:string, order:string, query:string ) {
        try {
            let tabledata:any=[];
            const { data } = await EmployeeService.getEmployees(field, order,query);
            data.map((value: any, key: any) => {
                console.log(value.firstName, "iteration", key);
                 const tabledatarow:any =
                    {
                    fullName: { firstname: value.firstName, lastname: value.lastName },
                    email: value.email,
                    id: key+1,
                    managerName: value.managerName,
                    role: [value.userRole],
                    }
                
                const pushRowToTable = () => {
                    tabledata.push(tabledatarow)
                }

                pushRowToTable()
                
                // console.log((tabledatarow.firstName)+"tablerow")
            })
            console.log(tabledata+"tablerow")
            tabledata.forEach((table:any) => console.log(table));
            
            this.setState({
                employeelist: tabledata,
            })
            
        } catch (error) {
            console.log(error)
        }
        
    }

    handleTableChange = async (pagination: any, filters: any, sorter: any) => {
        const sorterCaps = (sorter.order == "ascend") ? 'ASC' : 'DESC';
        
        if (sorter.field == "fullName") {
            sorter.field = "firstName"
        }
        
        await this.setState({
            field: sorter.field,
            order: sorterCaps
        })
    
        this.getData(pagination, this.state.field, this.state.order, this.state.query)
        console.log('changed')
        console.log(filters)
        console.log(pagination)
        console.log(sorter.field)
        console.log(this.state.field, "fildeeeeeee")

    };

    onSearch = async(value: any) => {
        console.log(value + "search value")
        await this.setState({ query: value })
        this.setState({loading:true})
        this.getData(this.state.pagination, this.state.field, this.state.order, this.state.query)
        this.setState({loading:false})
    };

    

    render() {
        const { employeelist, pagination, loading } = this.state;
        
        return (
            <>
            <Row justify="space-around" align="middle">
                
                    <Col span={12}>
                        <Title level={2}>Employees</Title>
                    </Col>
                    <Col span={12}>
                        <Space >
                            <Search placeholder=" search" style={{ width: 390 }} onSearch={this.onSearch} enterButton />
                            <Space >
                                <Button href="/createuser" type="primary"><PlusOutlined />Add User</Button>
                            </Space>
                        </Space>
            
                    </Col>
               
                    {/* <Col span={8} >
                        
                    </Col> */}
                
            </Row>
            <Row >
                <Col span={24} >

                    <Table
                        dataSource={employeelist}
                        columns={EmployeeColumn}
                        pagination={pagination}
                        onChange={this.handleTableChange}
                        loading={loading}
                    />
                    
                </Col>
            </Row>
            </>
        )
    }
}

export default EmployeeList;
