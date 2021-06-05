import React from "react";

type Props = {
  loginAction: () => void;
};

const Login: React.FC<Props> = ({ loginAction }) => {
  console.log(loginAction);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginAction}>Login</button>
    </div>
  );
};

export default Login;
