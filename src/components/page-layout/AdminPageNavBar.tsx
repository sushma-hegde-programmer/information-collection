import React from "react";
import "./AdminPageNavBar.css";
import { Avatar } from "antd";
import { MessageOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";
import ProfileCard from "./ProfileCard";
import ReactTooltip from "react-tooltip";

function AdminPageNavBar() {
  return (
    <div className="header">
      <div className="item icon">
        <MenuOutlined />
      </div>
      <div className="item icon spacer">none</div>
      <div className="item icon">
        {" "}
        <BellOutlined />
      </div>
      <div className="item icon">
        {" "}
        <MessageOutlined />
      </div>
      <div className="item icon">
        <Avatar
          size="large"
          style={{ backgroundColor: "red" }}
          data-tip
          data-for="registerTip"
        >
          S
        </Avatar>
      </div>
      <ReactTooltip id="registerTip" place="bottom" data-toggle="tooltip">
        <ProfileCard />
      </ReactTooltip>
    </div>
  );
}

export default AdminPageNavBar;
