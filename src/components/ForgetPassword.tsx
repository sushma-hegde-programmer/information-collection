<<<<<<< HEAD
import { Button, Form, Input, notification, Space } from "antd";
import React, { useEffect, useState } from "react";
=======
import { Button, Form, Input, Space } from "antd";
import React, { useState } from "react";
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Typography } from "antd";
import UserService from "../services/UserService";
import EmailActions from "../store/actions/EmailAction";
import styles from "../styles/style";
<<<<<<< HEAD
import { AppType, ForgotPasswordResType } from "../types";
import constants from "../constants";
import axios from "axios";
import ForgotTokenActions from "../store/actions/ForgotTokenActions";
=======
import { AppType } from "../types";
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
type Props = {
  hideLoader: () => void;
  showLoader: () => void;
};

const { Text } = Typography;

const ForgetPassword: React.FC<Props> = ({ hideLoader, showLoader }) => {
  const [email, setEmail] = useState("");
  const error1: any = useSelector<AppType>((state) => state.emailError.error);
<<<<<<< HEAD

  const userToken = useSelector<AppType>(
    (state) => state.forgotToken.forgot.access_token
  );

  const userId = useSelector<AppType>(
    (state) => state.forgotToken.forgot.userId
  );

  const dispatch = useDispatch();
  const emailerror = bindActionCreators(EmailActions.emailError, dispatch);
  const history = useHistory();
  const mailSuccess = bindActionCreators(
    ForgotTokenActions.mailSuccess,
    dispatch
  );
=======
  const dispatch = useDispatch();
  const emailerror = bindActionCreators(EmailActions.emailError, dispatch);
  const history = useHistory();

>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
  const onFinish = async () => {
    try {
      showLoader();
      const { data } = await UserService.forgotPassword(email);
<<<<<<< HEAD
      console.log("hhhhhhhhhhhh", data.userId);
      hideLoader();
      openNotification("topRight");
      mailSuccess(data);
      setTimeout(() => {
        window.location.href = "/";
      });

      // history.push("/resetPassword");
    } catch (error: any) {
=======
      hideLoader();
      console.log(data);
      history.push("/resetPassword");
    } catch (error) {
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
      console.log(error);
      emailerror(error.message.toString());
      console.log("email error", error1);
      hideLoader();
    }
  };
<<<<<<< HEAD
  const openNotification = (placement: any) => {
    notification.info({
      message: `Notification `,
      description: "Please Check your Email and Reset Your password...!",
    });
  };

  console.log("userToken", userToken);
  console.log("userID", userId);

  const passToken = async () => {
    const url = `${constants.BASE_URL}/auth/token/${userId}`;
    console.log("urlData", url);
    return axios
      .put<ForgotPasswordResType>(url, { userToken })
      .catch((e) => Promise.reject(e.response.data));
  };

=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
<<<<<<< HEAD
            onChange={(e: any) => setEmail(e.target.value)}
=======
            onChange={(e) => setEmail(e.target.value)}
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              style={styles.borderRadius}
<<<<<<< HEAD
              onClick={passToken}
=======
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
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
