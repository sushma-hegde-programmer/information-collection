import React, { useState } from "react";
import PageAppBar from "./PageAppBar";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function PageDrawer() {
  const [visible, setVisible] = useState(true);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div>
      <nav className="menuBar">
        <div className="menuCon">
          <Button
            className="barsMenu"
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          >
            <span className="barsBtn"></span>
          </Button>

          <Drawer
            title="Careator Technologies"
            placement="left"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <PageAppBar />
          </Drawer>
        </div>
      </nav>
    </div>
  );
}

export default PageDrawer;
