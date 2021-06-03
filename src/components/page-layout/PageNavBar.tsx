import React from "react";
import "./PageNavBar.css";
import { Avatar } from "antd";
import { MessageOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";
import ProfileCard from "./ProfileCard";
import ReactTooltip from "react-tooltip";

type Props = {
  toggle: () => void;
};

const PageNavBar: React.FC<Props> = ({ toggle }) => {
  return (
    <div className="navbar">
      <div className="navbar__item icon" onClick={toggle}>
        <MenuOutlined />
      </div>
      <div className="navbar__item icon spacer">none</div>
      <div className="navbar__item icon">
        {" "}
        <BellOutlined />
      </div>
      <div className="navbar__item icon">
        {" "}
        <MessageOutlined />
      </div>
      <div className="navbar__item icon">
        <Avatar className="avatar" size="large" data-tip data-for="registerTip">
          S
        </Avatar>
      </div>
      <ReactTooltip id="registerTip" place="bottom" data-toggle="tooltip">
        <ProfileCard />
      </ReactTooltip>
    </div>
  );
};

export default PageNavBar;
