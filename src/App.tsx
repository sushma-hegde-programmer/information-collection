import React, { useState } from "react";
import AppRouter from "./route/AppRouter";
import LoginRouter from "./route/LoginRouter";
import ResetPassword from "./containers/ResetPassword";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginAction() {
    setIsLoggedIn(true);
  }

  function renderOnBasisOfLogin(isLoggedIn: boolean) {
    if (isLoggedIn) {
      return <AppRouter />;
    } else {
      if (window.location.pathname.split("/")[1] === "resetPassword") {
        return <ResetPassword />;
      } else {
        return <LoginRouter loginAction={loginAction} />;
      }
    }
  }

  return <div>{renderOnBasisOfLogin(isLoggedIn)}</div>;
}

export default App;
