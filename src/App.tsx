import React, { useState } from "react";
import AppRouter from "./AppRouter";
import LoginRouter from "./LoginRouter";
import "./App.css";

function App() {
  //take role from backend once the user logs in
  const [role, setRole] = useState("Admin");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginAction() {
    setIsLoggedIn(true);
  }

  function renderOnBasisOfLogin(role: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      return <AppRouter role={role} />;
    } else {
      return <LoginRouter loginAction={loginAction} />;
    }
  }

  return <div>{renderOnBasisOfLogin(role, isLoggedIn)}</div>;
}

export default App;
