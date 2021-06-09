import React from "react";
import { Menu } from "antd";
import "./UserInfo.css";

function UserInfo() {
  return (
    <Menu className="userinfo">
      <Menu.Item key="view-profile">View Profile</Menu.Item>
      <Menu.Item
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
