import { Button, Col, Form, Input, message, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./login.css";
import { useHistory } from "react-router";
import Logo from "../components/Logo";
import RecruiterImg from "../components/RecruiterImg";
import styles from "../styles/style";
import axios from "axios";
import constants from "../constants";
import { ForgotPasswordResType, resetPasswordType } from "../types";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const [tokenurl, setTokenurl] = useState("");
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
            onFinish={onFinish}
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
                onChange={(e: any) => setPassword(e.target.value)}
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
                onChange={(e: any) => setCpassword(e.target.value)}
              />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  style={styles.borderRadius}
                  // onClick={co}
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
