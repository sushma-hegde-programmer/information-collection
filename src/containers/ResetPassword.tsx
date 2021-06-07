import { Button, Col, Form, Input, message, Row, Space } from "antd";

import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router";
import Logo from "../components/Logo";
import RecruiterImg from "../components/RecruiterImg";
import styles from "../styles/style";
const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const history = useHistory();
  const su = () => {
    message.success("password Changed Successfully");
    setTimeout(() => {
      history.push("/"); // redirect
    }, 1000);
  };
  const success = () => {
    password === cpassword ? su() : message.error("password not matching");
  };

  return (
    <>
      <Logo />
      <Row wrap={true} className="tab">
        <RecruiterImg />
        <Col
          xs={{ span: 18, offset: 3 }}
          md={{ span: 7, offset: 8 }}
          style={{ marginTop: "6rem" }}
          className="inp"
        >
          <h2>Reset Password</h2>
          <Form
            name="normal_login"
            layout="vertical"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="New Password"
              name="password"
              rules={[
                { required: true, message: "Please Enter New Password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.borderRadius}
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="cpassword"
              rules={[
                { required: true, message: "Please re-enter New Password" },
              ]}
            >
              <Input.Password
                placeholder="Confirm your Password"
                style={styles.borderRadius}
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  style={styles.borderRadius}
                  onClick={success}
                  htmlType="submit"
                >
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default ResetPassword;
