import { Button, Form, Input, Space } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Typography } from "antd";
import UserService from "../services/UserService";
import EmailActions from "../store/actions/EmailAction";
import styles from "../styles/style";
import { AppType } from "../types";
type Props = {
  hideLoader: () => void;
  showLoader: () => void;
};

const { Text } = Typography;

const ForgetPassword: React.FC<Props> = ({ hideLoader, showLoader }) => {
  const [email, setEmail] = useState("");
  const error1: any = useSelector<AppType>((state) => state.emailError.error);
  const dispatch = useDispatch();
  const emailerror = bindActionCreators(EmailActions.emailError, dispatch);
  const history = useHistory();

  const onFinish = async () => {
    try {
      showLoader();
      const { data } = await UserService.forgotPassword(email);
      hideLoader();
      console.log(data);
      history.push("/resetPassword");
    } catch (error) {
      console.log(error);
      emailerror(error.message.toString());
      console.log("email error", error1);
      hideLoader();
    }
  };
  return (
    <>
      <h2>Forgot Password</h2>
      <Text type="danger">{error1}</Text>
      <Form
        name="normal_login"
        layout="vertical"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="userEmail"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            placeholder="Enter Your Email"
            style={styles.borderRadius}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              style={styles.borderRadius}
            >
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default ForgetPassword;
