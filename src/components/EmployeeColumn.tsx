import { Space, Switch, Tag } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined} from '@ant-design/icons';

const EmployeeColumn = [
        {
            title: 'S/No',
            dataIndex: 'id',
            key: 'id',
            
        },    
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'fullName',
            sorter: true,
            render: (fullName:any) => `${fullName.firstname} ${fullName.lastname}`,
            
        },
         {
            title: 'Email Id',
            dataIndex: 'email',
            key: 'email',
        },
          {
            title: 'Rept.Mangr',
            dataIndex: 'managerName',
            key: 'managerName',
            sorter: true,
            render: (fullName: any) => (!fullName) ? "No Manager" : `${ fullName }`,
        },
          {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (roles:any) => (
            <>
                {roles.map((role:any) => {
                let color = role.length > 5 ? 'geekblue' : 'green';
                if (role === 'Recruiter') {
                    color = 'volcano';
                    }
                if (role === 'Leader') {
                    color = 'cyan';
                    }
                if (role === 'BDM') {
                    color = 'geekblue';
                    }
                if (role === 'ADMIN') {
                    color = 'magenta';
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
                { text: 'Leader', value: 'leader' },
                { text: 'Accountant', value: 'accountant' },
                { text: 'HR', value: 'hr' },
                { text: 'Recruiter', value: 'recruiter' },
            ],
            },
          
          {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: () =>
                  <>
                      <Space align="center" size='large'>
                        <Link to='/admin'>
                        <EditOutlined style={{ fontSize: '25px'}}/>
                        </Link>
                        
                        <Link to='/admin'>
                        <Switch ></Switch>
                        </Link>
                      </Space>
                    
                </>,
        },
]
        
export default EmployeeColumn;