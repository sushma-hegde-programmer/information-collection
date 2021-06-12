import React, { useState } from "react";
import "./PageNavBar.css";
import { Avatar,Dropdown} from "antd";
import UserInfo from "./UserInfo";
import {
  MessageOutlined,
  BellOutlined,
  MenuOutlined,
  ConsoleSqlOutlined,
} from "@ant-design/icons";

type Props = {
  toggle: () => void;
  toggleAllowed: boolean;
};
const PageNavBar: React.FC<Props> = ({ toggle, toggleAllowed }) => {  
  const [visible, setVisible] = useState(false);

  const hide = () => {
    setVisible(false);
  };

  return (
    <div className="navbar">
      <div
        className="navbar__item icon"
        onClick={() => {          
          if (toggleAllowed) toggle();
        }}
      >
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
      <Dropdown overlay={UserInfo} placement="bottomRight" arrow>
      <div className="navbar__item icon end-icon">
          <Avatar className="avatar" size="large">
            S
          </Avatar>
        </div>
    </Dropdown>
    </div>
  );
};

export default PageNavBar;
