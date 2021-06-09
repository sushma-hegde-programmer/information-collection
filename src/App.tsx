import React, { useState } from "react";
import AppRouter from "./AppRouter";
import LoginRouter from "./LoginRouter";
<<<<<<< HEAD
import ResetPassword from "./containers/ResetPassword";
import "./App.css";

function App() {
=======
import "./App.css";

function App() {
  //take role from backend once the user logs in
  const [role, setRole] = useState("Admin");
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginAction() {
    setIsLoggedIn(true);
  }

  function renderOnBasisOfLogin(isLoggedIn: boolean) {
    if (isLoggedIn) {
      return <AppRouter />;
    } else {
<<<<<<< HEAD
      if (window.location.pathname.split("/")[1] === "resetPassword") {
        return <ResetPassword />;
      } else {
        return <LoginRouter loginAction={loginAction} />;
      }
=======
      return <LoginRouter loginAction={loginAction} />;
>>>>>>> 34b230427f3c50e6af7babd43e9034b74ff5ffe7
    }
  }

  return <div>{renderOnBasisOfLogin(isLoggedIn)}</div>;
}

export default App;
