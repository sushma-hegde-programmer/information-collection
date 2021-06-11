import React from "react";
import { Menu } from "antd";
import "./UserInfo.css";

function UserInfo() {
  return (
    <Menu className="userinfo">
      <Menu.Item key="view-profile" className="userinfo__item">
        View Profile
      </Menu.Item>
      <Menu.Item
        className="userinfo__item"
        key="sign-out"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Sign Out
      </Menu.Item>
    </Menu>   
  );
}

export default UserInfo;
