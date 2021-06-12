import React from "react";
import { Layout } from "antd";
import DisplayBreadcrumb from "../components/content/breadcrumb/DisplayBreadcrumb";
import { Typography } from 'antd';
import { BulbFilled } from "@ant-design/icons";
import "../styles/Workspace.css";

const { Title } = Typography;
const { Content } = Layout;

function Workspace() {
  var breadcrumbText: string[] = ["My Workspace"];

  const twelveHourFormatter = (time:any) => {
    let hour = (time.split(':'))[0]
    let min = (time.split(':'))[1]
    let part = hour > 12 ? 'pm' : 'am';  
    min = (min+'').length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour+'').length == 1 ? `0${hour}` : hour;
    return (`${hour}:${min} ${part}`)
  }
  
  var firstName=localStorage.getItem("firstName");
  var lastName=localStorage.getItem("lastName");
  var lastLogin = localStorage.getItem("lastLogin");
  var loginDate=lastLogin?.substring(0,15); 
  var timeString=lastLogin?.substring(17,24)
  // console.log("convert 24 hour format to 12 hr format",twelveHourFormatter("16:30:00")) //check whether it is displaying correct value or not
  var loginTimeIndian=twelveHourFormatter(timeString);  

  return (
    <div>
      <Layout       
        className="workspace"
      >
        <DisplayBreadcrumb breadcrumbText={breadcrumbText} />
        <Content
          className="workspace__content"          
          >
        <Title> Welcome {firstName} {lastName}</Title> 
        <Title level={4}>Your last login was on {loginDate} {loginTimeIndian}</Title>       
        </Content>
      </Layout>
    </div>
  );
}

export default Workspace;
