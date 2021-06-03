import { Button, Popover, Row } from 'antd'
import React from 'react'
import { BellOutlined } from "@ant-design/icons";
import Avatar from 'antd/lib/avatar/avatar';
import "../Styles/style.css"


function Topnav() {
    const content = (
        <div className="popup">
            <Button>Logout</Button>
            <Button>Edit Profile</Button>
        </div>
    );
    return (
       <Row>
           <div className="icons">
                <div className="notify">
                    <BellOutlined />
                </div>
                <div className="logo">
                    <Popover content={content} trigger="hover">
                        <Avatar size="large" >
                            C
                        </Avatar>
                </Popover>
                </div>
                
           </div>
       </Row>
    )
}

export default Topnav
