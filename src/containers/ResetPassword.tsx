import { Button, Col, Form, Input, message, Row, Space } from "antd";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======

import React, { useState } from "react";
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
import "./login.css";
import { useHistory } from "react-router";
import Logo from "../components/Logo";
import RecruiterImg from "../components/RecruiterImg";
import styles from "../styles/style";
<<<<<<< HEAD
import axios from "axios";
import constants from "../constants";
import { ForgotPasswordResType, resetPasswordType } from "../types";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [tokenurl, setTokenurl] = useState("");
=======
const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
<<<<<<< HEAD
  console.log("qqqqqqqqqqqqq", userId);

  useEffect(() => {
    setUserId(window.location.pathname.split("/")[2]);
    setTokenurl(JSON.stringify(window.location.pathname.split("/")[3]));
    GetUserId();
  });

  const GetUserId = async () => {
    const url = `${constants.BASE_URL}/auth/${userId}`;
    console.log("urlData", url);
    return axios
      .get(url)
      .then((data) => setToken(data.data.userToken))
      .catch((e) => Promise.reject(e.response.data));
  };

  console.log("database", token);
  console.log("url email", tokenurl);
  const onFinish = () => {
    token !== tokenurl ? passToken() : console.log("diffrent");
    //history.push("/");
    // passToken();
    setTimeout(() => {
      window.location.href = "/";
    });
  };
  const passToken = async () => {
    const url = `${constants.BASE_URL}/auth/forgot/${userId}`;
    console.log("urlData", url);
    return axios
      .put<resetPasswordType>(url, { password })
      .catch((e) => Promise.reject(e.response.data));
  };
  console.log("gffgfffffffffff", password);
=======

>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
<<<<<<< HEAD
            onFinish={onFinish}
=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
<<<<<<< HEAD
                onChange={(e: any) => setPassword(e.target.value)}
=======
                onChange={(e) => setPassword(e.target.value)}
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
<<<<<<< HEAD
                onChange={(e: any) => setCpassword(e.target.value)}
=======
                onChange={(e) => setCpassword(e.target.value)}
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
              />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  style={styles.borderRadius}
<<<<<<< HEAD
                  // onClick={co}
=======
                  onClick={success}
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
