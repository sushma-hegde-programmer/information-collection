import React, { useState } from "react";
import AppRouter from "./AppRouter";
import LoginRouter from "./LoginRouter";
import Login from "./components/Login";

function renderOnBasisOfLogin(role: string) {
  console.log("hello");
  const isLoggedIn = true;
  if (isLoggedIn) {
    return <AppRouter role={role} />;
  } else {
    return <Login />; //<LoginRouter isLoggedIn={isLoggedIn}>
  }
}
function App() {
  const [role, setRole] = useState("admin");
  //const [isLoggedIn,setIsLoggedIn] = useState(false)

  return <div>{renderOnBasisOfLogin(role)}</div>;
}

export default App;
