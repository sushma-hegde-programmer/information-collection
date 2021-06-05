import React, { useState } from "react";
import AppRouter from "./AppRouter";
import LoginRouter from "./LoginRouter";
import Login from "./components/Login";

function App() {
  const [role, setRole] = useState("admin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginAction() {
    setIsLoggedIn(true);
  }

  function renderOnBasisOfLogin(role: string, isLoggedIn: boolean) {
    console.log("hello");
    if (isLoggedIn) {
      return <AppRouter role={role} />;
    } else {
      return <Login loginAction={loginAction} />; //<LoginRouter isLoggedIn={isLoggedIn}>
    }
  }

  return <div>{renderOnBasisOfLogin(role, isLoggedIn)}</div>;
}

export default App;
