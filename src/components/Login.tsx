import React from "react";

type Props = {
  loginAction: () => void;
};

const Login: React.FC<Props> = ({ loginAction }) => {
  console.log(loginAction);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginAction}>click me</button>
    </div>
  );
};

export default Login;
