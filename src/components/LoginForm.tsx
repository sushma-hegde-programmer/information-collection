import { Form, Input, Button, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "antd";
import styles from "../styles/style";
import { Link, useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import StorageService from "../services/StorageService";
import UserService from "../services/UserService";
import UserActions from "../store/actions/UserActions";
import { AppType } from "../types";
type Props = {
  forgot: () => void;
  hideLoader: () => void;
  showLoader: () => void;
  loginAction: () => void;
};
const { Text } = Typography;
const LoginForm: React.FC<Props> = ({
  forgot,
  hideLoader,
  showLoader,
  loginAction,
}) => {
  console.log("in login form", loginAction);
  const item: any = window.localStorage.getItem("email");
  const pass: any = window.localStorage.getItem("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const error: any = useSelector<AppType>((state) => state.userSession.error);
  //const state = useSelector<AppType>((state) => state.loading);

  const history = useHistory();
  const dispatch = useDispatch();
  const loginSucess = bindActionCreators(UserActions.loginSuccess, dispatch);
  const loginError = bindActionCreators(UserActions.loginError, dispatch);
  // //const  loginSucess  = bindActionCreators(UserActions.loginSuccess, dispatch);
  const fromStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1rem",
  };
  useEffect(() => {});
  const onFinish = async () => {
    try {
      showLoader();
      const { data } = await UserService.login(email, password);
      await StorageService.storeData("token", data.access_token);
      console.log("hello", data);
      window.localStorage.setItem("email", JSON.stringify(email));
      window.localStorage.setItem("password", JSON.stringify(password));
      window.localStorage.setItem("userId", JSON.stringify(userId));
      loginSucess(data);
      setUserId(data.userId);
      {
        loginAction();
      }
      hideLoader();
    } catch (e: any) {
      console.log(e);
      loginError(e.message.toString());
      hideLoader();
    }
  };

  return (
    <>
      <h2>Login</h2>
      <Text type="danger">{error}</Text>

      <Form
        name="normal_login"
        layout="vertical"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter valid email!!",
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Enter Your Email Id"
            style={styles.borderRadius}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Enter Your PassWord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.borderRadius}
          />
        </Form.Item>
        <Form.Item style={fromStyle}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link to="/" style={{ float: "right" }} onClick={forgot}>
            Forgot Password
          </Link>
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={styles.borderRadius} htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginForm;
