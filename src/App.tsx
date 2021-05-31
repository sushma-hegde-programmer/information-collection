import React, { useState, useEffect, FC } from "react";
import { Button } from "antd";
import PageNavbar from "./components/PageNavBar";
import PageLayout from "./containers/PageLayout";
import ContentPage from "./components/ContentPage";
import PageDrawer from "./components/PageDrawer";
import "./App.css";

function App() {
  return (
    <div>
      <PageDrawer />
      <PageLayout>
        <ContentPage />
      </PageLayout>
    </div>
  );
}

export default App;
